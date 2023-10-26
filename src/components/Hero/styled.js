import styled from "styled-components"

export const HeroWrapper = styled.section`
	background-image: ${(props) => props.theme.backgroundGradient};
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 98%;
	margin: 0 auto;
	display: flex;
	padding: 3rem 0;
	gap: 1rem;
`

export const HeroInfo = styled.div`
	margin-left: 5rem;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`

export const HeroTitle = styled.h1`
	margin-right: 5rem;
	font-size: 6.4rem;
`

export const HeroLowerTitle = styled.h2`
	margin-right: 4rem;
	font-size: 7.4rem;
`

export const HeroText = styled.p`
	color: ${(props) => props.theme.secondaryColor};
	font-size: ${(props) => props.theme.fontSize.sm};
	max-width: 35rem;
	text-align: center;
	margin-top: 1rem;
	line-height: 190%;
	font-weight: ${(props) => props.theme.fontWeight.light};
`

export const HeroImage = styled.img`
	max-width: 30rem;
	max-height: 31.2rem;
`
