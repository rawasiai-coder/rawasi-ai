import { notFound } from "next/navigation";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Booking from "../components/Booking";
import Reveal from "../components/Reveal";
import CalendlyPopup from "../components/CalendlyPopup";
import { Problem, Services, How, Footer } from "../components/Sections";
import { isLocale } from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const d = getDictionary(locale);

  return (
    <>
      <Nav d={d.nav} locale={locale} />
      {/* ponytail: <main> معلَم دلالي فقط — عنصر كتليّ بلا أنماط، فالتخطيط
          كما هو. التنقّل والتذييل خارجه عمداً؛ محتوى الصفحة وحده بداخله. */}
      <main>
        <Hero d={d.hero} demo={d.demo} />
        <Problem d={d.problem} />
        <Services d={d.services} />
        <How d={d.how} />
        <Work d={d.work} />
        <Testimonials d={d.testimonials} />
        <Faq d={d.faq} />
        <Booking d={d.booking} />
      </main>
      <Footer d={d} locale={locale} />
      <Reveal />
      <CalendlyPopup />
    </>
  );
}
