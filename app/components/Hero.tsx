import Demo from "./Demo";

export default function Hero() {
  return (
    <header className="relative flex min-h-[92vh] items-center overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)]">
      {/* خلفية هادئة عمداً — العرض الحيّ هو ما يجب أن يتحرّك، لا الخلفية */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="mesh mesh-warm" />
        <div className="mesh mesh-cool" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_56%_at_50%_44%,rgba(255,255,255,.92)_0%,rgba(255,255,255,.72)_44%,rgba(255,255,255,.42)_74%,rgba(255,255,255,.24)_100%)]" />
      </div>

      <div className="hero-in relative z-10 mx-auto w-full max-w-[900px] px-6 pb-16 pt-28 text-center">
        <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-4 py-1.5 text-[12.5px] backdrop-blur-sm">
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-[var(--color-blue)]" aria-hidden />
          وكالة ذكاء اصطناعي سعودية
        </div>

        <h1 className="text-[clamp(30px,5.4vw,56px)] font-extrabold leading-[1.26] tracking-tight">
          وكلاء يردّون.{" "}
          <span className="bg-[linear-gradient(94deg,#1C6FA8_0%,#B98A0C_100%)] bg-clip-text text-transparent">
            وأتمتة تُنفّذ.
          </span>
          <br />
          كلاهما داخل أنظمتكم.
        </h1>

        <p className="mx-auto mt-6 max-w-[50ch] text-[clamp(15px,1.8vw,18px)] leading-relaxed text-[rgba(20,22,26,.68)]">
          نبني ما يتولّى العمل المتكرّر في خدمة العملاء والمبيعات والعمليات — لا
          عروضاً تقديمية.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="#booking" className="btn btn-primary">
            احجز اجتماعاً ↖
          </a>
          <a href="#work" className="btn btn-outline">
            ما نقدّمه ↖
          </a>
        </div>

        {/* العرض الحيّ — يثبت الخدمتين بدل ادّعائهما */}
        <Demo />
      </div>
    </header>
  );
}
