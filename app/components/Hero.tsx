// مرجع التخطيط: Front على Mobbin — عنوان مركزي على تدرّج ناعم، بلا صورة
export default function Hero() {
  return (
    <header className="relative flex min-h-[92vh] items-center overflow-hidden bg-[var(--color-bg)] bg-[url(/poster.jpg)] bg-cover bg-center text-[var(--color-ink)]">
      {/* فيديو خلفية — أزرق يسار، ذهبي يمين. 240KB WebM بعد ضغط ffmpeg.
          poster يظهر فوراً فلا تبدو الصفحة فارغة قبل تحميل الفيديو. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/poster.jpg"
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* حجاب أبيض ليبقى النص الداكن مقروءاً فوق الفيديو */}
        <div className="absolute inset-0 bg-[radial-gradient(56%_52%_at_50%_46%,rgba(255,255,255,.90)_0%,rgba(255,255,255,.62)_46%,rgba(255,255,255,.30)_74%,rgba(255,255,255,.16)_100%)]" />
      </div>

      <div className="hero-in relative z-10 mx-auto w-full max-w-[900px] px-6 pb-16 pt-28 text-center">
        {/* شارة صغيرة فوق العنوان */}
        <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-4 py-1.5 text-[12.5px] backdrop-blur-sm">
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-[var(--color-blue)]" aria-hidden />
          وكالة ذكاء اصطناعي سعودية
        </div>

        <h1 className="text-[clamp(32px,6vw,64px)] font-extrabold leading-[1.24] tracking-tight">
          وكلاء وأنظمة أتمتة
          <br />
          <span className="bg-[linear-gradient(94deg,var(--color-blue)_0%,#1C6FA8_52%,#B98A0C_100%)] bg-clip-text text-transparent">
            تعمل داخل عملياتكم
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-[52ch] text-[clamp(16px,1.9vw,19px)] leading-relaxed text-[rgba(20,22,26,.68)]">
          نبني ما يتولّى العمل المتكرّر في خدمة العملاء والمبيعات والدعم — لا
          عروضاً تقديمية.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="#booking" className="btn btn-primary">
            احجز اجتماعاً ↖
          </a>
          <a href="#work" className="btn btn-outline">
            أعمالنا ↖
          </a>
        </div>

        {/* أرقام النتائج — مرجع WRITER على Mobbin */}
        {/* TODO: استبدل بأرقام حقيقية قبل النشر */}
        <div className="mt-14 flex flex-wrap items-start justify-center gap-x-10 gap-y-6">
          <div>
            <div className="text-[clamp(28px,3.6vw,38px)] font-extrabold leading-none">
              ٧٠٪
            </div>
            <div className="mt-1.5 max-w-[18ch] text-[12.5px] leading-snug text-[rgba(20,22,26,.55)]">
              اختصار في زمن الرد على العملاء
            </div>
          </div>
          <div className="h-11 w-px bg-[var(--line)]" aria-hidden />
          <div>
            <div className="text-[clamp(28px,3.6vw,38px)] font-extrabold leading-none">
              ٢٠+
            </div>
            <div className="mt-1.5 max-w-[18ch] text-[12.5px] leading-snug text-[rgba(20,22,26,.55)]">
              شركة في السعودية
            </div>
          </div>
          <div className="h-11 w-px bg-[var(--line)]" aria-hidden />
          <div>
            <div className="text-[clamp(28px,3.6vw,38px)] font-extrabold leading-none">
              ١٤ يوماً
            </div>
            <div className="mt-1.5 max-w-[18ch] text-[12.5px] leading-snug text-[rgba(20,22,26,.55)]">
              حتى أول نموذج يعمل
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
