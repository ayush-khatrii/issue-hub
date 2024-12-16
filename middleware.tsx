import { NextResponse } from 'next/server';
import { auth } from "@/auth"

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;


  // Define protected routes

  if (isLoggedIn &&
    nextUrl.pathname === '/sign-in' ||
    nextUrl.pathname === '/sign-up'
  ) {
    return NextResponse.redirect(new URL('/', nextUrl.origin));
  }
  if (!isLoggedIn) {
    // Redirect to sign-in if trying to access a protected route while not logged in
    return NextResponse.redirect(new URL('/sign-in', nextUrl.origin));
  }

  // Allow all other requests to proceed
  return NextResponse.next();
});
export const config = {
  matcher: [
    '/issues/new-issue',
    '/issues/edit/:id*'
  ],
}