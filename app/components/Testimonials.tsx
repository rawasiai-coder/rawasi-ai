import { eyebrow, h2 } from "./styles";
import type { Dict } from "../i18n/types";

/** بيانات العلامة — لا تُترجم. الاقتباس والاسم والدور يأتون من القاموس. */
const BRANDS = [
  { co: "Trendlet", initials: "MA", tint: "bg-[#6D3BEF]" },
  { co: "Smartble", initials: "AA", tint: "bg-[#0E9F6E]" },
  { co: "FitZone Gyms", initials: "DT", tint: "bg-[#F0663F]" },
];

export default function Testimonials({ d }: { d: Dict["testimonials"] }) {
  return (
    <section className="rv border-y border-[var(--line)] bg-[#EFEEF3]">
      <div className="mx-auto max-w-[1120px] px-6 py-24">
        <div className={eyebrow}>{d.eyebrow}</div>
        <h2 className={h2}>{d.title}</h2>

        <div className="stagger mt-9 grid items-stretch gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {d.quotes.map((t, i) => {
            const brand = BRANDS[i];
            return (
              <figure
                key={brand.co}
                className="lift flex h-full flex-col rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[0_1px_3px_rgba(20,22,26,.06)]"
              >
                <div className="en mb-5 inline-flex rounded-full bg-[rgba(0,163,224,.10)] px-3 py-1 text-[12.5px] font-bold text-[var(--color-blue)]">
                  {brand.co}
                </div>

                {/* علامات الاقتباس تتبع اللغة عبر CSS لا عبر النصّ */}
                <blockquote className="quote mb-5 text-[15px] leading-relaxed text-[rgba(20,22,26,.82)]">
                  {t.q}
                </blockquote>

                <figcaption className="mt-auto flex items-center gap-3 border-t border-[var(--line)] pt-4">
                  <div
                    className={`en grid h-10 w-10 shrink-0 place-items-center rounded-full text-[13px] font-bold text-white ${brand.tint}`}
                    aria-hidden
                  >
                    {brand.initials}
                  </div>
                  <div>
                    <div className="text-[14px] font-bold leading-tight">{t.by}</div>
                    <div className="mt-0.5 text-[12.5px] text-[var(--dim)]">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
