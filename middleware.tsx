import { NextResponse } from 'next/server';
import { auth } from "@/auth"

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;


  // Define protected routes
  const protectedRoutes = ['/issues/new-issue'];
  const isProtectedRoute = protectedRoutes.some(route => nextUrl.pathname.startsWith(route));

  if (isLoggedIn &&
    nextUrl.pathname === '/sign-in' ||
    nextUrl.pathname === '/sign-up'
  ) {
    return NextResponse.redirect(new URL('/', nextUrl.origin));
  }
  if (!isLoggedIn && isProtectedRoute) {
    // Redirect to sign-in if trying to access a protected route while not logged in
    return NextResponse.redirect(new URL('/sign-in', nextUrl.origin));
  }

  if (isLoggedIn && nextUrl.pathname === '/sign-in') {
    // Redirect to dashboard if trying to access sign-in while logged in
    return NextResponse.redirect(new URL('/', nextUrl.origin));
  }

  // Allow all other requests to proceed
  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}