"use client";

import { useState } from "react";
import { eyebrow, h2, lede } from "./styles";
import type { Dict, OfferingKey, TagKey } from "../i18n/types";

/** العرض فقط: الأيقونة والوسم والترتيب. النصّ يأتي من القاموس. */
type Offering = {
  k: OfferingKey;
  tag: TagKey;
  icon: string;
  /** أيقونة لها اتجاه قراءة — تُعكس أفقياً في العربية */
  flip?: true;
};

const OFFERINGS: Offering[] = [
  {
    k: "alwaysOn",
    tag: "agents",
    icon: "M12 2a5 5 0 0 1 5 5v1h1a3 3 0 0 1 0 6h-1v1a5 5 0 0 1-10 0v-1H6a3 3 0 0 1 0-6h1V7a5 5 0 0 1 5-5Zm-2 8v4m4-4v4",
  },
  {
    k: "followUp",
    tag: "agents",
    // سهم نموّ يصعد نحو نهاية المحور الزمني — والزمن يجري يساراً في العربية
    icon: "M3 17l6-6 4 4 8-8M21 7v5h-5",
    flip: true,
  },
  {
    k: "hoursBack",
    tag: "automation",
    icon: "M4 6h6M14 6h6M4 18h6M14 18h6M7 6v12M17 6v12M10 12h4",
  },
  {
    k: "content",
    tag: "automation",
    // فقاعة حديث: ذيلها وأسطر نصّها تبدأ من اليسار — تُعكس للعربية
    icon: "M4 4h16v12H5.2L4 17.5V4Zm4 4h8M8 11h5",
    flip: true,
  },
  {
    k: "oneTrack",
    tag: "integration",
    icon: "M9 12a3 3 0 0 1 3-3h1a4 4 0 0 0 0-8H9a4 4 0 0 0 0 8m6 0a3 3 0 0 1-3 3h-1a4 4 0 0 0 0 8h4a4 4 0 0 0 0-8",
  },
  {
    k: "oneNumber",
    tag: "integration",
    // لوحة تحكّم: أسطر المحتوى تبدأ من اليسار — تُعكس للعربية
    icon: "M3 5h18v14H3zM3 9h18M7 13h5M7 16h8",
    flip: true,
  },
];

const TAG_ORDER: TagKey[] = ["agents", "automation", "integration"];

export default function Work({ d }: { d: Dict["work"] }) {
  // ponytail: الحالة مفتاح ثابت لا نصّ مترجم — التصفية لا تنكسر بتغيّر اللغة.
  const [active, setActive] = useState<TagKey | "all">("all");
  const shown =
    active === "all" ? OFFERINGS : OFFERINGS.filter((w) => w.tag === active);

  const filters: { key: TagKey | "all"; label: string }[] = [
    { key: "all", label: d.filterAll },
    ...TAG_ORDER.map((t) => ({ key: t, label: d.tags[t] })),
  ];

  return (
    <section id="work" className="rv mx-auto max-w-[1120px] px-6 py-24">
      <div className={eyebrow}>{d.eyebrow}</div>
      <h2 className={h2}>{d.title}</h2>
      <p className={`${lede} max-w-[54ch]`}>{d.lede}</p>

      <div className="mt-7 flex flex-wrap justify-center gap-2.5">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            aria-pressed={active === f.key}
            className={`rounded-full border px-5 py-2 text-sm transition-colors ${
              active === f.key
                ? "border-[var(--color-blue)] bg-[var(--color-blue)] font-bold text-white"
                : "border-[var(--line)] text-[var(--dim)] hover:border-black/30 hover:text-[var(--color-ink)]"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="stagger mt-7 grid items-stretch gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((w) => (
          <article
            key={w.k}
            className="lift group flex h-full flex-col rounded-2xl border border-[var(--line)] bg-[var(--color-panel)] p-6 shadow-[0_1px_3px_rgba(20,22,26,.06)] transition-[border-color,transform] duration-200 hover:border-black/15"
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
                  className={w.flip ? "icon-flip" : undefined}
                >
                  <path d={w.icon} />
                </svg>
              </div>
              <span className="rounded-full bg-[rgba(20,22,26,.05)] px-2.5 py-1 text-[11px] text-[var(--dim)]">
                {d.tags[w.tag]}
              </span>
            </div>
            <h3 className="mb-2 text-[18px] font-bold">{d.items[w.k].t}</h3>
            <p className="text-[14.5px] leading-relaxed text-[var(--dim)]">
              {d.items[w.k].d}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
