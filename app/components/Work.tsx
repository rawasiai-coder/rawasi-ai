"use client";

import { useState } from "react";

const FILTERS = ["الكل", "وكلاء", "أتمتة", "تكامل"] as const;
type Filter = (typeof FILTERS)[number];

type Item = {
  t: string;
  d: string;
  tag: Exclude<Filter, "الكل">;
  icon: string;
};

// ما نقدّمه — لا ما أنجزناه. كلها في نطاق وكلاء AI والأتمتة.
const OFFERINGS: Item[] = [
  {
    t: "وكيل خدمة العملاء",
    d: "يرد على واتساب والبريد والمحادثات على مدار الساعة، ويصعّد للبشر عند الحاجة فقط.",
    tag: "وكلاء",
    icon: "M12 2a5 5 0 0 1 5 5v1h1a3 3 0 0 1 0 6h-1v1a5 5 0 0 1-10 0v-1H6a3 3 0 0 1 0-6h1V7a5 5 0 0 1 5-5Zm-2 8v4m4-4v4",
  },
  {
    t: "وكيل المبيعات",
    d: "يتابع العملاء المحتملين، يؤهّلهم بأسئلة ذكية، ويحجز الاجتماعات في تقويمكم.",
    tag: "وكلاء",
    icon: "M3 17l6-6 4 4 8-8M21 7v5h-5",
  },
  {
    t: "أتمتة العمليات الداخلية",
    d: "الفواتير والتقارير وإدخال البيانات — سير عمل يعمل بلا تدخّل يومي.",
    tag: "أتمتة",
    icon: "M4 6h6M14 6h6M4 18h6M14 18h6M7 6v12M17 6v12M10 12h4",
  },
  {
    t: "أتمتة المحتوى والتسويق",
    d: "توليد ونشر ومتابعة الحملات عبر قنواتكم، بمراجعة بشرية قبل النشر.",
    tag: "أتمتة",
    icon: "M4 4h16v12H5.2L4 17.5V4Zm4 4h8M8 11h5",
  },
  {
    t: "ربط الأنظمة",
    d: "نصل متجركم ونظام المخزون والمحاسبة وواتساب في مسار واحد متّصل.",
    tag: "تكامل",
    icon: "M9 12a3 3 0 0 1 3-3h1a4 4 0 0 0 0-8H9a4 4 0 0 0 0 8m6 0a3 3 0 0 1-3 3h-1a4 4 0 0 0 0 8h4a4 4 0 0 0 0-8",
  },
  {
    t: "لوحات تحكّم وتقارير",
    d: "رقم واحد صحيح بدل خمسة ملفات إكسل — يتحدّث نفسه لحظياً.",
    tag: "تكامل",
    icon: "M3 5h18v14H3zM3 9h18M7 13h5M7 16h8",
  },
];

export default function Work() {
  const [active, setActive] = useState<Filter>("الكل");
  const shown =
    active === "الكل" ? OFFERINGS : OFFERINGS.filter((w) => w.tag === active);

  return (
    <section id="work" className="rv mx-auto max-w-[1120px] px-6 py-24">
      <div className="mb-3.5 text-xs tracking-[.18em] text-[var(--dim)]">
        ما نقدّمه
      </div>
      <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold leading-tight tracking-tight">
        وكلاء وأتمتة تعمل نيابةً عنكم
      </h2>
      <p className="mt-2.5 max-w-[54ch] text-[var(--dim)]">
        كل خدمة تبدأ من عملية يدوية متكرّرة وتنتهي بنظام يعمل وحده.
      </p>

      <div className="mt-7 flex flex-wrap gap-2.5">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={`rounded-full border px-5 py-2 text-sm transition-colors ${
              active === f
                ? "border-[var(--color-blue)] bg-[var(--color-blue)] font-bold text-white"
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
            className="lift group rounded-2xl border border-[var(--line)] bg-[var(--color-panel)] p-6 shadow-[0_1px_3px_rgba(20,22,26,.06)] transition-[border-color,transform] duration-200 hover:border-black/15"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[rgba(0,163,224,.10)] text-[var(--color-blue)] transition-colors duration-200 group-hover:bg-[rgba(0,163,224,.18)]">
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
                  <path d={w.icon} />
                </svg>
              </div>
              <span className="rounded-full bg-[rgba(20,22,26,.05)] px-2.5 py-1 text-[11px] text-[var(--dim)]">
                {w.tag}
              </span>
            </div>
            <h3 className="mb-2 text-[18px] font-bold">{w.t}</h3>
            <p className="text-[14.5px] leading-relaxed text-[var(--dim)]">{w.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
