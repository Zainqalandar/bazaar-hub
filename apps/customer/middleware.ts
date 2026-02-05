import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPaths = ["/cart", "/checkout", "/orders"];

export function middleware(request: NextRequest) {
  const isProtected = protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path));
  if (!isProtected) {
    return NextResponse.next();
  }

  const token = request.cookies.get("bh_access")?.value;
  if (!token) {
    const loginUrl = new URL("/auth/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/cart", "/checkout", "/orders"],
};
