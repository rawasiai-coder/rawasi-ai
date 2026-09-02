/**
 * أصناف مشتركة لرؤوس الأقسام.
 *
 * ponytail: وحدة محايدة لا مكوّنات فيها — يستوردها الخادم والعميل معاً
 * دون جرّ next/image إلى حزمة المتصفح.
 *
 * tracking-tight مقصود هنا: يسري في الإنجليزية، ويُلغيه حارس الاتجاه في
 * globals.css للعربية لأن التباعد يفكّ وصل حروفها.
 */
export const eyebrow = "eyebrow mb-3.5 text-center";
export const h2 =
  "text-center text-[clamp(26px,4vw,40px)] font-extrabold leading-tight tracking-tight";
export const lede = "mx-auto mt-2.5 text-center text-[var(--dim)]";
