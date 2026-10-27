/**
 * بيانات التواصل الحقيقية — مصدر واحد يستعمله الشريط والتذييل معاً.
 * ponytail: الرقم بصيغة دولية بلا + ولا فواصل، فهذا ما يقبله wa.me.
 */

export const WHATSAPP_NUMBER = "966507878156";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/** للعرض عند الحاجة — بصيغة دولية مقروءة */
export const PHONE_DISPLAY = "+966 50 787 8156";

export const EMAIL = "Contact@rawasi.ai";
export const EMAIL_URL = `mailto:${EMAIL}`;

/**
 * النطاق الإنتاجي — النطاق المجرّد هو الأساسي، وwww يُحوَّل إليه عند المزوّد.
 *
 * ponytail: مصدر واحد لأنّ canonical وhreflang وsitemap وrobots وJSON-LD
 * يجب أن تشير جميعها إلى المضيف نفسه؛ اختلاف واحد بينها يُبطل الباقي.
 * بلا شرطة مائلة في النهاية — فURL يضيفها عند التركيب.
 */
export const SITE_URL = "https://rawasi.ai";

/**
 * حسابات التواصل الاجتماعي الرسمية.
 *
 * ponytail: مصفوفة واحدة مرتّبة — يستعملها التذييل للعرض ويستعملها
 * sameAs في JSON-LD للتحقّق من الهويّة. فصلهما يعني حساباً يُضاف في
 * مكان ويُنسى في الآخر.
 *
 * `as const` يثبّت المفاتيح، فمفتاح أيقونة غير موجود يسقط عند التحقّق
 * من الأنواع لا في المتصفّح.
 */
export const SOCIAL = [
  {
    key: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61594118886695",
  },
  {
    key: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/rawasiai_/",
  },
  { key: "tiktok", label: "TikTok", url: "https://www.tiktok.com/@rawasiai_" },
  { key: "x", label: "X", url: "https://x.com/RawasiAi_" },
] as const;

export type SocialKey = (typeof SOCIAL)[number]["key"];
