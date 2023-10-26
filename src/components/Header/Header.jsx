import { HeaderWrapper, Input, Label, LinksList, Switch } from "./styled"
import { Link } from "react-router-dom"
import { headerLinks } from "@constants/headerLinks"
import Logo from "@components/Logo/Logo"

const Header = ({ setCurrentTheme, currentTheme }) => {
	const changeTheme = () => {
		setCurrentTheme(currentTheme === "dark" ? "light" : "dark")
	}
	return (
		<HeaderWrapper>
			<Link to="/">
				<Logo />
			</Link>
			<LinksList>
				{headerLinks.map((link, index) => {
					return (
						<li key={index}>
							<Link to={link.to}>{link.name}</Link>
						</li>
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
