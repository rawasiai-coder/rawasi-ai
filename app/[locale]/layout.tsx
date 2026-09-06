import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import {
  DEFAULT_LOCALE,
  DIR,
  LOCALES,
  OG_LOCALE,
  OTHER,
  isLocale,
} from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";
import { EMAIL, PHONE_DISPLAY, SITE_URL } from "../site";

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

  /* ponytail: metadataBase يجعل كلّ المسارات النسبية أدناه مطلقة عند التصيير.
     hreflang خاصّة لا تعمل إلّا مطلقة، فبدونه كانت تُتجاهل بصمت. */
  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ar: "/ar",
        en: "/en",
        "x-default": `/${DEFAULT_LOCALE}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Rawasi AI",
      title: meta.title,
      description: meta.description,
      url: `/${locale}`,
      locale: OG_LOCALE[locale],
      alternateLocale: OG_LOCALE[OTHER[locale]],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const { meta } = getDictionary(locale);

  /**
   * بيانات منظّمة للشركة — الحقول المعروفة فعلاً من المشروع وحدها.
   * ponytail: url وlogo مطلقان الآن بعد تأكيد النطاق. ويبقى بلا address
   * أو sameAs أو founder لأنّ المشروع لا يحوي أياً منها. البريد والهاتف
   * مأخوذان من app/site.ts، وهما بيانات الشركة الحقيقية.
   */
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rawasi AI",
    alternateName: "رواسي",
    description: meta.description,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/rawasi-mark-black.svg`,
    email: EMAIL,
    telephone: PHONE_DISPLAY,
  };

  return (
    <html lang={locale} dir={DIR[locale]}>
      <body>
        {children}
        <script
          type="application/ld+json"
          // ponytail: JSON.stringify لقيم من المشروع نفسه لا من إدخال مستخدم.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
      </body>
    </html>
  );
}
