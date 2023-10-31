import React from "react"
import {
  HeroImage,
  HeroInfo,
  HeroLowerTitle,
  HeroText,
  HeroTitle,
  HeroWrapper,
} from "./styled"
import heroImage from "@/assets/images/main-bg.png"
import GradientText from "@/components/GradientText/GradientText"

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroInfo>
        <GradientText>
          <HeroTitle>Modsen Currency</HeroTitle>
        </GradientText>
        <GradientText>
          <HeroLowerTitle>Tracker</HeroLowerTitle>
        </GradientText>
        <HeroText>Quotes for the dollar and other international currencies.</HeroText>
      </HeroInfo>
      <HeroImage src={heroImage} />
    </HeroWrapper>
  )
}

export default Hero
