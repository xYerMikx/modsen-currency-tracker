import styled from "styled-components"

export const CardWrapper = styled.div`
	display: flex;
	background-color: ${(props) => props.theme.cardBgColor};
	padding: 3rem 3.2rem;
	border-radius: ${(props) => props.theme.borderRadius};
	border: 1px solid ${(props) => props.theme.borderColor};
	gap: 3rem;
	font-size: ${(props) => props.theme.fontSize.sm};
	flex: 0 1 40%;
	cursor: pointer;
`

export const CardTitle = styled.h3`
	color: ${(props) => props.theme.secondaryColor};
`

export const CardText = styled.p`
	color: ${(props) => props.theme.lightGray};
	font-size: ${(props) => props.theme.fontSize.md};
`

export const Image = styled.img`
	max-width: 8rem;
	max-height: 8rem;
`
