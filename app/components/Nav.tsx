const LINKS = [
  { href: "#services", label: "الخدمات" },
  { href: "#how", label: "كيف نعمل" },
  { href: "#work", label: "ما نقدّمه" },
  { href: "#faq", label: "الأسئلة" },
];

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[rgba(246,245,248,.82)] backdrop-blur-[14px]">
      <div dir="ltr" className="mx-auto flex max-w-[1240px] items-center gap-4 px-6 py-3">
        {/* يسار — العلامة مع الاسم */}
        <a href="#" className="flex shrink-0 items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/rawasi-mark-black.svg" alt="" className="h-[26px]" />
          <span className="en text-[19px] font-extrabold tracking-tight">
            rawasi<span className="text-[var(--color-blue)]">ai</span>
          </span>
        </a>

        {/* وسط — الروابط */}
        <div dir="rtl" className="absolute left-1/2 hidden -translate-x-1/2 gap-7 md:flex">
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

        {/* يمين — زر الحجز */}
        <a
          href="#booking"
          className="ml-auto shrink-0 rounded-lg bg-[var(--color-ink)] px-5 py-2.5 text-[13.5px] font-bold text-white transition-[transform,background] duration-200 hover:bg-[#2A2E36] active:scale-[.97]"
        >
          احجز اجتماعاً
        </a>
      </div>
    </nav>
  );
}
