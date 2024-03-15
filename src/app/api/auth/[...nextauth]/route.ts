import NextAuth, {
  AuthOptions,
  Awaitable,
  Profile,
  RequestInternal,
  User,
  getServerSession,
} from "next-auth";
import { Provider } from "next-auth/providers";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  CognitoUser,
  AuthenticationDetails,
  CognitoUserSession,
  CognitoUserPool,
} from "amazon-cognito-identity-js";
import {
  COGNITO_CREDENTIAL_CLIENT_ID,
  COGNITO_DOMAIN,
  COGNITO_REGION,
  COGNITO_SOCIAL_CLIENT_ID,
  COGNITO_SOCIAL_CLIENT_SECRET,
  COGNITO_USER_POOL_ID,
  NEXTAUTH_URL,
} from "./init";
import { logger } from "../../../../utils";
import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";

type TProvider = "Amazon" | "Apple" | "Facebook" | "Google";
export const userPool = new CognitoUserPool({
  UserPoolId: COGNITO_USER_POOL_ID!, // Your user pool id here
  ClientId: COGNITO_CREDENTIAL_CLIENT_ID!, // Your client id here
});

const getProvider: (provider: TProvider) => Provider = (
  provider: TProvider,
) => {
  return {
    id: `cognito_${provider.toLowerCase()}`,
    name: `${provider}`,
    type: "oauth",
    idToken: true,
    clientId: COGNITO_SOCIAL_CLIENT_ID,
    clientSecret: COGNITO_SOCIAL_CLIENT_SECRET,
    checks: ["state", "nonce"],
    issuer: `https://cognito-idp.${COGNITO_REGION}.amazonaws.com`,
    wellKnown: `https://cognito-idp.${COGNITO_REGION}.amazonaws.com/${COGNITO_USER_POOL_ID}/.well-known/openid-configuration`,
    authorization: {
      url: `${COGNITO_DOMAIN}/oauth2/authorize`,
      params: {
        response_type: "code",
        client_id: COGNITO_SOCIAL_CLIENT_ID,
        identity_provider: provider,
        scope: "openid email profile",
        redirect_uri: `${NEXTAUTH_URL}/api/auth/callback/cognito_${provider.toLowerCase()}`,
      },
    },

    profile(profile, tokens) {
      console.log("profile:", profile);
      console.log("token:", tokens);
      return {
        id: profile["cognito:username"], // provided id from cognito
        oauthId: profile.sub, // provided id from oauth
        email: profile.email,
        name: profile.name,
        accessToken: tokens.access_token,
        image: profile.picture,
      };
    },
  };
};
const credentialProvider: Provider = CredentialsProvider({
  id: "credentials",
  name: "Email",
  credentials: {
    email: { label: "email", type: "text" },
    password: { label: "password", type: "password" },
  },
  authorize: function (
    credentials: Record<string, string> | undefined,
    req: Pick<RequestInternal, "headers" | "body" | "query" | "method">,
  ): Awaitable<User | null> {
    const cognitoUser = new CognitoUser({
      Username: credentials?.email ?? "",
      Pool: userPool,
    });
    const authenticationDetails = new AuthenticationDetails({
      Username: credentials?.email ?? "",
      Password: credentials?.password,
    });
    logger.log(`req: ${JSON.stringify(req)}`);
    return new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (session) => {
          if (session instanceof CognitoUserSession) {
            const userInfo = {
              id: session.getIdToken().payload.sub,
              email: session.getIdToken().payload.email,
              name: session.getIdToken().payload.name,
              idToken: session.getIdToken().getJwtToken(),
              accessToken: session.getAccessToken().getJwtToken(),
              refreshToken: session.getRefreshToken().getToken(),
            };
            resolve(userInfo);
          }
        },
        onFailure: (error) => {
          if (error) {
            reject(error);
          }
        },
      });
    });
  },
});
export const authOptions: AuthOptions = {
  providers: [
    ...["Google"].map((p) => getProvider(p as TProvider)),
    credentialProvider,
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin

      if (account && user) {
        token.accessToken =
          account?.provider === "credentials"
            ? user.accessToken
            : account?.access_token;
        token.name =
          account?.provider === "credentials"
            ? user.name
            : (profile as Profile & { given_name: string }).given_name;
        logger.log("account:", JSON.stringify(account));
        logger.log("user:", JSON.stringify(user));
        logger.log("returned token:", JSON.stringify(token));
        return token;
      }
      return token;
    },
    async session({ session, token, user }) {
      if (token) {
        // Send properties to the client, like an access_token and user id from a provider.
        session.accessToken = token.accessToken as string;
        session.sub = token.sub as string;
        logger.log(`token: ${JSON.stringify(token)}`);
        logger.log(`session: ${JSON.stringify(session)}`);
        return session;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth?sign=in",
  },
};
// Use it in server contexts
export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
