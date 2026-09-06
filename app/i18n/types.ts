/**
 * شكل القاموس. النصّ وحده هنا — الأيقونات والصور والألوان تبقى في المكوّنات،
 * فهي عرض لا ترجمة. المفاتيح ثابتة عبر اللغات ليظلّ الترتيب والتصفية سليمين.
 */

export type ServiceKey = "agent" | "flow" | "system";

export type TagKey = "agents" | "automation" | "integration";

export type OfferingKey =
  | "alwaysOn"
  | "followUp"
  | "hoursBack"
  | "content"
  | "oneTrack"
  | "oneNumber";

export interface Dict {
  meta: { title: string; description: string };

  nav: {
    services: string;
    how: string;
    work: string;
    faq: string;
    openMenu: string;
    closeMenu: string;
    /** نصّ بديل لزرّ تبديل اللغة */
    switchLanguage: string;
    /** تسميات التواصل — المختصرة للوحة الجوال، وaria للأزرار الأيقونية */
    whatsapp: string;
    whatsappAria: string;
    email: string;
    emailAria: string;
  };

  hero: {
    lead: string;
    accent: string;
    tail: string;
    lede: string;
    primary: string;
    secondary: string;
  };

  demo: {
    tabs: [string, string];
    chat: { text: string; me: boolean }[];
    flow: string[];
    /** أرقام الخطوات بنظام اللغة — هندية عربية في ar، لاتينية في en */
    digits: string[];
  };

  problem: { eyebrow: string; lineA: string; lineB: string };

  services: {
    eyebrow: string;
    title: string;
    items: Record<ServiceKey, { t: string; d: string }>;
  };

  how: {
    eyebrow: string;
    title: string;
    lede: string;
    steps: { t: string; d: string }[];
  };

  work: {
    eyebrow: string;
    title: string;
    lede: string;
    filterAll: string;
    tags: Record<TagKey, string>;
    items: Record<OfferingKey, { t: string; d: string }>;
  };

  testimonials: {
    eyebrow: string;
    title: string;
    quotes: { q: string; by: string; role: string }[];
  };

  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };

  booking: {
    eyebrow: string;
    title: string;
    lede: string;
    cta: string;
    placeholderLabel: string;
    placeholderBefore: string;
    placeholderAfter: string;
    note: string;
  };

  /**
   * التذييل يعيد استخدام تسميات التنقّل والخدمات من أقسامها، فلا تُترجم مرتين
   * ولا تنحرف إحداهما عن الأخرى. هنا نصّه الخاص وحده.
   */
  footer: {
    /** اسم العلامة وحده — لسطر حقوق النشر */
    brand: string;
    tagline: string;
    navTitle: string;
    servicesTitle: string;
    rights: string;
  };
}
