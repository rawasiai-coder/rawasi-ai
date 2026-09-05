import Image from "next/image";
import { eyebrow, h2, lede } from "./styles";
import type { Locale } from "../i18n/config";
import type { Dict, ServiceKey } from "../i18n/types";

// أيقونات خطّية بسيطة — inline SVG بلا مكتبة. عرض لا نصّ، فتبقى خارج القاموس.
const ICONS: Record<ServiceKey, string> = {
  agent: "M12 2a5 5 0 0 1 5 5v1h1a3 3 0 0 1 0 6h-1v1a5 5 0 0 1-10 0v-1H6a3 3 0 0 1 0-6h1V7a5 5 0 0 1 5-5Zm-2 8v4m4-4v4",
  flow: "M4 6h6M14 6h6M4 18h6M14 18h6M7 6v12M17 6v12M10 12h4",
  system: "M3 5h18v14H3zM3 9h18M7 13h5M7 16h8",
};

const SERVICE_ORDER: ServiceKey[] = ["agent", "flow", "system"];

// الأيقونات التي لها اتجاه قراءة: أسطر المحتوى في "system" تبدأ من اليسار،
// فتُعكس في العربية. أيقونتا agent وflow متماثلتان — عكسهما بلا معنى.
const DIRECTIONAL = new Set<ServiceKey>(["system"]);

const STEP_IMAGES = [
  "/steps/01.webp",
  "/steps/02.webp",
  "/steps/03.webp",
  "/steps/04.webp",
];

export function Problem({ d }: { d: Dict["problem"] }) {
  return (
    <section className="rv mx-auto max-w-[1120px] px-6 py-24">
      <div className={eyebrow}>{d.eyebrow}</div>
      <h2 className={h2}>
        {d.lineA}
        <br />
        {d.lineB}
      </h2>
    </section>
  );
}

