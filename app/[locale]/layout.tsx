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
import { EMAIL, PHONE_DISPLAY, SITE_URL, SOCIAL } from "../site";

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

  /* صورة المعاينة عند مشاركة الرابط — تعريف واحد يستعمله OG وتويتر معاً.
     ponytail: المسار نسبي عمداً؛ metadataBase يحوّله إلى مطلق عند التصيير،
     فلا يُكتب النطاق مرّتين ولا ينحرف أحدهما عن الآخر. والشبكات الاجتماعية
     لا تقبل إلّا المطلق، فالاعتماد على التحويل مقصود لا سهو.
     الاسم يحمل v1: هذه الشبكات تخزّن الصورة بعنوانها، فأي تحديث لاحق
     يحتاج اسماً جديداً وإلّا بقيت المعاينة القديمة شهوراً. */
  const preview = {
    url: "/og/rawasi-og-v1.jpg",
    width: 1200,
    height: 630,
    alt: "Rawasi AI",
    type: "image/jpeg",
  };

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
      images: [preview],
    },
    twitter: {
      // ponytail: summary_large_image كانت معلنة بلا صورة، فتسقط البطاقة إلى
      // الشكل النصّي الصغير. الصورة هي ما يجعل هذا النوع يعمل أصلاً.
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [preview],
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
   * ponytail: url وlogo مطلقان بعد تأكيد النطاق، وsameAs أُضيف حين صارت
   * الحسابات الرسمية معروفة — وهو ما تربط به محرّكات البحث المنظّمة
   * بحساباتها. ويبقى بلا address أو founder لأنّهما غير معروفين بعد.
   */
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rawasi AI",
    alternateName: "رواسي",
    description: meta.description,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/rawasi-mark.svg`,
    email: EMAIL,
    telephone: PHONE_DISPLAY,
    sameAs: SOCIAL.map((s) => s.url),
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
