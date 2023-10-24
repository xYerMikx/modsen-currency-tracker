import { Link } from "react-router-dom"
import styled from "styled-components"

export const FooterWrapper = styled.footer`
	background-color: ${(props) => props.theme.bgColor};
	color: ${(props) => props.theme.primaryColor};
	padding: 4rem 10rem;
	font-size: ${(props) => props.theme.fontSize.sm};
`

export const Container = styled.div`
	display: flex;
	align-items: start;
	gap: 10rem;
	margin-bottom: 5.5rem;
`
export const FooterInfo = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	flex: 0 1 40%;
`

export const FooterLinks = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex: 0 1 60%;
`
export const InfoText = styled.p`
	margin-top: 3rem;
	font-weight: ${(props) => props.theme.fontWeight.light};
`

export const GradientText = styled.span`
	background: ${(props) => props.theme.gradientColor};
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
	margin-left: 1.5rem;
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
`

export const LinkBlock = styled.li``

export const LinkBlockTitle = styled.h4`
	font-size: ${(props) => props.theme.fontSize.md};
	margin-bottom: 4rem;
`

export const FooterLink = styled(Link)`
	color: ${(props) => props.theme.darkColor};
`

export const Copyright = styled.span`
	display: block;
	color: ${(props) => props.theme.darkColor};
	text-align: center;
`

export const LinksContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`
