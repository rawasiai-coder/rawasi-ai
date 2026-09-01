// مرجع التخطيط: Hex على Mobbin — شبكة داكنة، الشعار فوق الاقتباس
// TODO: استبدل بشهادات حقيقية. شهادة مخترعة في صفحة وكالة تُكتشف في أول اجتماع.
const QUOTES = [
  { co: "عميل ١", q: "اختصرنا زمن الرد على العملاء من ساعات إلى دقائق.", by: "مدير التشغيل" },
  { co: "عميل ٢", q: "الفريق نفسه يخدم ضعف عدد الطلبات بلا توظيف إضافي.", by: "المؤسس" },
  { co: "عميل ٣", q: "أول مرة تكون بياناتنا في مكان واحد نثق به.", by: "مدير المالية" },
];

export default function Testimonials() {
  return (
    <section className="rv border-y border-[var(--line)] bg-[#EFEEF3]">
      <div className="mx-auto max-w-[1120px] px-6 py-24">
        <div className="mb-3.5 text-xs tracking-[.18em] text-[var(--dim)]">شهادات العملاء</div>
        <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold leading-tight tracking-tight">
          ماذا يقولون
        </h2>

        <div className="mt-9 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {QUOTES.map((t) => (
            <figure
              key={t.co}
              className="rounded-2xl border border-[var(--line)] bg-[var(--color-panel)] p-6"
            >
              <div className="mb-5 grid h-9 w-[110px] place-items-center rounded-md border border-dashed border-black/15 text-[12px] text-black/40">
                {t.co}
              </div>
              <blockquote className="text-[15.5px] leading-relaxed text-[rgba(20,22,26,.82)]">
                «{t.q}»
              </blockquote>
              <figcaption className="mt-4 text-[13px] text-[var(--dim)]">{t.by}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
