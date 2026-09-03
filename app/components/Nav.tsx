"use client";

import { useEffect, useState } from "react";
import { OTHER, SWITCH_LABEL, type Locale } from "../i18n/config";
import type { Dict } from "../i18n/types";

/**
 * شريط عائم على هيئة بطاقة مستديرة — مرجع التصميم: Oryx.
 *
 * ponytail: الهندسة ثابتة (ارتفاع 58 وحافة 18 وحدّ 1px) والمتغيّر هو الخلفية
 * والحدّ والظل فقط، فلا إزاحة عند التمرير. البطاقة غير اتجاهية: justify-between
 * وحده يضع العلامة في بداية القراءة والأزرار في نهايتها، عربيةً كانت أم إنجليزية.
 */

const EASE = "ease-[cubic-bezier(.16,1,.3,1)]";

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
   * البطاقة مندمجة مع الهيرو في الأعلى، وتنفصل كشريط أبيض بمجرّد بدء التمرير.
   *
   * ponytail: الحدّ 24px لا ارتفاع الهيرو — السلوك المقصود أن ينفصل الشريط عند
   * أول حركة لا بعد قسم كامل. مستمع سلبي مجمَّع في إطار واحد: لا قياس تخطيطي
   * ولا عمل في كل إطار، ومقارنة رقم واحد فقط.
   */
  useEffect(() => {
    let frame = 0;
    const apply = () => {
      frame = 0;
      setPast(window.scrollY > 24);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // الحالة الأولى — الصفحة قد تُفتح على موضع محفوظ

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // القائمة المفتوحة تفرض الخلفية — بطاقة شفّافة فوق الهيرو لا تُقرأ.
  const opaque = past || open;

  return (
    <nav className="site-nav fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto mt-3 flex h-[58px] max-w-[1100px] items-center justify-between gap-3 rounded-[18px] border px-[18px] transition-[background-color,border-color,box-shadow,backdrop-filter] duration-[400ms] ${EASE} ${
          opaque
            ? "nav-card border-[rgba(20,22,26,.07)] bg-[rgba(255,255,255,.8)] backdrop-blur-[20px] backdrop-saturate-[1.6]"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* العلامة — قفل لاتيني مغلق الاتجاه في اللغتين */}
        <a
          href={`/${locale}`}
          dir="ltr"
          className="flex shrink-0 items-center gap-2.5"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/rawasi-mark-black.svg" alt="" className="h-[26px]" />
          <span className="en text-[19px] font-extrabold tracking-tight">
            rawasi<span className="text-[var(--color-blue)]">ai</span>
          </span>
        </a>

        {/* الروابط — عنصر أوسط في space-between كما في المرجع */}
        <div className="hidden items-center gap-[26px] md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] font-medium text-[var(--dim)] transition-colors duration-[250ms] hover:text-[var(--color-ink)]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-[10px]">
          {/* مبدّل اللغة — زر خفيف، يقابل زر Sign in الثانوي في المرجع */}
          <a
            href={`/${other}`}
            hrefLang={other}
            aria-label={d.switchLanguage}
            className={`en hidden h-[42px] items-center rounded-full border border-[rgba(20,22,26,.07)] px-[22px] text-[14px] font-semibold text-[var(--color-ink)] transition-[border-color,transform] duration-300 ${EASE} hover:border-[var(--color-ink)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[.97] md:inline-flex`}
          >
            {SWITCH_LABEL[other]}
          </a>

          {/* الإجراء الأساسي — حبّة ممتلئة بلون العلامة */}
          <a
            href="#booking"
            className={`hidden h-[42px] items-center rounded-full bg-[var(--color-ink)] px-[22px] text-[14px] font-semibold text-white transition-[background,transform] duration-300 ${EASE} hover:-translate-y-0.5 hover:bg-[#2A2E36] active:translate-y-0 active:scale-[.97] md:inline-flex`}
          >
            {d.cta}
          </a>

          {/* زرّ القائمة — دائرة محدّدة 42px كما في المرجع */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? d.closeMenu : d.openMenu}
            className="flex h-[42px] w-[42px] shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border border-[rgba(20,22,26,.12)] transition-colors hover:border-[var(--color-ink)] active:scale-[.97] md:hidden"
          >
            {/* ponytail: flex-col لا grid — شبكة بارتفاع ثابت تمدّد الصفوف إلى
                10px فيصير مركزاها 15px متباعدين ولا يتقاطع الخطّان. هنا
                التباعد 6.5px فعلياً، فالإزاحة ±6.5 تجمعهما في نقطة واحدة. */}
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

      {/* لوحة الجوال — بطاقة مستقلة تحت الشريط، لا امتداد له، فيبقى ارتفاعه ثابتاً */}
      <div
        id="mobile-nav"
        className={`nav-card absolute inset-x-[18px] top-[74px] overflow-hidden rounded-[18px] border border-[rgba(20,22,26,.07)] bg-[rgba(255,255,255,.92)] backdrop-blur-[20px] transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-[480px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-[18px] py-[14px]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-1 py-2.5 text-start text-[15px] text-[var(--dim)] transition-colors hover:bg-black/5 hover:text-[var(--color-ink)]"
            >
              {l.label}
            </a>
          ))}

          <a
            href={`/${other}`}
            hrefLang={other}
            aria-label={d.switchLanguage}
            className="rounded-lg px-1 py-2.5 text-start text-[15px] text-[var(--dim)] transition-colors hover:bg-black/5 hover:text-[var(--color-ink)]"
          >
            <span className="en">{SWITCH_LABEL[other]}</span>
          </a>

          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-[var(--color-ink)] px-[22px] py-3 text-center text-[14px] font-semibold text-white"
          >
            {d.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
