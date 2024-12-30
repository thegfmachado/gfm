import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const userLanguage = request.headers
    .get("accept-language")
    ?.split(",")[0]
    ?.split("-")[0];

  const defaultLocale = userLanguage === "pt" ? "pt" : "en";

  const handleI18nRouting = createMiddleware({
    locales: ["pt", "en"],
    defaultLocale,
  });

  return handleI18nRouting(request);
}

export const config = {
  // Apply middleware to all routes except:
  // - API routes (/api/*)
  // - Next.js static files (_next/static, _next/image)
  // - Common static assets (favicon.ico, icons, manifest, images/*)
  // This ensures localization middleware only processes user-facing pages.
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icons|manifest|images/.*).*)",
  ],
};
