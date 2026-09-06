import type { MetadataRoute } from "next";
import { DEFAULT_LOCALE, LOCALES, OTHER } from "./i18n/config";
import { SITE_URL } from "./site";

/**
 * خريطة الموقع — مدخل لكلّ لغة، وكلٌّ منهما يعلن بديله عبر alternates.
 *
 * ponytail: مشتقّة من LOCALES لا مكتوبة يدوياً، فإضافة لغة ثالثة لاحقاً
 * تظهر هنا تلقائياً. والجذر / غير مُدرَج عمداً: proxy يحوّله إلى لغة حسب
 * المتصفّح، وإدراج مسار يعيد 307 يجعل Google يبلّغ عنه كتحويل في الخريطة.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === DEFAULT_LOCALE ? 1 : 0.8,
    alternates: {
      languages: {
        [locale]: `${SITE_URL}/${locale}`,
        [OTHER[locale]]: `${SITE_URL}/${OTHER[locale]}`,
      },
    },
  }));
}
