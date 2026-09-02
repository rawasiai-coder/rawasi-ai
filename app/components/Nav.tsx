"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#services", label: "الخدمات" },
  { href: "#how", label: "كيف نعمل" },
  { href: "#work", label: "ما نقدّمه" },
  { href: "#faq", label: "الأسئلة" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // ponytail: Escape يغلق القائمة — الفأرة ليست وسيلة الإغلاق الوحيدة.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[rgba(246,245,248,.82)] backdrop-blur-[14px]">
      {/* ponytail: لا dir="ltr" هنا. الشريط يقرأ بالعربية — العلامة تبدأ من
          اليمين والزر ينتهي إلى اليسار، وهو ما تفعله ms-auto تلقائياً. */}
      <div className="flex w-full items-center gap-4 px-6 py-3 md:px-8">
        {/* العلامة — قفل لاتيني مغلق الاتجاه: يجلس يميناً وداخله يبقى LTR */}
        <a href="#" dir="ltr" className="flex shrink-0 items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/rawasi-mark-black.svg" alt="" className="h-[26px]" />
          <span className="en text-[19px] font-extrabold tracking-tight">
            rawasi<span className="text-[var(--color-blue)]">ai</span>
          </span>
        </a>

        {/* الروابط — التوسيط ليس اتجاهياً: left-1/2 مع -translate-x-1/2
            يعطي المركز نفسه في الاتجاهين، وترتيب الروابط يتبع اتجاه الصفحة. */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--dim)] transition-colors hover:text-[var(--color-ink)]"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* زر الحجز — ms-auto يدفعه إلى الطرف المقابل للعلامة */}
        <a
          href="#booking"
          className="ms-auto hidden shrink-0 rounded-lg bg-[var(--color-ink)] px-5 py-2.5 text-[13.5px] font-bold text-white transition-[transform,background] duration-200 hover:bg-[#2A2E36] active:scale-[.97] md:block"
        >
          احجز اجتماعاً
        </a>

        {/* زرّ القائمة — جوال فقط، على الطرف المقابل للعلامة */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          className="ms-auto grid h-10 w-10 shrink-0 place-items-center gap-[5px] rounded-lg transition-colors hover:bg-black/5 md:hidden"
        >
          <span
            className={`block h-[1.5px] w-[18px] bg-[var(--color-ink)] transition-transform duration-200 ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-[18px] bg-[var(--color-ink)] transition-opacity duration-150 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-[18px] bg-[var(--color-ink)] transition-transform duration-200 ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* اللوحة — تنسدل رأسياً، والمحاذاة منطقية (text-start) */}
      <div
        id="mobile-nav"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div>
          <div className="flex flex-col gap-1 border-t border-[var(--line)] px-6 pb-4 pt-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-start text-[15px] text-[var(--dim)] transition-colors hover:bg-black/5 hover:text-[var(--color-ink)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-[var(--color-ink)] px-5 py-3 text-center text-[14px] font-bold text-white"
            >
              احجز اجتماعاً
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
