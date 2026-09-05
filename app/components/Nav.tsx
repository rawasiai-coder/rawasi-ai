"use client";

import { useEffect, useState } from "react";
import { OTHER, SWITCH_LABEL, type Locale } from "../i18n/config";
import type { Dict } from "../i18n/types";
import { EMAIL_URL, WHATSAPP_URL } from "../site";

/**
 * شريط عائم على هيئة بطاقة مستديرة.
 *
 * ponytail: الهندسة ثابتة (ارتفاع 58 وحافة 18 وحدّ 1px) والمتغيّر هو الخلفية
 * والحدّ والظل فقط، فلا إزاحة عند التمرير. البطاقة غير اتجاهية: justify-between
 * وحده يضع العلامة في بداية القراءة والأزرار في نهايتها، عربيةً كانت أم إنجليزية.
 * لا نسخة ثانية للعربية ولا نظام RTL مستقل — الاتجاه يأتي من <html dir>.
 */

const EASE = "ease-[cubic-bezier(.16,1,.3,1)]";

/* أيقونات سطرية — المشروع لا يستعمل مكتبة أيقونات، فهذا هو العُرف القائم. */

/** علامة واتساب — شعار تجاري: لا يُعكس في RTL بحال. */
function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.05-.2-.31a8.17 8.17 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23Zm-2.9 4.2c-.14 0-.36.05-.55.26-.19.21-.72.7-.72 1.71s.74 1.98.84 2.12c.1.14 1.44 2.29 3.58 3.12 1.78.7 2.14.56 2.53.52.38-.03 1.24-.5 1.42-.99.17-.49.17-.9.12-.99-.05-.09-.19-.14-.4-.24-.21-.1-1.24-.61-1.43-.68-.19-.07-.33-.1-.47.1-.14.21-.54.68-.66.82-.12.14-.24.16-.45.05-.21-.1-.89-.33-1.69-1.04-.62-.56-1.05-1.24-1.17-1.45-.12-.21-.01-.33.09-.43.09-.09.21-.24.31-.36.1-.12.14-.21.21-.35.07-.14.03-.26-.02-.36-.05-.1-.46-1.14-.64-1.56-.17-.4-.34-.35-.47-.35Z" />
    </svg>
  );
}

/** ظرف بريد — رمز متماثل، لا اتجاه له. */
function MailIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2.75" y="5" width="18.5" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 5.9L20.5 7" />
    </svg>
  );
}

