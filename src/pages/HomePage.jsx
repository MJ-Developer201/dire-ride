import React from 'react'
import HeroSection from '../components/HeroSection'
import BelowTheFold from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'
import FifthSection from '../components/FifthSection'
import FourthSection from '../components/FourthSection'
import SixthSection from '../components/SixthSection'
import SeventhSection from '../components/SeventhSection'
import EighthSection from '../components/EighthSection'
import Footer from '../components/Footer'
import SecondSectionPartTwo from '../components/SecondSectionPartTwo'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <BelowTheFold />
      <ThirdSection />
      <SecondSectionPartTwo />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
      <Footer />
    </div>
  )
}
