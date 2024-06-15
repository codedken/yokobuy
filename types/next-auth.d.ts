import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: User & DefaultSession["user"];
  }

  interface User {
    firstName: String | null;
    lastName: String | null;
    phone: String | null;
  }
}
