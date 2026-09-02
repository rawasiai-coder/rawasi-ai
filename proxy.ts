import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "./app/i18n/config";

/**
 * ponytail: proxy لا middleware — الاسم القديم مهجور في Next 16.
 * المسار بلا لغة يُحوَّل إلى تفضيل المتصفح إن كان مدعوماً، وإلا إلى العربية.
 */

function pickLocale(request: NextRequest) {
  const header = request.headers.get("accept-language") ?? "";
  // أول وسم لغة مدعوم في الترويسة — بلا مكتبة، فالخيارات لغتان فقط.
  const preferred = header
    .split(",")
    .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase());

  return LOCALES.find((l) => preferred.includes(l)) ?? DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${pickLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // يتخطّى ملفات Next الداخلية والأصول الثابتة
  matcher: ["/((?!_next|favicon.ico|brand|fonts|steps|.*\\.[\\w]+$).*)"],
};
