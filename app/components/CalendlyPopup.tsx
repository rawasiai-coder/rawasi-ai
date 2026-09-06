"use client";

import { useEffect } from "react";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "";
/**
 * ألوان رواسي على أداة Calendly.
 * ponytail: هذه كل ما تتيحه الخطة المجانية — الشعار والخطوط وشارة
 * "Powered by Calendly" ثابتة ولا تُزال إلا بترقية الحساب.
 */
const THEME = [
  "hide_gdpr_banner=1",
  "hide_landing_page_details=1", // يتخطّى صفحة الترحيب إلى التقويم مباشرة
  "hide_event_type_details=1",   // العمود الأيسر مكرّر — الصفحة تشرح الاجتماع
  "background_color=ffffff",
  "text_color=14161a",
  "primary_color=00a3e0",
].join("&");

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
