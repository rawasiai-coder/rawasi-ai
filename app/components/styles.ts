/**
 * أصناف مشتركة لرؤوس الأقسام.
 *
 * ponytail: وحدة محايدة لا مكوّنات فيها — يستوردها الخادم والعميل معاً
 * دون جرّ next/image إلى حزمة المتصفح.
 *
 * بلا tracking في أيٍّ منها: العربية نصّ متّصل، وأي letter-spacing يفكّ
 * وصل الحروف. التباعد اللاتيني يُطلب صراحة عبر .en في globals.css.
 */
export const eyebrow = "eyebrow mb-3.5 text-center";
export const h2 =
  "text-center text-[clamp(26px,4vw,40px)] font-extrabold leading-tight";
export const lede = "mx-auto mt-2.5 text-center text-[var(--dim)]";
