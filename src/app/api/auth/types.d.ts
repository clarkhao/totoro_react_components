import * as NextAuth from "next-auth";

declare module "next-auth" {
  type DefaultSession = {
    accessToken?: string;
    sub?: string;
  } & NextAuth.DefaultSession

  type DefaultUser = {
    idToken?: string;
    accessToken?: string;
    refreshToken?: string;
  } & NextAuth.DefaultUser
}
