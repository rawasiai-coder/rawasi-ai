"use client";

import { useState } from "react";

// TODO: استبدل بأعمال حقيقية
const FILTERS = ["الكل", "وكلاء", "أتمتة", "أنظمة"] as const;
type Filter = (typeof FILTERS)[number];

const G = {
  blue: "linear-gradient(140deg,#00A3E0,#3A9DBB)",
  teal: "linear-gradient(140deg,#3A9DBB,#BBE0FF)",
  warm: "linear-gradient(140deg,#DF9626,#E8851B)",
  mix: "linear-gradient(140deg,#00A3E0,#3A9DBB 50%,#DF9626)",
};

const WORK: { t: string; c: string; tag: Exclude<Filter, "الكل">; grad: string }[] = [
  { t: "وكيل خدمة عملاء", c: "تجزئة", tag: "وكلاء", grad: G.blue },
  { t: "أتمتة الفوترة", c: "لوجستيات", tag: "أتمتة", grad: G.warm },
  { t: "لوحة تشغيل", c: "تجارة إلكترونية", tag: "أنظمة", grad: G.mix },
  { t: "وكيل مبيعات", c: "عقار", tag: "وكلاء", grad: G.teal },
  { t: "ربط المخزون", c: "تجزئة", tag: "أتمتة", grad: G.warm },
  { t: "بوابة تقارير", c: "خدمات", tag: "أنظمة", grad: G.blue },
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
                : "border-[var(--line)] text-[var(--dim)] hover:border-black/30 hover:text-[var(--color-ink)]"
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
            className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--color-panel)] shadow-[0_1px_3px_rgba(20,22,26,.06)] transition-[border-color,transform] duration-200 lift hover:border-black/15"
          >
            {/* صورة مصغّرة بتدرّج مختلف لكل مشروع — تُستبدل بلقطة حقيقية لاحقاً */}
            <div
              className="relative aspect-[16/10] overflow-hidden"
              style={{ background: w.grad }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_0%,rgba(255,255,255,.45),transparent_60%)]" />
              <div className="absolute bottom-3 start-3 rounded-md bg-white/85 px-2.5 py-1 text-[11px] font-bold text-[var(--color-ink)] backdrop-blur-sm">
                {w.tag}
              </div>
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
