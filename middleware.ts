import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "./lib/auth";
import { createMiddleware, detectBot, shield } from "@arcjet/next";
import aj from "./lib/arcjet";

export async function middleware(request: NextRequest) {
  const publicPaths = ["/", "/sign-in", "/about", "/privacy"];

  // Allow requests to public paths without session
  if (publicPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Get session info
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // If no session, redirect to /sign-in
  if (!session) {
    console.log("Session not found, redirecting to /sign-in");
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // User is authenticated, continue
  return NextResponse.next();
}

// Shield protection by help of arcjet
const validate = aj
  .withRule(
    shield({
      mode: "LIVE",
    })
  )
  .withRule(
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE", "G00G1E_CRAWLER"], // allow other bots if you want to.
    })
  );

// Export middleware with arcjet bot protection
export default createMiddleware(validate);

// Exclude api, _next static files, favicon, sign-in, assets, root, about, privacy
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets|^$|about|privacy).*)",
  ],
};
