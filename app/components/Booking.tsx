"use client";

import { useEffect, useRef } from "react";

// ضع رابط حساب رواسي هنا (أو NEXT_PUBLIC_CALENDLY_URL في .env.local)
const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "";

export default function Booking() {
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!CALENDLY_URL || !box.current) return;

    const theme =
      "hide_gdpr_banner=1&background_color=0F1114&text_color=FFFFFF&primary_color=00A3E0";
    const widget = document.createElement("div");
    widget.className = "calendly-inline-widget";
    widget.dataset.url =
      CALENDLY_URL + (CALENDLY_URL.includes("?") ? "&" : "?") + theme;
    widget.style.cssText = "min-width:320px;height:680px";
    box.current.replaceChildren(widget);

    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.head.appendChild(s);

    return () => {
      s.remove();
    };
  }, []);

  return (
    <section id="booking" className="border-y border-[var(--line)] bg-[var(--color-panel)]">
      <div className="rv mx-auto max-w-[1120px] px-6 py-24">
        <div className="mb-3.5 text-xs tracking-[.18em] text-[var(--dim)]">احجز موعدك</div>
        <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold leading-tight tracking-tight">
          جاهزون نبدأ؟
        </h2>
        <p className="mt-2.5 max-w-[52ch] text-[var(--dim)]">
          جلسة ٣٠ دقيقة. نخرج منها بخطة واضحة — سواء عملنا معاً أو لا.
        </p>

        <div
          ref={box}
          dir="ltr"
          className="relative mt-7 min-h-[420px] overflow-hidden rounded-2xl border border-[var(--line)] bg-[#0A0C0F]"
        >
          {/* البديل — يبقى حتى يُضبط CALENDLY_URL */}
          <div dir="rtl" className="grid h-full min-h-[420px] place-content-center p-10 text-center">
            <div className="mb-3 text-4xl">📅</div>
            <div className="mb-2 text-xs tracking-[.18em] text-[var(--dim)]">
              مكان تقويم Calendly
            </div>
            <p className="mx-auto max-w-[46ch] text-[15px] text-[var(--dim)]">
              يظهر التقويم هنا بمجرد ضبط{" "}
              <code className="en text-[var(--color-blue)]">NEXT_PUBLIC_CALENDLY_URL</code>.
            </p>
          </div>
        </div>

        <div className="mt-3.5 text-center text-[13px] text-[var(--dim)]">
          يجمع Calendly الاسم والبريد وأسئلتك المخصّصة، ويرسل التأكيد والتذكير تلقائياً.
        </div>
      </div>
    </section>
  );
}
