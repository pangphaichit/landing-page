import Image from "next/image";
import Navbar from "@/components/Navbar";
import ImageSlider from "@/components/ImageSlider";
import HeroGrid from "@/components/HeroGrid";
import AppFooter from "@/components/AppFooter";
import IntroductionSection from "@/components/IntroductionSection";
import OurServices from "@/components/OurServices";
import Calendar from "@/components/Calendar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <IntroductionSection />
      <HeroGrid />
      <Calendar />
      <OurServices />
      <AppFooter />
    </div>
  );
}
