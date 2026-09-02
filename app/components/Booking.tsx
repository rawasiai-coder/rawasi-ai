"use client";

import { useEffect, useRef } from "react";
import { eyebrow, h2, lede } from "./styles";
import type { Dict } from "../i18n/types";

// ضع رابط حساب رواسي هنا (أو NEXT_PUBLIC_CALENDLY_URL في .env.local)
const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "";

export default function Booking({ d }: { d: Dict["booking"] }) {
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!CALENDLY_URL || !box.current) return;

    const theme =
      "hide_gdpr_banner=1&background_color=FFFFFF&text_color=14161A&primary_color=00A3E0";
    const widget = document.createElement("div");
    widget.className = "calendly-inline-widget";
    // ponytail: الاتجاه على الأداة وحدها — Calendly مبنيّ للاتينية وقلبه يكسر
    // تخطيطه الداخلي. الحاوية تبقى على اتجاه الصفحة ليصحّ البديل العربي.
    widget.dir = "ltr";
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
    <section id="booking" className="border-y border-[var(--line)] bg-[#EFEEF3]">
      <div className="rv mx-auto max-w-[1120px] px-6 py-24">
        <div className={eyebrow}>{d.eyebrow}</div>
        <h2 className={h2}>{d.title}</h2>
        <p className={`${lede} max-w-[52ch]`}>{d.lede}</p>

        <div
          ref={box}
          className="relative mt-7 min-h-[420px] overflow-hidden rounded-2xl border border-[var(--line)] bg-white"
        >
          {/* البديل — يبقى حتى يُضبط CALENDLY_URL، وعلى اتجاه الصفحة */}
          <div className="grid h-full min-h-[420px] place-content-center p-10 text-center">
            <div className="mb-3 text-4xl">📅</div>
            <div className="eyebrow mb-2">{d.placeholderLabel}</div>
            <p className="mx-auto max-w-[46ch] text-[15px] text-[var(--dim)]">
              {d.placeholderBefore}
              <code className="en text-[var(--color-blue)]">
                NEXT_PUBLIC_CALENDLY_URL
              </code>
              {d.placeholderAfter}
            </p>
          </div>
        </div>

        <div className="mt-3.5 text-center text-[13px] text-[var(--dim)]">{d.note}</div>
      </div>
    </section>
  );
}
