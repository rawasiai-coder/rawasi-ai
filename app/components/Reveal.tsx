"use client";

import { useEffect } from "react";

/**
 * يضيف .in لعناصر .rv عند دخولها الشاشة — مرة واحدة لكل عنصر.
 *
 * ponytail: المراقب هو المسار الأساسي، ومعه شبكة أمان. سببها أن نداء
 * IntersectionObserver الأول قد لا يصل إطلاقاً إذا حُمِّلت الصفحة في تبويب
 * خلفي أو خُنقت؛ وبما أن العنصر لا يتحرّك بعدها فلا يقع أي «تغيّر تقاطع»
 * يوقظ المراقب لاحقاً — فيبقى القسم على opacity:0 بلا نهاية.
 *
 * الشبكة تكشف ما هو داخل الشاشة فعلاً فقط، بالشرط الهندسي نفسه الذي يطبّقه
 * المراقب (rootMargin السالب)، فالكشف الاحتياطي لا يُميَّز عن الطبيعي: الانتقال
 * نفسه، ولا يُكشف شيء خارج الشاشة دفعةً واحدة فلا وميض.
 */

/** يطابق rootMargin أدناه — قيمة واحدة حتى لا يفترق الشرطان */
const MARGIN = 60;

export default function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".rv"));
    if (!targets.length) return;

    // بلا مراقب لا نُخفي أصلاً: المحتوى أولى من الحركة.
    if (typeof IntersectionObserver === "undefined") return;

    // الإخفاء يُفعَّل بعد تحميل JS فقط — بلا JS تظهر الأقسام طبيعياً
    root.classList.add("js-rv");

    const pending = new Set<HTMLElement>(targets);
    let frame = 0;
    let timer = 0;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) show(e.target as HTMLElement);
        });
        stopWhenDone();
      },
      { rootMargin: `-${MARGIN}px` }
    );

    /** الكشف مرّة واحدة لكل عنصر — الحارس يمنع تكرار الحركة */
    function show(el: HTMLElement) {
      if (!pending.delete(el)) return;
      el.classList.add("in");
      io.unobserve(el);
    }

    /** شبكة الأمان — تفحص المتبقّي وتكشف ما هو داخل الشاشة وحده */
    function sweep() {
      const h = window.innerHeight;
      pending.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < h - MARGIN && r.bottom > MARGIN) show(el);
      });
      stopWhenDone();
    }

    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        sweep();
      });
    }

    function onVisible() {
      if (!document.hidden) sweep();
    }

    /** لا شيء متبقٍّ ⇒ نُنهي كل المستمعين. الأقسام المكشوفة تحتفظ بـ .in */
    function stopWhenDone() {
      if (pending.size) return;
      teardown();
    }

    function teardown() {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pageshow", sweep);
      document.removeEventListener("visibilitychange", onVisible);
      if (frame) cancelAnimationFrame(frame);
      if (timer) clearTimeout(timer);
      frame = 0;
      timer = 0;
    }

    targets.forEach((el) => io.observe(el));

    // مصادر الإيقاظ الاحتياطية — كلّها تنتهي إلى sweep نفسها
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("pageshow", sweep); // العودة من ذاكرة الرجوع
    document.addEventListener("visibilitychange", onVisible); // تبويب خلفي
    timer = window.setTimeout(sweep, 1200); // نداء أوّل لم يصل

    return () => {
      teardown();
      root.classList.remove("js-rv");
    };
  }, []);

  return null;
}
