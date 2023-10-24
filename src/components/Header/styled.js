import styled from "styled-components"

const HeaderWrapper = styled.header`
	padding: 3.2rem 9.6rem;
	background-color: ${(props) => props.theme.bgColor};
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Logo = styled.img`
	width: 4rem;
	height: 4rem;
`

const LinksList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-width: 50%;
	color: ${(props) => props.theme.primaryColor};
	font-size: ${(props) => props.theme.fontSize.sm};
	font-weight: ${(props) => props.theme.fontWeight.light};
`

const ButtonSwitch = styled.button`
	border: none;
	outline: none;
	border: 1px solid ${(props) => props.theme.primaryColor};
	background: none;
	color: ${(props) => props.theme.primaryColor};
	cursor: pointer;
	border-radius: ${(props) => props.theme.borderRadius};
	padding: 0.5rem 1.5rem;
`

const Label = styled.label`
	display: flex;
	align-items: center;
	gap: 1rem;
	cursor: pointer;
`

const Switch = styled.div`
	position: relative;
	width: 6rem;
	height: 3.2rem;
	background: ${(props) => props.theme.bgColor};
	border-radius: 3.2rem;
	border: 1px solid ${(props) => props.theme.primaryColor};
	transition: 300ms all;

	&:before {
		content: "";
		position: absolute;
		width: 3rem;
		height: 3rem;
		border-radius: 3.5rem;
		top: 50%;
		background: ${(props) => props.theme.bgColor};
		border: 1px solid ${(props) => props.theme.primaryColor};
		transform: translate(0, -50%);
		transition: 300ms all;
	}
`

const Input = styled.input`
	opacity: 0;
	position: absolute;

	&:checked + ${Switch} {
		background: ${(props) => props.theme.bgColor};

		&:before {
			transform: translate(2.8rem, -50%);
		}
	}
`

export { HeaderWrapper, Logo, LinksList, ButtonSwitch, Label, Switch, Input }