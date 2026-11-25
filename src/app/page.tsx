import { Navbar } from "@/components/Navbar";
import { Banner } from "@/components/Banner";
import { WhyChoose } from "@/components/WhyChoose";
import { Testimonials } from "@/components/Testimonials";
import { ReadyToJourney } from "@/components/ReadyToJourney";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <WhyChoose />
      <Testimonials />
      <ReadyToJourney />
      <Footer />
    </>
  );
}
