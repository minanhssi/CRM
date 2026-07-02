import { NextResponse, type NextRequest } from "next/server";

const PORTFOLIO_ONLY =
  process.env.PORTFOLIO_ONLY === "1" || process.env.PORTFOLIO_ONLY === "true";

export function middleware(request: NextRequest) {
  if (!PORTFOLIO_ONLY) return NextResponse.next();

  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/portfolio") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    return NextResponse.rewrite(new URL("/portfolio", request.url));
  }

  return NextResponse.redirect(new URL("/portfolio", request.url));
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp|avif|ico|css|js|woff|woff2|ttf|otf|eot|txt|xml|json)$).*)",
  ],
};
