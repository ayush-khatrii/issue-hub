import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/prisma/client";

export const config = {
  adapter: PrismaAdapter(prisma),
  providers: [GitHub],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    session({ session, token }: any) {
      session.user.id = token.sub;
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
};
// @ts-ignore
export const { handlers, signIn, signOut, auth } = NextAuth(config);
