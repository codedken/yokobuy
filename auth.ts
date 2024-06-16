import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./lib/prisma";
import Google from "next-auth/providers/google";
import type { Provider } from "next-auth/providers";

const providers: Provider[] = [Google];

export const ProviderMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

export const config = {
  trustHost: true,
  adapter: PrismaAdapter(prisma),
  providers: providers,
  pages: {
    signIn: "/login",
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
