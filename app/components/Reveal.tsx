"use client";

import { useEffect } from "react";

/** يضيف .in لعناصر .rv عند دخولها الشاشة — مرة واحدة لكل عنصر. */
export default function Reveal() {
  useEffect(() => {
    // يُفعّل الإخفاء فقط بعد تحميل JS — بلا JS تظهر الأقسام طبيعياً
    document.documentElement.classList.add("js-rv");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "-60px" }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      document.documentElement.classList.remove("js-rv");
    };
  }, []);

  return null;
}
