import { NextResponse, type NextRequest } from "next/server";

const IS_PROTECTED_PATHS = ["/"];
const IS_AUTH_PATHS = ["/auth"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtectedPath = IS_PROTECTED_PATHS.some((x) =>
    pathname.startsWith(x)
  );
  const isAuthPath = IS_AUTH_PATHS.some((x) => pathname.startsWith(x));

  if (!isProtectedPath && !isAuthPath) {
    return NextResponse.next();
  }

  const loggedIn = request.cookies.has("token");

  if (isAuthPath && loggedIn) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!loggedIn && !isAuthPath) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
