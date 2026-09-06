"use client";

import { useEffect } from "react";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "";
const THEME =
  "hide_gdpr_banner=1&background_color=FFFFFF&text_color=14161A&primary_color=00A3E0";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

/**
 * يفتح Calendly كطبقة منبثقة من أي رابط يشير إلى #booking.
 *
 * ponytail: مستمع واحد على المستند بدل ربط كل زر — الأزرار موزّعة على
 * النافبار والهيرو والتذييل، وبعضها يُعاد رسمه عند تبديل اللغة.
 */
export default function CalendlyPopup() {
  useEffect(() => {
    if (!CALENDLY_URL) return;

    // ورقة أنماط Calendly — بدونها تظهر الطبقة بلا تنسيق
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(css);

    const js = document.createElement("script");
    js.src = "https://assets.calendly.com/assets/external/widget.js";
    js.async = true;
    document.head.appendChild(js);

    const url = CALENDLY_URL + (CALENDLY_URL.includes("?") ? "&" : "?") + THEME;

    function onClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href="#booking"]'
      );
      if (!link) return;

      // بلا السكربت بعد؟ اترك الرابط يمرّر إلى القسم — لا نكسر الزر
      if (!window.Calendly) return;

      e.preventDefault();
      window.Calendly.initPopupWidget({ url });
    }

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      css.remove();
      js.remove();
    };
  }, []);

  return null;
}
