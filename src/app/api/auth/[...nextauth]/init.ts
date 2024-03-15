export const COGNITO_SOCIAL_CLIENT_ID: string | undefined =
  process.env.COGNITO_SOCIAL_CLIENT_ID;
if (!COGNITO_SOCIAL_CLIENT_ID) {
  throw new Error("please config cognito social client id");
}
export const COGNITO_SOCIAL_CLIENT_SECRET: string | undefined =
  process.env.COGNITO_SOCIAL_CLIENT_SECRET;
if (!COGNITO_SOCIAL_CLIENT_SECRET) {
  throw new Error("please config cognito social client secret");
}
export const COGNITO_CREDENTIAL_CLIENT_ID: string | undefined =
  process.env.COGNITO_CREDENTIAL_CLIENT_ID;
if (!COGNITO_CREDENTIAL_CLIENT_ID) {
  throw new Error("please config cognito client id");
}
export const COGNITO_REGION: string | undefined = process.env.COGNITO_REGION;
if (!COGNITO_REGION) {
  throw new Error("please config cognito region");
}
export const COGNITO_USER_POOL_ID: string | undefined =
  process.env.COGNITO_USER_POOL_ID;
if (!COGNITO_USER_POOL_ID) {
  throw new Error("please config cognito user pool id");
}
export const COGNITO_DOMAIN: string | undefined = process.env.COGNITO_DOMAIN;
if (!COGNITO_DOMAIN) {
  throw new Error("please config cognito domain");
}
export const NEXTAUTH_URL: string | undefined = process.env.NEXTAUTH_URL;
if (!NEXTAUTH_URL) {
  throw new Error("please config nextauth url");
}
