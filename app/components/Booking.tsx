import { eyebrow, h2, lede } from "./styles";
import type { Dict } from "../i18n/types";

/**
 * قسم الحجز — زرّ يفتح Calendly كطبقة منبثقة، لا تقويم مضمّن.
 *
 * ponytail: الفتح يتولّاه CalendlyPopup عبر مستمع واحد على كل رابط #booking،
 * فالنافبار والهيرو وهذا الزرّ تفتح جميعها نفس الطبقة بلا تكرار منطق.
 * وبلا رابط مضبوط يمرّر الرابط إلى القسم كما هو — لا زرّ ميّت.
 */
export default function Booking({ d }: { d: Dict["booking"] }) {
  return (
    // ponytail: border-t لا border-y — الحدّ السفلي كان يقع تماماً عند بداية
    // التذييل فيرسم الخطّ الذي يُراد إذابته. الحدّ العلوي يبقى كما هو.
    <section id="booking" className="border-t border-[var(--line)] bg-[#EFEEF3]">
      <div className="rv mx-auto max-w-[1120px] px-6 py-24 text-center">
        <div className={eyebrow}>{d.eyebrow}</div>
        <h2 className={h2}>{d.title}</h2>
        <p className={`${lede} mx-auto max-w-[52ch]`}>{d.lede}</p>

        <div className="mt-9 flex justify-center">
          <a href="#booking" className="btn btn-primary text-[15px]">
            {d.cta}
          </a>
        </div>

        <div className="mt-4 text-[13px] text-[var(--dim)]">{d.note}</div>
      </div>
    </section>
  );
}
