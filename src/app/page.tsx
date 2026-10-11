import { About } from "@/components/About";
import { Attorney } from "@/components/Attorney";
import { Consultation } from "@/components/Consultation";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { PracticeAreas } from "@/components/PracticeAreas";
import { Process } from "@/components/Process";
import { WhyUs } from "@/components/WhyUs";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <main>
        <div className="hero-frame">
          <Hero />
          <Header attachToHero />
        </div>
        <About />
        <PracticeAreas />
        <Attorney />
        <WhyUs />
        <Process />
        <FAQ />
        <Consultation />
        <Location mapEmbedUrl={site.mapEmbedUrl || undefined} />
      </main>
      <Footer />
    </>
  );
}
