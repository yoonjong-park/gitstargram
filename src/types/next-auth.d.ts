import { User } from "@/model/user";

declare module "next-auth" {
  interface Session {
    user: User;
  }
}

// https://next-auth.js.org/getting-started/typescript#popular-interfaces-to-augment
