import type { NextRequest } from "next/server";
import { getSession } from "./lib";

export async function middleware(request: NextRequest) {
  const session = await getSession();
  const isAdmin = session?.isAdmin;

  if (
    !isAdmin &&
    request.nextUrl.pathname.startsWith("/admin") &&
    !request.nextUrl.pathname.startsWith("/auth/login")
  ) {
    return Response.redirect(new URL("/auth/login", request.url));
  }

  // Redirect authenticated admin users to the admin dashboard if they're accessing the login page
  if (isAdmin && request.nextUrl.pathname === "/auth/login") {
    return Response.redirect(new URL("/admin", request.url));
  }

  // Additional conditions can be added here, e.g., redirecting authenticated non-admin users
}

export const config = {
  matcher: ["/admin/:path*", "/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
