// شهادات حقيقية — أسماء وشركات فعلية
const QUOTES = [
  {
    co: "Trendlet",
    q: "ترجم أفكاري المعقّدة في n8n إلى منتج مكتمل بسرعة واحترافية مذهلة. تواصله ممتاز وأبقاني على اطلاع في كل خطوة. أنصح به بشدّة لمن يحتاج أتمتة عالية المستوى.",
    by: "محمد المطيري",
    role: "صاحب عمل — تجارة إلكترونية",
    initials: "MA",
    tint: "bg-[#6D3BEF]",
  },
  {
    co: "Smartble",
    q: "حوّل أفكاري المعقّدة إلى وكيل n8n عالي الأداء، واختصر زمن الرد لدينا بشكل ملحوظ. محترف وسريع، وأنصح به بقوة.",
    by: "عبدالعزيز",
    role: "مدير — قطاع التعليم",
    initials: "AA",
    tint: "bg-[#0E9F6E]",
  },
  {
    co: "FitZone Gyms",
    q: "التناسق بين الفروع كان أكبر تحدٍّ لدينا. الآن كل فرع يقدّم التجربة المتميّزة نفسها.",
    by: "David Thompson",
    role: "نائب رئيس العمليات — لياقة",
    initials: "DT",
    tint: "bg-[#F0663F]",
  },
];

export default function Testimonials() {
  return (
    <section className="rv border-y border-[var(--line)] bg-[#EFEEF3]">
      <div className="mx-auto max-w-[1120px] px-6 py-24">
        <div className="mb-3.5 text-center text-xs tracking-[.18em] text-[var(--dim)]">
          شهادات العملاء
        </div>
        <h2 className="text-center text-[clamp(26px,4vw,40px)] font-extrabold leading-tight tracking-tight">
          ماذا يقولون عنّا
        </h2>

        <div className="mt-9 grid items-stretch gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {QUOTES.map((t) => (
            <figure
              key={t.co}
              className="lift flex h-full flex-col rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[0_1px_3px_rgba(20,22,26,.06)]"
            >
              <div className="mb-5 inline-flex rounded-full bg-[rgba(0,163,224,.10)] px-3 py-1 text-[12.5px] font-bold text-[var(--color-blue)] en">
                {t.co}
              </div>

              <blockquote className="mb-5 text-[15px] leading-relaxed text-[rgba(20,22,26,.82)]">
                «{t.q}»
              </blockquote>

              <figcaption className="mt-auto flex items-center gap-3 border-t border-[var(--line)] pt-4">
                <div
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-[13px] font-bold text-white en ${t.tint}`}
                  aria-hidden
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[14px] font-bold leading-tight">{t.by}</div>
                  <div className="mt-0.5 text-[12.5px] text-[var(--dim)]">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
