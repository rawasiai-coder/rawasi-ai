const SERVICES = [
  { n: "١", t: "وكلاء ذكاء اصطناعي", d: "وكلاء يتولّون خدمة العملاء والمبيعات والدعم داخل قنواتكم الحالية." },
  { n: "٢", t: "أتمتة العمليات", d: "ربط أنظمتكم المتفرّقة في سير عمل واحد يعمل دون تدخّل." },
  { n: "٣", t: "أنظمة مخصّصة", d: "لوحات تحكّم وتطبيقات مبنية على بياناتكم أنتم، لا قوالب عامة." },
];

const STEPS = [
  { k: "٠١", t: "جلسة تشخيص", d: "نفهم عملياتكم ونحدّد أين تكمن الخسارة." },
  { k: "٠٢", t: "نموذج أولي", d: "شيء يعمل خلال أسبوعين، لا مستند." },
  { k: "٠٣", t: "تشغيل", d: "ندمجه في أنظمتكم ونُدرّب فريقكم." },
  { k: "٠٤", t: "متابعة", d: "نقيس الأثر ونحسّن." },
];

const label = "mb-3.5 text-xs tracking-[.18em] text-[var(--dim)]";
const h2 = "text-[clamp(26px,4vw,40px)] font-extrabold leading-tight tracking-tight";

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
      <div className="mt-9 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <div
            key={s.n}
            className="rounded-2xl border border-[var(--line)] bg-[var(--color-panel)] p-6 transition-[border-color,transform] duration-200 hover:border-white/30 hover:[transform:translateY(-3px)]"
          >
            <div className="mb-4 grid h-[34px] w-[34px] place-items-center rounded-[9px] bg-[linear-gradient(135deg,var(--color-sky),var(--color-blue))] text-sm font-extrabold text-[var(--color-ink)]">
              {s.n}
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
      <h2 className={h2}>أربع خطوات</h2>
      <div className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s) => (
          <div key={s.k}>
            <div className="mb-2 text-[13px] font-bold tracking-[.1em] text-[var(--color-blue)]">
              {s.k}
            </div>
            <h4 className="mb-1.5 text-[17px] font-bold">{s.t}</h4>
            <p className="text-[14.5px] text-[var(--dim)]">{s.d}</p>
          </div>
        ))}
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
