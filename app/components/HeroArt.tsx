import Image from "next/image";
import art from "../../public/hero/ai-agent.png";

/**
 * لوحة الهيرو المصوّرة — صورة ثابتة بحركة محيطة خفيفة.
 *
 * ponytail: ثلاث طبقات لأنّ الدخول والطفو كلاهما يحرّك transform، ووضعهما
 * على عنصر واحد يجعل المتأخّر يلغي الأول. الخارجية تدخل مرّة، والداخلية
 * تطفو بلا نهاية، والتوهّج طبقة مستقلّة تنبض بلا أن تجرّ الصورة معها.
 *
 * بلا "use client" — الحركة كلّها CSS، فلا حاجة لجافاسكربت على العميل ولا
 * لمكتبة حركة جديدة.
 */
export default function HeroArt({ alt }: { alt: string }) {
  return (
    <div className="hero-art relative">
      <div className="hero-art-float relative">
        <div className="hero-art-glow pointer-events-none" aria-hidden />
        {/* ponytail: priority لأنّها عنصر LCP — بلاها يؤجّلها التحميل الكسول
            فيتأخّر أكبر رسم في الصفحة. الأبعاد تأتي من الاستيراد الثابت،
            فلا انزياح تخطيط أثناء التحميل.

            sizes مطابقة لنقاط التوقّف الفعلية لا تقديرية: قياسها الحقيقي
            ٦٤٧px عند 1280–1536 و‏٧٢٤px من 2xl حيث يتجاوز العمود ١١٢٪.
            القيمة المقدّرة سابقاً (700px) كانت تدفع المتصفّح إلى تحميل
            مرشّحات لا يستعملها — تحذير preload صريح في الطرفية. */}
        <Image
          src={art}
          alt={alt}
          priority
          sizes="(min-width: 1536px) 730px, (min-width: 1280px) 650px, (min-width: 1024px) 55vw, 100vw"
          className="relative h-auto w-full"
        />
      </div>
    </div>
  );
}
