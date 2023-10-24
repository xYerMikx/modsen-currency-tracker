import React from "react"
import {
	Container,
	Copyright,
	FooterInfo,
	FooterLink,
	FooterLinks,
	FooterWrapper,
	GradientText,
	InfoText,
	LinkBlock,
	LinkBlockTitle,
	LinksContainer,
} from "./styled"
import Logo from "../Logo/Logo"
import { footerLinks } from "../../constants/footerLinks"

const Footer = () => {
	return (
		<FooterWrapper>
			<Container>
				<FooterInfo>
					<Logo />
					<GradientText>Modsen Currency Tracker</GradientText>
					<InfoText>
						Since then, the company has grown organically to. Starsup is the world's
						largest trading platform, with $12 billion worth of currency trading and
						500,000 tickets sold daily to tens of thousands of traders worldwide.
					</InfoText>
				</FooterInfo>
				<FooterLinks>
					{footerLinks.map((el) => {
						return (
							<LinkBlock key={el.title}>
								<LinkBlockTitle>{el.title}</LinkBlockTitle>
								<LinksContainer>
									{el.links.map((link, index) => {
										return <FooterLink key={index}>{link}</FooterLink>
									})}
								</LinksContainer>
							</LinkBlock>
						)
					})}
				</FooterLinks>
			</Container>
			<Copyright>Startsup © 2023-2024, All Rights Reserved</Copyright>
		</FooterWrapper>
	)
}

export default Footer
