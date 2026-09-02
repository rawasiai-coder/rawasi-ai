import type { Locale } from "./config";
import type { Dict } from "./types";
import ar from "./ar";
import en from "./en";

/**
 * ponytail: استيراد ساكن لا ديناميكي. القاموسان صغيران ويُعرضان كاملين في كل
 * صفحة، فالتقسيم الكسول هنا يضيف طلباً بلا مقابل. الصفحة مكوّن خادم، فلا يصل
 * أيّ منهما إلى حزمة المتصفح إلا ما يُمرَّر فعلاً كخصائص.
 */
const DICTIONARIES: Record<Locale, Dict> = { ar, en };

export function getDictionary(locale: Locale): Dict {
  return DICTIONARIES[locale];
}
