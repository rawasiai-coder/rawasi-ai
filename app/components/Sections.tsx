import Image from "next/image";

// أيقونات خطّية بسيطة — inline SVG بلا مكتبة
const ICONS = {
  agent: "M12 2a5 5 0 0 1 5 5v1h1a3 3 0 0 1 0 6h-1v1a5 5 0 0 1-10 0v-1H6a3 3 0 0 1 0-6h1V7a5 5 0 0 1 5-5Zm-2 8v4m4-4v4",
  flow: "M4 6h6M14 6h6M4 18h6M14 18h6M7 6v12M17 6v12M10 12h4",
  system: "M3 5h18v14H3zM3 9h18M7 13h5M7 16h8",
} as const;

const SERVICES = [
  { k: "agent" as const, t: "وكلاء ذكاء اصطناعي", d: "وكلاء يتولّون خدمة العملاء والمبيعات والدعم داخل قنواتكم الحالية." },
  { k: "flow" as const, t: "أتمتة العمليات", d: "ربط أنظمتكم المتفرّقة في سير عمل واحد يعمل دون تدخّل." },
  { k: "system" as const, t: "أنظمة مخصّصة", d: "لوحات تحكّم وتطبيقات مبنية على بياناتكم أنتم، لا قوالب عامة." },
];

const STEPS = [
  {
    k: "01",
    t: "التشخيص",
    d: "نراجع عملياتكم وأدواتكم ونرصد أين يُهدر الوقت والمال.",
    img: "/steps/01.webp",
  },
  {
    k: "02",
    t: "التحليل",
    d: "نحدّد ما يستحق الأتمتة وما لا يستحقها، ونقدّر العائد قبل أي بناء.",
    img: "/steps/02.webp",
  },
  {
    k: "03",
    t: "البناء",
    d: "نبني الوكيل أو سير العمل ونربطه بأنظمتكم الحالية.",
    img: "/steps/03.webp",
  },
  {
    k: "04",
    t: "التشغيل والقياس",
    d: "ندمجه ونُدرّب فريقكم، ثم نقيس الأثر ونحسّن باستمرار.",
    img: "/steps/04.webp",
  },
];

const label = "mb-3.5 text-center text-xs tracking-[.18em] text-[var(--dim)]";
const h2 = "text-center text-[clamp(26px,4vw,40px)] font-extrabold leading-tight tracking-tight";

export function Problem() {
  return (
    <section className="rv mx-auto max-w-[1120px] px-6 py-24">
      <div className={label}>المشكلة</div>
      <h2 className={h2}>
        فرقكم تهدر ساعات في عمل متكرّر.
        <br />
        الأدوات الجاهزة لا تعرف سياق عملكم — نحن نبني ما يعرفه.
      </h2>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="rv mx-auto max-w-[1120px] px-6 py-24">
      <div className={label}>الخدمات</div>
      <h2 className={h2}>ثلاثة أشياء نُتقنها</h2>
      <div className="mt-9 grid items-stretch gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <div
            key={s.k}
            className="lift flex h-full flex-col rounded-2xl border border-[var(--line)] bg-[var(--color-panel)] p-6 shadow-[0_1px_3px_rgba(20,22,26,.06)] transition-[border-color,transform,box-shadow] duration-200 hover:border-black/15"
          >
            {/* مرجع: GitBook / Aboard على Mobbin — أيقونة خطّية في مربّع ملوّن خفيف */}
            <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-[rgba(0,163,224,.10)] text-[var(--color-blue)]">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d={ICONS[s.k]} />
              </svg>
            </div>
            <h3 className="mb-2 text-[19px] font-bold">{s.t}</h3>
            <p className="text-[15px] text-[var(--dim)]">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function How() {
  return (
    <section id="how" className="rv mx-auto max-w-[1120px] px-6 py-24">
      <div className={label}>كيف نعمل</div>
      <h2 className={h2}>من التشخيص إلى التشغيل</h2>
      <p className="mx-auto mt-2.5 max-w-[52ch] text-center text-[var(--dim)]">
        أربع خطوات واضحة. لا مفاجآت ولا مراحل مخفيّة.
      </p>
      {/* مرجع التخطيط: Samara على Mobbin — عمود متعرّج بعمود فقري.
          المسافات مضغوطة عمداً: بند ~200px بدل شاشة كاملة لكل خطوة. */}
      <div className="relative mt-12">
        {/* العمود الفقري — يختفي على الجوال */}
        <div
          className="absolute inset-y-0 start-1/2 hidden w-px -translate-x-1/2 bg-[var(--line)] md:block"
          aria-hidden
        />

        <div className="space-y-10 md:space-y-14">
          {STEPS.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={s.k}
                className="relative grid items-center gap-5 md:grid-cols-2 md:gap-12"
              >
                {/* نقطة على العمود */}
                <span
                  className="absolute start-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[var(--color-bg)] bg-[var(--color-blue)] md:block"
                  aria-hidden
                />

                {/* النص */}
                <div className={flip ? "md:order-2 md:ps-10" : "md:order-1 md:pe-10 md:text-start"}>
                  <div className="mb-2 text-[13px] font-bold tracking-[.16em] text-[var(--color-blue)] en">
                    {s.k}
                  </div>
                  <h4 className="mb-2 text-[clamp(19px,2.2vw,24px)] font-bold">{s.t}</h4>
                  <p className="max-w-[42ch] text-[15px] text-[var(--dim)]">{s.d}</p>
                </div>

                {/* الصورة — بند قصير 5:3 لا 4:5 */}
                <div className={flip ? "md:order-1 md:pe-10" : "md:order-2 md:ps-10"}>
                  <div className="relative aspect-[5/3] overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-[0_1px_3px_rgba(20,22,26,.06)]">
                    <Image
                      src={s.img}
                      alt={s.t}
                      fill
                      sizes="(max-width:768px) 92vw, 480px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-11 text-[13.5px] text-[var(--dim)]">
      <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-4 px-6">
        <div>رواسي — وكالة ذكاء اصطناعي</div>
        <div className="en">© 2026</div>
      </div>
    </footer>
  );
}
