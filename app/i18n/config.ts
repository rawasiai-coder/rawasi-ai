/** اللغات المدعومة واتجاه كل منها. وحدة محايدة — يستوردها الخادم والعميل. */

export const LOCALES = ["ar", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "ar";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** الاتجاه مشتقّ من اللغة لا مكتوب يدوياً في القالب. */
export const DIR: Record<Locale, "rtl" | "ltr"> = { ar: "rtl", en: "ltr" };

/** اللغة المقابلة — يستعملها زرّ التبديل. */
export const OTHER: Record<Locale, Locale> = { ar: "en", en: "ar" };

/** ما يظهر على زرّ التبديل: اسم اللغة الأخرى بلغتها هي. */
export const SWITCH_LABEL: Record<Locale, string> = { ar: "العربية", en: "EN" };
