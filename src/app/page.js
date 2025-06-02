import AboutSection from "@/components/AboutUsSection";
import HeroSection from "@/components/Hero";
import OurProcess from "@/components/OurProcess";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Image from "next/image";

export default function Home() {
  return (
   <div >
   <HeroSection/>
   <Services/>
   <AboutSection/>
   <OurProcess/>
   <Technologies/>
   </div>
  );
}
