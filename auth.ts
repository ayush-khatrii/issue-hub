import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
export const config = {
  providers: [GitHub],
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

export const { handlers, signIn, signOut, auth } = NextAuth(config);
