import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Booking from "./components/Booking";
import Reveal from "./components/Reveal";
import { Problem, Services, How, Footer } from "./components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Logos />
      <Problem />
      <Services />
      <How />
      <Work />
      <Testimonials />
      <Faq />
      <Booking />
      <Footer />
      <Reveal />
    </>
  );
}