export function Services({ d }: { d: Dict["services"] }) {
  return (
    <section id="services" className="rv mx-auto max-w-[1120px] px-6 py-24">
      <div className={eyebrow}>{d.eyebrow}</div>
      <h2 className={h2}>{d.title}</h2>
      <div className="stagger mt-9 grid items-stretch gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {SERVICE_ORDER.map((k) => (
          <div
            key={k}
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
                className={DIRECTIONAL.has(k) ? "icon-flip" : undefined}
              >
                <path d={ICONS[k]} />
              </svg>
            </div>
            <h3 className="mb-2 text-[19px] font-bold">{d.items[k].t}</h3>
            <p className="text-[15px] text-[var(--dim)]">{d.items[k].d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function How({ d }: { d: Dict["how"] }) {
  return (
    <section id="how" className="rv mx-auto max-w-[1120px] px-6 py-24">
      <div className={eyebrow}>{d.eyebrow}</div>
      <h2 className={h2}>{d.title}</h2>
      <p className={`${lede} max-w-[52ch]`}>{d.lede}</p>
      {/* مرجع التخطيط: Samara على Mobbin — عمود متعرّج بعمود فقري. */}
      <div className="relative mt-12">
        {/* العمود الفقري — يختفي على الجوال.
            ponytail: التوسيط ليس اتجاهياً. start-1/2 كان يعني right:50% في
            العربية فينزاح العنصر بمقدار عرضه؛ left-1/2 مع -translate-x-1/2
            يعطي المركز ذاته في الاتجاهين. */}
        <div
          className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[var(--line)] md:block"
          aria-hidden
        />

        <div className="space-y-10 md:space-y-14">
          {d.steps.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={s.t}
                className="relative grid items-center gap-5 md:grid-cols-2 md:gap-12"
              >
                {/* نقطة على العمود — 12px، فكان انزياحها عن العمود مرئياً */}
                <span
                  className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[var(--color-bg)] bg-[var(--color-blue)] md:block"
                  aria-hidden
                />

                {/* النص */}
                <div className={flip ? "md:order-2 md:ps-10" : "md:order-1 md:pe-10"}>
                  <div className="en mb-2 text-[13px] font-bold tracking-[.16em] text-[var(--color-blue)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className="mb-2 text-[clamp(19px,2.2vw,24px)] font-bold">{s.t}</h4>
                  <p className="max-w-[42ch] text-[15px] text-[var(--dim)]">{s.d}</p>
                </div>

                {/* الصورة — بند قصير 5:3 لا 4:5 */}
                <div className={flip ? "md:order-1 md:pe-10" : "md:order-2 md:ps-10"}>
                  <div className="relative aspect-[5/3] overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-[0_1px_3px_rgba(20,22,26,.06)]">
                    <Image
                      src={STEP_IMAGES[i]}
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

/** رابط تذييل — حالة تحويم وتركيز واضحتان، ومحاذاة منطقية تتبع الاتجاه. */
function FootLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="rounded text-start text-[13.5px] text-[var(--dim)] transition-colors duration-200 hover:text-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-blue)]"
    >
      {children}
    </a>
  );
}

const footHeading =
  "mb-4 text-[13px] font-bold text-[var(--color-ink)]";

/**
 * التذييل — لغة تصميم المرجع: حدّ علوي رفيع، إيقاع 36px، مقاس 13px، لون خافت،
 * وصفّ سفلي واحد يلتفّ عند الضيق. المحتوى وحده أغنى: كتلة علامة + عمودا روابط.
 *
 * ponytail: التسميات تأتي من أقسامها (nav وservices) لا من قاموس التذييل —
 * ترجمة واحدة لكل مصطلح فلا ينحرف "الخدمات" هنا عن "الخدمات" في الشريط.
 */
export function Footer({ d, locale }: { d: Dict; locale: Locale }) {
  const f = d.footer;

  const quickLinks = [
    { href: "#services", label: d.nav.services },
    { href: "#how", label: d.nav.how },
    { href: "#work", label: d.nav.work },
    { href: "#faq", label: d.nav.faq },
  ];

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--color-bg)]">
      <div className="mx-auto max-w-[1100px] px-6 py-[52px]">
        {/* الكتلة العليا — العلامة أعرض من عمودي الروابط */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr] md:gap-8">
          <div className="max-w-[42ch]">
            <a
              href={`/${locale}`}
              dir="ltr"
              // ponytail: الاسم المعروض ناتج text-transform لا نصّ — بلا هذا
              // يقرأ القارئ الصوتي «rawasiai» ملتصقاً.
              aria-label="Rawasi AI"
              className="inline-flex items-center gap-2.5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/rawasi-mark-black.svg" alt="" className="h-[22px]" />
              {/* المعالجة نفسها التي في الشريط، بمقاس يناسب علامة ٢٢px */}
              <span className="en wordmark text-[14px]">
                rawasi
                <span className="wordmark-ai text-[var(--color-blue)]">ai</span>
              </span>
            </a>

            <p className="mt-4 text-[13.5px] leading-relaxed text-[var(--dim)]">
              {f.tagline}
            </p>
          </div>

          <nav aria-label={f.navTitle}>
            <h2 className={footHeading}>{f.navTitle}</h2>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <li key={l.href} className="flex">
                  <FootLink href={l.href}>{l.label}</FootLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={f.servicesTitle}>
            <h2 className={footHeading}>{f.servicesTitle}</h2>
            <ul className="flex flex-col gap-2.5">
              {SERVICE_ORDER.map((k) => (
                <li key={k} className="flex">
                  <FootLink href="#services">{d.services.items[k].t}</FootLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* الصفّ السفلي — نمط .foot في المرجع: يلتفّ بدل أن يتزاحم.
            ponytail: بلا مبدّل لغة هنا — الشريط العلوي يحمله، وتكراره في
            التذييل هدفان لفعل واحد. */}
        <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-[var(--line)] pt-6 text-[13px] text-[var(--dim)]">
          <div>
            <span className="en">© 2026</span> {f.brand}. {f.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}
