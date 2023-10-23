import React from "react"
import {
	ButtonSwitch,
	HeaderWrapper,
	Input,
	Label,
	LinksList,
	Logo,
	Switch,
} from "./styled"
import logo from "../../assets/icons/logo.svg"
import { Link } from "react-router-dom"
import { headerLinks } from "../../constants/headerLinks"

const Header = ({ setCurrentTheme, currentTheme }) => {
	const changeTheme = () => {
		setCurrentTheme(currentTheme === "dark" ? "light" : "dark")
	}
	return (
		<HeaderWrapper>
			<Link to="/">
				<Logo src={logo} />
			</Link>
			<LinksList>
				{headerLinks.map((link, index) => {
					return (
						<Link key={index} to={link.to}>
							{link.name}
						</Link>
					)
				})}
			</LinksList>
			<Label>
				<Input type="checkbox" onChange={changeTheme} />
				<Switch />
			</Label>
		</HeaderWrapper>
	)
}

export default Header