/** زرّ أيقوني خافت — أصغر من زرّ الحجز عمداً فلا ينافسه. */
function IconLink({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : null)}
      className="grid h-9 w-9 place-items-center rounded-full text-[var(--dim)] transition-colors duration-200 hover:bg-black/5 hover:text-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]"
    >
      {children}
    </a>
  );
}

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
   * ponytail: مستمع سلبي مجمَّع في إطار واحد ومقارنة رقم واحد — لا قياس تخطيطي.
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

  const panelRow =
    "flex items-center gap-3 rounded-lg px-1 py-2.5 text-start text-[15px] text-[var(--dim)] transition-colors hover:bg-black/5 hover:text-[var(--color-ink)]";

  return (
    <nav className="site-nav fixed inset-x-0 top-0 z-50">
      {/* ponytail: الفراغ الجانبي على الغلاف لا داخل البطاقة — فتنفصل البطاقة
          عن حافتَي الشاشة بخلفية الصفحة، بدل أن تلتصق بهما ويُزاح محتواها
          للداخل. بلا عرض أقصى: الغلاف يملأ العرض والبطاقة تتنفّس داخله. */}
      <div className="relative px-4 pt-3 sm:px-6 lg:px-10">
        {/* ponytail: ثلاثة أعمدة — طرفان بـ flex-1 متساويين ووسط ثابت، فتقع
            الروابط في منتصف البطاقة تماماً مهما اختلف وزن الطرفين. مع
            justify-between وحده كانت تنزاح بنصف فرق العرض بينهما. */}
        <div
          className={`flex h-[58px] items-center gap-4 rounded-[18px] border px-6 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-[400ms] ${EASE} ${
            opaque
              ? "nav-card border-[rgba(20,22,26,.07)] bg-[rgba(255,255,255,.8)] backdrop-blur-[20px] backdrop-saturate-[1.6]"
              : "border-transparent bg-transparent"
          }`}
        >
          {/* العلامة — قفل لاتيني مغلق الاتجاه في اللغتين */}
          <div className="flex flex-1 items-center">
            <a
              href={`/${locale}`}
              dir="ltr"
              className="flex shrink-0 items-center gap-3 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-blue)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/rawasi-mark-black.svg" alt="" className="h-[26px]" />
              <span className="en wordmark text-[16px]">
                rawasi
                <span className="wordmark-ai text-[var(--color-blue)]">ai</span>
              </span>
            </a>
          </div>

          {/* الروابط — تباعد بـ gap لا بهوامش، يتدرّج مع عرض الشاشة */}
          <div className="hidden shrink-0 items-center gap-6 md:flex lg:gap-8 xl:gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="whitespace-nowrap rounded text-[13.5px] font-medium text-[var(--dim)] transition-colors duration-[250ms] hover:text-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-blue)]"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex flex-1 items-center justify-end gap-2">
            {/* عنقود التواصل — أيقونتان خافتتان، تختفيان على الجوال إلى اللوحة */}
            <div className="hidden items-center gap-0.5 md:flex">
              <IconLink href={WHATSAPP_URL} label={d.whatsappAria} external>
                <WhatsAppIcon />
              </IconLink>
              <IconLink href={EMAIL_URL} label={d.emailAria}>
                <MailIcon />
              </IconLink>
            </div>

            {/* فاصل رفيع — يفصل التواصل عن الإجراءات، وغير اتجاهي */}
            <span
              className="hidden h-6 w-px bg-[var(--line)] md:block"
              aria-hidden
            />

            <a
              href={`/${other}`}
              hrefLang={other}
              aria-label={d.switchLanguage}
              className={`en hidden h-[42px] items-center rounded-full border border-[rgba(20,22,26,.07)] px-[18px] text-[14px] font-semibold text-[var(--color-ink)] transition-[border-color,transform] duration-300 ${EASE} hover:-translate-y-0.5 hover:border-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)] active:translate-y-0 active:scale-[.97] md:inline-flex`}
            >
              {SWITCH_LABEL[other]}
            </a>

            {/* ponytail: لا زرّ حجز هنا — الهيرو وقسم الحجز يحملانه، وتكراره
                في الشريط يثقله. إزالته قرّبت وزن طرفي البطاقة فصار المنتصف
                متوسّطاً بصرياً بلا ضبط يدوي. */}

            {/* زرّ القائمة — دائرة محدّدة 42px */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? d.closeMenu : d.openMenu}
              className="flex h-[42px] w-[42px] shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border border-[rgba(20,22,26,.12)] transition-colors hover:border-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)] active:scale-[.97] md:hidden"
            >
              {/* ponytail: flex-col لا grid — الشبكة تمدّد الصفوف فلا يتقاطع الخطّان */}
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

        {/* لوحة الجوال — بطاقة مستقلة، فيبقى ارتفاع الشريط ثابتاً */}
        <div
          id="mobile-nav"
          className={`nav-card absolute inset-x-4 top-[76px] overflow-hidden rounded-[18px] border border-[rgba(20,22,26,.07)] bg-[rgba(255,255,255,.92)] backdrop-blur-[20px] transition-[max-height,opacity] duration-300 sm:inset-x-6 md:hidden ${
            open
              ? "max-h-[560px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          {/* الحشو يطابق حشو البطاقة، فتصطفّ بنود القائمة تحت العلامة تماماً */}
          <div className="flex flex-col gap-1 px-6 py-[14px]">
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

            {/* التواصل — صفوف كاملة التسمية، لا أيقونات مزدحمة في الشريط */}
            <div className="mt-1 flex flex-col gap-1 border-t border-[var(--line)] pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={d.whatsappAria}
                onClick={() => setOpen(false)}
                className={panelRow}
              >
                <WhatsAppIcon />
                {d.whatsapp}
              </a>
              <a
                href={EMAIL_URL}
                aria-label={d.emailAria}
                onClick={() => setOpen(false)}
                className={panelRow}
              >
                <MailIcon />
                {d.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
