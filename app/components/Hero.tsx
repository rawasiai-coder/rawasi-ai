import Demo from "./Demo";
import HeroArt from "./HeroArt";
import type { Dict } from "../i18n/types";

export default function Hero({
  d,
  demo,
}: {
  d: Dict["hero"];
  demo: Dict["demo"];
}) {
  return (
    <header className="hero-fade relative flex min-h-[92vh] items-center overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)] lg:min-h-[86vh]">
      {/* خلفية هادئة عمداً — اللوحة هي ما يجب أن يتحرّك، لا الخلفية */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="mesh mesh-warm" />
        <div className="mesh mesh-cool" />
        <div className="absolute inset-0 bg-[radial-gradient(48%_44%_at_50%_44%,rgba(255,255,255,.86)_0%,rgba(255,255,255,.54)_46%,rgba(255,255,255,.12)_78%,transparent_100%)]" />
      </div>

      {/* ponytail: عمودان على lg وعمود واحد دونها. العمود النصّي أوّلاً في
          DOM، فالشبكة تقلبه وحدها مع الاتجاه: يسار في الإنجليزية ويمين في
          العربية — بلا أي قاعدة اتجاه مكتوبة يدوياً. minmax(0,..fr) يمنع
          المحتوى من توسيع عموده فوق نصيبه. */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 pb-16 pt-28 lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)] lg:gap-10 xl:gap-14">
        {/* ponytail: .hero-in يجب أن يبقى الأب المباشر للعناصر المتدرّجة —
            قاعدته `.hero-in > *` مع nth-child، فأي غلاف إضافي يلغي التدرّج.
            العرض الحيّ هو الابن الرابع كما كان، فيأخذ تأخير 240ms نفسه. */}
        <div className="hero-in order-1 text-center lg:order-none lg:col-start-1 lg:row-start-1 lg:self-end lg:text-start">
          {/* tracking-tight يسري في اللاتينية ويُلغى في العربية عبر حارس الاتجاه.
              ponytail: سقف أصغر على lg — العنوان صار يقاسم العرض مع اللوحة،
              وعند 56px يتجاوز "Automation that acts." عرض عموده فينكسر. */}
          <h1 className="text-[clamp(30px,5.4vw,56px)] font-extrabold leading-[1.26] tracking-tight lg:text-[clamp(32px,3.1vw,42px)]">
            {d.lead} <span className="grad-accent">{d.accent}</span>
            <br />
            {d.tail}
          </h1>

          <p className="mx-auto mt-6 max-w-[50ch] text-[clamp(15px,1.8vw,18px)] leading-relaxed text-[rgba(20,22,26,.68)] lg:mx-0 lg:max-w-[46ch]">
            {d.lede}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#booking" className="btn btn-primary">
              {d.primary}
            </a>
            <a href="#work" className="btn btn-outline">
              {d.secondary}
            </a>
          </div>

          {/* العرض الحيّ — يثبت الخدمتين بدل ادّعائهما. اللوحة المصوّرة تروي
              القصة، وهذا يعرضها تعمل فعلاً. */}
        </div>

        {/* ponytail: التجاوز مسموح على 2xl وحدها. نسبة العرض تُحسب من العمود
            لا من الشاشة، فعند عرض نافذة يساوي أقصى عرض الشبكة (1280) يصبح
            الهامش الجانبي صفراً وأي تجاوز يُقصّ من اللوحة نفسها — قِيس عند
            1440 فوجد 43px مقصوصة من بطاقات المزايا. من 1536 فأعلى يبقى
            هامش مضمون يزيد على التجاوز، فلا يُقصّ شيء. */}
        <div className="order-2 mx-auto w-full max-w-[620px] lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:max-w-none lg:self-center 2xl:w-[112%]">
          <HeroArt alt={d.artAlt} />
        </div>

        {/* العرض الحيّ — يثبت الخدمتين بدل ادّعائهما. اللوحة تروي القصة،
            وهذا يعرضها تعمل فعلاً.
            ponytail: عنصر شبكة مستقلّ لا ابن للعمود النصّي، لأنّ الترتيب على
            الجوال يضعه بعد اللوحة — ولا سبيل لتخطّي اللوحة وهو متداخل داخل
            عمود آخر. وعلى lg يعود أسفل النص بصفّ ثانٍ في العمود نفسه. */}
        <div className="hero-demo order-3 mx-auto mt-2 w-full max-w-[560px] lg:order-none lg:col-start-1 lg:row-start-2 lg:mx-0 lg:mt-0 lg:max-w-[430px]">
          <Demo d={demo} />
        </div>
      </div>
    </header>
  );
}
