import Demo from "./Demo";
import type { Dict } from "../i18n/types";

export default function Hero({
  d,
  demo,
}: {
  d: Dict["hero"];
  demo: Dict["demo"];
}) {
  return (
    <header className="relative flex min-h-[92vh] items-center overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)]">
      {/* خلفية هادئة عمداً — العرض الحيّ هو ما يجب أن يتحرّك، لا الخلفية */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="mesh mesh-warm" />
        <div className="mesh mesh-cool" />
        <div className="absolute inset-0 bg-[radial-gradient(48%_44%_at_50%_44%,rgba(255,255,255,.86)_0%,rgba(255,255,255,.54)_46%,rgba(255,255,255,.12)_78%,transparent_100%)]" />
      </div>

      <div className="hero-in relative z-10 mx-auto w-full max-w-[900px] px-6 pb-16 pt-28 text-center">
        {/* tracking-tight يسري في اللاتينية ويُلغى في العربية عبر حارس الاتجاه */}
        <h1 className="text-[clamp(30px,5.4vw,56px)] font-extrabold leading-[1.26] tracking-tight">
          {d.lead} <span className="grad-accent">{d.accent}</span>
          <br />
          {d.tail}
        </h1>

        <p className="mx-auto mt-6 max-w-[50ch] text-[clamp(15px,1.8vw,18px)] leading-relaxed text-[rgba(20,22,26,.68)]">
          {d.lede}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="#booking" className="btn btn-primary">
            {d.primary}
          </a>
          <a href="#work" className="btn btn-outline">
            {d.secondary}
          </a>
        </div>

        {/* العرض الحيّ — يثبت الخدمتين بدل ادّعائهما */}
        <Demo d={demo} />
      </div>
    </header>
  );
}
