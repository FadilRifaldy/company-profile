// src/middleware.ts
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth; // true kalau user sudah login
  const isLoginPage = req.nextUrl.pathname.startsWith("/login");

  // Jika belum login dan bukan sedang menuju ke /login
  if (!isLoggedIn && !isLoginPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/create-blog"],
};
