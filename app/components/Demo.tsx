"use client";

import { useEffect, useState } from "react";

/**
 * لوحة عرض حيّة: مشهدان يتبادلان — وكيل يردّ، ثم سير عمل ينفّذ.
 * ponytail: مؤقّت واحد يقود الاثنين. لا مكتبة حركة — CSS + خطوة واحدة في الحالة.
 */

const CHAT = [
  { who: "عميل", text: "متى يوصل طلبي ٢٤٨١؟", me: false },
  { who: "الوكيل", text: "وصل مستودع الرياض. يُسلَّم غداً بين ٢ و ٥ م ✓", me: true },
  { who: "الوكيل", text: "حدّثت حالة الطلب وأرسلت رابط التتبّع.", me: true },
];

const FLOW = [
  "طلب جديد",
  "تحقّق المخزون",
  "إصدار فاتورة",
  "إشعار واتساب",
  "تحديث السجلّ",
];

export default function Demo() {
  const [scene, setScene] = useState<0 | 1>(0);
  const [step, setStep] = useState(0);

  // ponytail: مؤشّر واحد يتقدّم عبر المشهدين معاً، وتُشتقّ منه الحالة.
  // التبعية [] فقط — أي تبعية أخرى تلغي المؤقّت قبل أن يعمل.
  useEffect(() => {
    const TIMELINE = CHAT.length + 1 + FLOW.length + 1; // +1 وقفة بعد كل مشهد
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % TIMELINE;
      if (i <= CHAT.length) {
        setScene(0);
        setStep(i);
      } else {
        setScene(1);
        setStep(Math.min(i - CHAT.length - 1, FLOW.length));
      }
    }, 1100);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mx-auto mt-12 w-full max-w-[560px]">
      {/* شريط التبويب */}
      <div className="mb-3 flex justify-center gap-2">
        {["وكيل يردّ", "أتمتة تُنفّذ"].map((label, i) => (
          <span
            key={label}
            className={`rounded-full px-3.5 py-1 text-[12px] transition-colors duration-300 ${
              scene === i
                ? "bg-[var(--color-ink)] font-bold text-white"
                : "bg-white/70 text-[var(--dim)]"
            }`}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="relative min-h-[200px] overflow-hidden rounded-2xl border border-[var(--line)] bg-white/85 p-5 shadow-[0_8px_32px_rgba(20,22,26,.10)] backdrop-blur-md">
        {/* المشهد أ — محادثة */}
        {scene === 0 && (
          <div className="flex flex-col gap-2.5">
            {CHAT.slice(0, step).map((m, i) => (
              <div
                key={i}
                className={`msg-in flex ${m.me ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[14px] leading-relaxed ${
                    m.me
                      ? "bg-[rgba(0,163,224,.12)] text-[var(--color-ink)]"
                      : "bg-[rgba(20,22,26,.06)] text-[var(--color-ink)]"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {step < CHAT.length && (
              <div className={`flex ${CHAT[step].me ? "justify-start" : "justify-end"}`}>
                <div className="flex gap-1 rounded-2xl bg-[rgba(20,22,26,.05)] px-4 py-3">
                  <i className="dot" /><i className="dot" /><i className="dot" />
                </div>
              </div>
            )}
          </div>
        )}

        {/* المشهد ب — سير عمل */}
        {scene === 1 && (
          <div className="flex h-full flex-col justify-center gap-3 py-2">
            {FLOW.map((n, i) => {
              const done = i < step;
              const active = i === step - 1;
              return (
                <div key={n} className="flex items-center gap-3">
                  <span
                    className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[11px] font-bold transition-all duration-300 ${
                      done
                        ? "bg-[var(--color-blue)] text-white"
                        : "bg-[rgba(20,22,26,.08)] text-[var(--dim)]"
                    } ${active ? "scale-110" : ""}`}
                  >
                    {done ? "✓" : i + 1}
                  </span>
                  <span
                    className={`text-[14px] transition-colors duration-300 ${
                      done ? "font-bold text-[var(--color-ink)]" : "text-[var(--dim)]"
                    }`}
                  >
                    {n}
                  </span>
                  <span className="mr-auto h-px flex-1 bg-[var(--line)]">
                    <span
                      className="block h-px bg-[var(--color-blue)] transition-all duration-500"
                      style={{ width: done ? "100%" : "0%" }}
                    />
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
