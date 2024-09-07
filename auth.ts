import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
export const config = {
  providers: [GitHub],
  pages: {
    signIn: "/sign-in",
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);

// import NextAuth from "next-auth";
// import GitHub from "next-auth/providers/github";

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [GitHub],
//   pages: {
//     signIn: "/sign-in",
//   },
//   callbacks: {
//     async authorized({ request: { nextUrl }, auth }) {
//       const isLoggedIn = !!auth?.user;
//       const { pathname } = nextUrl;

//       if (pathname.startsWith("/sign-in") && isLoggedIn) {
//         return Response.redirect(new URL("/", nextUrl.origin));
//       }
//       if (!isLoggedIn && pathname.startsWith("/dashboard")) {
//         return Response.redirect(new URL("/sign-in", nextUrl.origin));
//       }
//       return !!auth;
//     },
//   },
// });

// async authorized({ request, auth }) {
//   const url = request.nextUrl

//   if(request.method === "POST") {
//     const { authToken } = (await request.json()) ?? {}
//     // If the request has a valid auth token, it is authorized
//     const valid = await validateAuthToken(authToken)
//     if(valid) return true
//     return NextResponse.json("Invalid auth token", { status: 401 })
//   }

//   // Logged in users are authenticated, otherwise redirect to login page
//   return !!auth.user
// }
