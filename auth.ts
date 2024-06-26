import NextAuth from "next-auth";
import { authOptions } from "./lib/auth_options";

export const { handlers, signIn, signOut, auth, unstable_update } =
  NextAuth(authOptions);
