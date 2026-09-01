import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative flex min-h-[92vh] items-center overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)]">
      {/* تدرّج شبكي ناعم — مرجع: Hims على Mobbin. أصفر يمين، أزرق يسار. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="mesh mesh-warm" />
        <div className="mesh mesh-cool" />
        {/* حجاب فاتح خلف النص فقط ليبقى مقروءاً */}
        <div className="absolute inset-0 bg-[radial-gradient(58%_54%_at_30%_50%,rgba(255,255,255,.72)_0%,rgba(255,255,255,.34)_46%,transparent_78%)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1240px] grid-cols-1 items-end gap-8 px-6 pt-24 md:grid-cols-[1fr_1fr] md:gap-4 md:pt-20">
        {/* النص — يمين */}
        <div className="hero-in pb-16 text-center md:order-2 md:pb-24 md:text-start">
          <div className="mb-3 bg-[linear-gradient(94deg,var(--color-blue)_0%,#1C6FA8_46%,#8A6A12_100%)] bg-clip-text text-[clamp(30px,4.6vw,52px)] font-extrabold leading-none tracking-tight text-transparent">
            رواسي
          </div>

          <h1 className="text-[clamp(28px,4.4vw,48px)] font-bold leading-[1.32] tracking-tight ">
            وكلاء وأنظمة أتمتة
            <br />
            تعمل داخل عملياتكم
          </h1>

          <p className="mt-[18px] max-w-[44ch] text-[clamp(15px,1.7vw,18px)] text-[rgba(20,22,26,.72)] mx-auto md:mx-0">
            نبني ما يتولّى العمل المتكرّر في خدمة العملاء والمبيعات والدعم — لا
            عروضاً تقديمية.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="#booking" className="btn btn-primary">
              احجز اجتماعاً ↖
            </a>
            <a href="#services" className="btn btn-outline">
              أعمالنا ↖
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[13px] text-[rgba(20,22,26,.55)] md:justify-start">
            {/* TODO: استبدل بالرقم الحقيقي قبل النشر */}
            <span>
              <b className="text-[var(--color-ink)]">٢٠+</b> شركة في السعودية
            </span>
            <span>·</span>
            <span>جلسة تشخيص ٣٠ دقيقة</span>
          </div>
        </div>

        {/* الصورة — يسار، تملأ العمود كاملاً حتى أسفل الهيرو */}
        <div className="relative order-first flex min-h-[420px] items-end justify-center md:order-1 md:min-h-[70vh] md:pb-6">
          <Image
            src="/hero.webp"
            alt="فريق رواسي"
            width={1000}
            height={1339}
            priority
            sizes="(max-width:768px) 92vw, 46vw"
            className="portrait-in relative z-10 h-auto max-h-[66vh] w-auto max-w-full object-contain object-bottom"
          />
        </div>
      </div>
    </header>
  );
}
