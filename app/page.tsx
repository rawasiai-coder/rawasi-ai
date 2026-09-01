import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Booking from "./components/Booking";
import Reveal from "./components/Reveal";
import { Problem, Services, How, Footer } from "./components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Services />
      <How />
      <Booking />
      <Footer />
      <Reveal />
    </>
  );
}
