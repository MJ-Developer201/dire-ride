import React from "react";
import HeroSection from "../components/HeroSection";
import BelowTheFold from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import FifthSection from "../components/FifthSection";
import FourthSection from "../components/FourthSection";
import SixthSection from "../components/SixthSection";
import SeventhSection from "../components/SeventhSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <BelowTheFold />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
    </div>
  );
}
