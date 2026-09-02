import { eyebrow, h2 } from "./styles";

// مرجع التخطيط: Mixpanel على Mobbin — صفوف داكنة مستديرة بمؤشر +/−
// ponytail: <details> أصلي — المتصفح يتولّى الفتح والإغلاق وإتاحة الوصول بلا JS
const FAQS = [
  {
    q: "كيف نبدأ العمل مع رواسي؟",
    a: "جلسة تشخيص ساعة نفهم فيها عملياتكم ونحدّد أين تكمن الخسارة. تخرجون منها بخطة واضحة سواء عملنا معاً أو لا.",
  },
  {
    q: "كم يستغرق بناء أول نظام؟",
    a: "نموذج أولي يعمل خلال أسبوعين. ليس مستنداً ولا عرضاً تقديمياً — شيء تجرّبونه بأنفسكم على بياناتكم.",
  },
  {
    q: "هل تعملون مع أنظمتنا الحالية؟",
    a: "نعم. نبني فوق ما لديكم ونربطه، ولا نطلب استبدال أنظمتكم. الربط جزء أساسي من العمل لا إضافة.",
  },
  {
    q: "من يملك الكود والبيانات؟",
    a: "أنتم. الكود يُسلَّم لكم والبيانات تبقى في أنظمتكم. لا حبس تقني ولا اعتماد دائم علينا.",
  },
  {
    q: "ماذا بعد التسليم؟",
    a: "ندرّب فريقكم ونقيس الأثر ونحسّن. المتابعة جزء من العمل لا عقد منفصل.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="rv mx-auto max-w-[860px] px-6 py-24">
      <div className={eyebrow}>الأسئلة الشائعة</div>
      <h2 className={h2}>أسئلة نسمعها كثيراً</h2>

      <div className="mt-9 space-y-3">
        {FAQS.map((f) => (
          <details
            key={f.q}
            className="group rounded-xl border border-[var(--line)] bg-[var(--color-panel)] px-5 open:border-black/20"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[16px] font-bold [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="shrink-0 text-xl text-[var(--color-blue)] transition-transform duration-200 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="pb-5 text-[15px] leading-relaxed text-[var(--dim)]">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
