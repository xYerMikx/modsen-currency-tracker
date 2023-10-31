import { HeaderWrapper, Input, Label, LinksList, StyledLink, Switch } from "./styled"
import { Link } from "react-router-dom"
import { headerLinks } from "@/constants/headerLinks"
import Logo from "@/components/Logo/Logo"
import { useDispatch } from "react-redux"
import { setTheme } from "@/store/slices/themeSlice"

const Header = () => {
  const dispatch = useDispatch()

  const changeTheme = () => {
    dispatch(setTheme())
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
              <StyledLink to={link.to} activeClassName="active">
                {link.name}
              </StyledLink>
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
