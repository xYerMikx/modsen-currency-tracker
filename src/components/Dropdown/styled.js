import styled from "styled-components"

export const Main = styled.div`
	background: ${(props) => props.theme.bgColor};
	position: relative;
`

export const DropDownContainer = styled.div`
	width: 15rem;
	cursor: pointer;
`

export const DropDownHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.8rem;
	padding: 0.4rem 2rem 0.4rem 1rem;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
	font-size: ${(props) => props.theme.fontSize.sm};
	color: ${(props) => props.theme.primaryColor};
	background: ${(props) => props.theme.bgColor};
`

export const DropDownListContainer = styled.div`
	position: absolute;
	width: inherit;
	z-index: 2;
	max-height: 20rem;
	overflow: auto;
`

export const ArrowIcon = styled.img`
	width: 1rem;
	transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`

export const DropDownList = styled.ul`
	padding: 1.2rem 1rem;
	background-color: ${(props) => props.theme.bgColor};
	font-size: ${(props) => props.theme.fontSize.sm};
`

export const ListItem = styled.li`
	color: ${(props) => props.theme.primaryColor};
	margin-bottom: 0.8rem;
	transition: all 0.2s linear;

	&:hover {
		color: ${(props) => props.theme.orange};
	}
`
