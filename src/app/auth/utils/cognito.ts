import { CognitoUserPool } from "amazon-cognito-identity-js";

export const userPool = new CognitoUserPool({
  UserPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID ?? "", // Your user pool id here
  ClientId: process.env.NEXT_PUBLIC_COGNITO_CREDENTIAL_CLIENT_ID ?? "", // Your client id here
});
