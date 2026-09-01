"use client";

import { useState } from "react";

// TODO: استبدل بأعمال حقيقية
const FILTERS = ["الكل", "وكلاء", "أتمتة", "أنظمة"] as const;
type Filter = (typeof FILTERS)[number];

const WORK: { t: string; c: string; tag: Exclude<Filter, "الكل"> }[] = [
  { t: "وكيل خدمة عملاء", c: "تجزئة", tag: "وكلاء" },
  { t: "أتمتة الفوترة", c: "لوجستيات", tag: "أتمتة" },
  { t: "لوحة تشغيل", c: "تجارة إلكترونية", tag: "أنظمة" },
  { t: "وكيل مبيعات", c: "عقار", tag: "وكلاء" },
  { t: "ربط المخزون", c: "تجزئة", tag: "أتمتة" },
  { t: "بوابة تقارير", c: "خدمات", tag: "أنظمة" },
];

export default function Work() {
  const [active, setActive] = useState<Filter>("الكل");
  const shown = active === "الكل" ? WORK : WORK.filter((w) => w.tag === active);

  return (
    <section id="work" className="rv mx-auto max-w-[1120px] px-6 py-24">
      <div className="mb-3.5 text-xs tracking-[.18em] text-[var(--dim)]">أعمالنا</div>
      <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold leading-tight tracking-tight">
        ما بنيناه
      </h2>
      <p className="mt-2.5 max-w-[54ch] text-[var(--dim)]">
        كل مشروع بدأ بعملية يدوية مكرّرة وانتهى بنظام يعمل وحده.
      </p>

      {/* المرشّحات */}
      <div className="mt-7 flex flex-wrap gap-2.5">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={`rounded-full border px-5 py-2 text-sm transition-colors ${
              active === f
                ? "border-[var(--color-blue)] bg-[var(--color-blue)] font-bold text-[var(--color-ink)]"
                : "border-[var(--line)] text-[var(--dim)] hover:border-white/35 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-7 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((w) => (
          <article
            key={w.t}
            className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--color-panel)] transition-[border-color,transform] duration-200 hover:border-white/30 hover:[transform:translateY(-3px)]"
          >
            <div className="grid aspect-[16/10] place-items-center bg-[linear-gradient(140deg,rgba(0,163,224,.22),rgba(58,157,187,.16)_48%,rgba(232,133,27,.20))] text-3xl">
              🧩
            </div>
            <div className="p-5">
              <div className="mb-1 text-[11.5px] tracking-[.14em] text-[var(--dim)]">
                {w.c}
              </div>
              <h3 className="text-[17px] font-bold">{w.t}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
