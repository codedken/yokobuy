import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    phone: String | null;
  }

  interface Session {
    user: User & DefaultSession["user"];
  }
}
