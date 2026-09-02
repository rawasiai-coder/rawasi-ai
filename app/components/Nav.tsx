"use client";

import { useEffect, useState } from "react";
import { OTHER, SWITCH_LABEL, type Locale } from "../i18n/config";
import type { Dict } from "../i18n/types";

export default function Nav({ d, locale }: { d: Dict["nav"]; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [past, setPast] = useState(false);

  const links = [
    { href: "#services", label: d.services },
    { href: "#how", label: d.how },
    { href: "#work", label: d.work },
    { href: "#faq", label: d.faq },
  ];

  const other = OTHER[locale];

  // ponytail: Escape يغلق القائمة — الفأرة ليست وسيلة الإغلاق الوحيدة.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  /**
   * الشريط شفّاف فوق الهيرو وأبيض بعده.
   * ponytail: مراقب تقاطع على الهيرو نفسه لا مستمع scroll — لا عمل في كل إطار،
   * والحدّ يتبع ارتفاع الهيرو الفعلي بدل رقم مكتوب يدوياً. rootMargin يساوي
   * ارتفاع الشريط حتى يتبدّل اللون عند ملامسة حافة الهيرو للشريط لا قبلها.
   */
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => setPast(!entry.isIntersecting),
      { rootMargin: "-72px 0px 0px 0px" }
    );
    // الشريط يفترض وجود هيرو أعلى الصفحة — وهو الحال في كل مسارات الموقع.
    // بلا هيرو لا يُنشأ المراقب ويبقى الشريط شفّافاً، فلا حالة تُضبط أثناء التأثير.
    const hero = document.querySelector("header");
    if (hero) io.observe(hero);
    return () => io.disconnect();
  }, []);

  // القائمة المفتوحة تفرض الخلفية البيضاء — لوحة شفّافة فوق الهيرو لا تُقرأ.
  const opaque = past || open;

  return (
    // ponytail: الحدّ موجود دائماً ويتغيّر لونه فقط — لو ظهر عند التمرير لأزاح
    // المحتوى بمقدار بكسل. الاتجاه لا يدخل هنا: الخلفية والحدّ غير اتجاهيين.
    <nav
      className={`site-nav fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        opaque
          ? "border-[var(--line)] bg-[rgba(255,255,255,.88)] shadow-[0_1px_3px_rgba(20,22,26,.06)] backdrop-blur-[14px]"
          : "border-transparent bg-transparent"
      }`}
    >
      {/* ponytail: لا dir مكتوب هنا. الشريط يتبع اتجاه الصفحة — العلامة تبدأ من
          جهة القراءة والزر ينتهي إلى الطرف المقابل، وهو ما تفعله ms-auto. */}
      <div className="flex w-full items-center gap-4 px-6 py-3 md:px-8">
        {/* العلامة — قفل لاتيني مغلق الاتجاه في اللغتين */}
        <a href={`/${locale}`} dir="ltr" className="flex shrink-0 items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/rawasi-mark-black.svg" alt="" className="h-[26px]" />
          <span className="en text-[19px] font-extrabold tracking-tight">
            rawasi<span className="text-[var(--color-blue)]">ai</span>
          </span>
        </a>

        {/* الروابط — التوسيط ليس اتجاهياً: left-1/2 مع -translate-x-1/2
            يعطي المركز نفسه في الاتجاهين، والترتيب يتبع اتجاه الصفحة. */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--dim)] transition-colors hover:text-[var(--color-ink)]"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* ms-auto يدفع المجموعة إلى الطرف المقابل للعلامة في الاتجاهين */}
        <div className="ms-auto flex shrink-0 items-center gap-2">
          <a
            href={`/${other}`}
            hrefLang={other}
            aria-label={d.switchLanguage}
            className="en hidden rounded-lg border border-[var(--line)] px-3 py-2 text-[13px] font-bold text-[var(--dim)] transition-colors hover:border-black/30 hover:text-[var(--color-ink)] md:block"
          >
            {SWITCH_LABEL[other]}
          </a>

          <a
            href="#booking"
            className="hidden rounded-lg bg-[var(--color-ink)] px-5 py-2.5 text-[13.5px] font-bold text-white transition-[transform,background] duration-200 hover:bg-[#2A2E36] active:scale-[.97] md:block"
          >
            {d.cta}
          </a>

          {/* زرّ القائمة — جوال فقط */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? d.closeMenu : d.openMenu}
            className="grid h-10 w-10 shrink-0 place-items-center gap-[5px] rounded-lg transition-colors hover:bg-black/5 md:hidden"
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
      </div>

      {/* اللوحة — تنسدل رأسياً فتبقى صحيحة في الاتجاهين؛ المحاذاة منطقية */}
      <div
        id="mobile-nav"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 border-t border-[var(--line)] px-6 pb-4 pt-3">
          {links.map((l) => (
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
            href={`/${other}`}
            hrefLang={other}
            aria-label={d.switchLanguage}
            className="rounded-lg px-2 py-2.5 text-start text-[15px] text-[var(--dim)] transition-colors hover:bg-black/5 hover:text-[var(--color-ink)]"
          >
            <span className="en">{SWITCH_LABEL[other]}</span>
          </a>

          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg bg-[var(--color-ink)] px-5 py-3 text-center text-[14px] font-bold text-white"
          >
            {d.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
