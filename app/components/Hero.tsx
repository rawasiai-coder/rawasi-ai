export default function Hero() {
  return (
    <header className="relative flex min-h-[92vh] items-center overflow-hidden">
      {/* موجة التدرّج — ثلاث طبقات بسرعات مختلفة */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="wave wave-a" />
        <div className="wave wave-b" />
        <div className="wave wave-c" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,9,11,.10)_0%,rgba(8,9,11,.30)_55%,rgba(8,9,11,.72)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1120px] grid-cols-1 items-center gap-10 px-6 pt-24 pb-10 md:grid-cols-[1.02fr_.98fr]">
        {/* النص — يمين */}
        <div className="text-center md:text-right">
          <div className="mb-3 bg-[linear-gradient(94deg,var(--color-sky)_6%,var(--color-blue)_34%,var(--color-teal)_60%,var(--color-amber)_88%)] bg-clip-text text-[clamp(30px,4.6vw,52px)] font-extrabold leading-none tracking-tight text-transparent">
            رواسي
          </div>

          <h1 className="text-[clamp(28px,4.4vw,48px)] font-bold leading-[1.32] tracking-tight [text-shadow:0_2px_26px_rgba(0,0,0,.4)]">
            وكلاء وأنظمة أتمتة
            <br />
            تعمل داخل عملياتكم
          </h1>

          <p className="mt-[18px] max-w-[44ch] text-[clamp(15px,1.7vw,18px)] text-white/85 md:mr-0 mx-auto md:mx-0">
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

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[13px] text-[var(--dim)] md:justify-start">
            {/* TODO: استبدل بالرقم الحقيقي قبل النشر */}
            <span>
              <b className="text-white">٢٠+</b> شركة في السعودية
            </span>
            <span>·</span>
            <span>جلسة تشخيص ٣٠ دقيقة</span>
          </div>
        </div>

        {/* الصورة — يسار */}
        <div className="relative order-first grid min-h-[400px] place-items-center md:order-none">
          <div
            className="absolute aspect-square w-[82%] rounded-full opacity-60 blur-[58px]"
            style={{
              background:
                "radial-gradient(circle,var(--color-blue) 0%,var(--color-teal) 34%,var(--color-amber) 64%,transparent 74%)",
            }}
            aria-hidden
          />
          <div className="relative z-10 aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-[20px] border border-dashed border-white/25 bg-white/5 backdrop-blur-[3px]">
            {/* ضع hero.png في public/ ثم استبدل هذا البديل بـ:
                <Image src="/hero.png" alt="" fill className="object-contain" priority />
                (وأضف import Image from "next/image" أعلى الملف) */}
            <div className="grid h-full place-items-center text-center text-sm leading-loose text-[var(--dim)]">
              <div>
                <div className="text-3xl">🖼️</div>
                <div>مكان الصورة</div>
                <small className="block text-[11.5px] opacity-70">
                  ضع hero.png في public/
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
