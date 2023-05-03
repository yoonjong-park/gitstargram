import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      username: string;
    } & DefaultSession["user"];
  }
}

// https://next-auth.js.org/getting-started/typescript#popular-interfaces-to-augment
