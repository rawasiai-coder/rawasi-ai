import { eyebrow, h2 } from "./styles";
import type { Dict } from "../i18n/types";

// مرجع التخطيط: Mixpanel على Mobbin — صفوف مستديرة بمؤشر +/×
// ponytail: <details> أصلي — المتصفح يتولّى الفتح والإغلاق وإتاحة الوصول بلا JS.
// المؤشّر + لا شيفرون: رمز غير اتجاهي فلا يحتاج عكساً بين اللغتين.
export default function Faq({ d }: { d: Dict["faq"] }) {
  return (
    <section id="faq" className="rv mx-auto max-w-[860px] px-6 py-24">
      <div className={eyebrow}>{d.eyebrow}</div>
      <h2 className={h2}>{d.title}</h2>

      <div className="mt-9 space-y-3">
        {d.items.map((f) => (
          <details
            key={f.q}
            className="group rounded-xl border border-[var(--line)] bg-[var(--color-panel)] px-5 open:border-black/20"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-start text-[16px] font-bold [&::-webkit-details-marker]:hidden">
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
