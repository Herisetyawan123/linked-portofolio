import Image from "next/image";
import Unej from "@/assets/unej.jpeg";

import SectionWrap from "@/components/wrapper/SectionWrap";
import HeroPartial from "@/components/partials/Hero";
import AboutSection from "@/components/section/AboutSection";
import ExperienceSection from "@/components/section/ExperienceSection";
import EducationSection from "@/components/section/EducationSection";

export default function Home() {
  return (
    <main className="w-full px-4">
      <HeroPartial />
 
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
    </main>
  );
}
