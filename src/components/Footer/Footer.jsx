import {
  Container,
  Copyright,
  FooterInfo,
  FooterLink,
  FooterLinks,
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

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterInfo>
          <Link to="/">
            <Logo />
          </Link>
          <GradientText>Modsen Currency Tracker</GradientText>
          <InfoText>
            Since then, the company has grown organically to. Starsup is the world's
            largest trading platform, with $12 billion worth of currency trading and
            500,000 tickets sold daily to tens of thousands of traders worldwide.
          </InfoText>
        </FooterInfo>
        <FooterLinks>
          {footerLinks.map(({ title, links }) => (
            <LinkBlock key={title}>
              <LinkBlockTitle>{title}</LinkBlockTitle>
              <LinksContainer>
                {links.map((link, index) => (
                  <FooterLink key={index}>{link}</FooterLink>
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
