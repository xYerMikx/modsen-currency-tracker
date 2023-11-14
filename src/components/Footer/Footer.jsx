import { useState } from "react"
import {
  Container,
  Copyright,
  FooterInfo,
  FooterLink,
  FooterLinks,
  FooterText,
  FooterWrapper,
  InfoText,
  LinkBlock,
  LinkBlockTitle,
  LinksContainer,
} from "./styled"
import { Logo } from "@/components/Logo/Logo"
import { footerLinks } from "@/constants/footerLinks"
import { GradientText } from "@/components/GradientText/GradientText"
import { Link } from "react-router-dom"
import { getRoute } from "@/constants/routes"

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleLinks = (index) => () => {
    if (index === isOpen) {
      setIsOpen(null)
    } else {
      setIsOpen(index)
    }
  }
  return (
    <FooterWrapper>
      <Container>
        <FooterInfo>
          <Link to={getRoute("home")}>
            <Logo />
          </Link>
          <FooterText>
            <GradientText>Modsen Currency Tracker</GradientText>
          </FooterText>
          <InfoText>
            Since then, the company has grown organically to. Starsup is the world's
            largest trading platform, with $12 billion worth of currency trading and
            500,000 tickets sold daily to tens of thousands of traders worldwide.
          </InfoText>
        </FooterInfo>
        <FooterLinks>
          {footerLinks.map(({ title, links }, index) => (
            <LinkBlock key={title}>
              <LinkBlockTitle onClick={toggleLinks(index)}>{title}</LinkBlockTitle>
              <LinksContainer isOpen={isOpen === index}>
                {links.map(({ name }, index) => (
                  <FooterLink to={getRoute(name.toLowerCase())} key={index}>
                    {name}
                  </FooterLink>
                ))}
              </LinksContainer>
            </LinkBlock>
          ))}
        </FooterLinks>
      </Container>
      <Copyright>Startsup © 2023-2024, All Rights Reserved</Copyright>
    </FooterWrapper>
  )
}
