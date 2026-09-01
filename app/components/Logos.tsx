// شريط شعارات العملاء — بدائل حتى تصل الشعارات الحقيقية
const CLIENTS = ["عميل ١", "عميل ٢", "عميل ٣", "عميل ٤", "عميل ٥"];

export default function Logos() {
  return (
    <section className="rv border-b border-[var(--line)] py-12">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="mb-7 text-center text-xs tracking-[.18em] text-[var(--dim)]">
          يثقون بنا
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {CLIENTS.map((c) => (
            <div
              key={c}
              className="grid h-11 min-w-[124px] place-items-center rounded-lg border border-dashed border-white/15 px-5 text-[13px] text-white/35"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
