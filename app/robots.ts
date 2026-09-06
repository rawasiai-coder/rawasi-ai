import type { MetadataRoute } from "next";
import { SITE_URL } from "./site";

/**
 * robots.txt — يسمح بالكل ويشير إلى خريطة الموقع.
 *
 * ponytail: لا قواعد منع هنا لأنّ الموقع صفحة واحدة بلغتين ولا مسارات خاصّة
 * فيه. أمّا /_next فتُقدَّم منه الأصول التي يحتاجها Google للتصيير، ومنعها
 * يُفسد فحص "الصفحة المتوافقة مع الجوال" لا يحمي شيئاً.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
