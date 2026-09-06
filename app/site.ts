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
