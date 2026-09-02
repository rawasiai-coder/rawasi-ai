import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { DIR, LOCALES, isLocale } from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";

/**
 * التخطيط الجذر داخل مقطع اللغة — Next يسمح بذلك حين لا يوجد app/layout.tsx.
 * ponytail: lang وdir مشتقّان من المقطع، فلا يوجد اتجاه مكتوب يدوياً في أي مكان.
 */

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

// ponytail: params صار وعداً في Next 16 — لا بدّ من await.
export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = getDictionary(locale);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { ar: "/ar", en: "/en" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} dir={DIR[locale]}>
      <body>{children}</body>
    </html>
  );
}
