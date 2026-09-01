export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center gap-4 border-b border-[var(--line)] bg-[rgba(8,9,11,.72)] px-7 py-3.5 backdrop-blur-[14px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/mark-white.svg" alt="رواسي" className="h-[26px]" />
      <div className="ms-auto flex gap-6">
        <a href="#services" className="text-sm text-[var(--dim)] transition-colors hover:text-white">
          الخدمات
        </a>
        <a href="#how" className="text-sm text-[var(--dim)] transition-colors hover:text-white">
          كيف نعمل
        </a>
        <a href="#work" className="text-sm text-[var(--dim)] transition-colors hover:text-white">
          أعمالنا
        </a>
        <a href="#faq" className="text-sm text-[var(--dim)] transition-colors hover:text-white">
          الأسئلة
        </a>
        <a href="#booking" className="text-sm text-[var(--dim)] transition-colors hover:text-white">
          احجز
        </a>
      </div>
    </nav>
  );
}
