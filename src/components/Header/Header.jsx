import { HeaderWrapper, Input, Label, LinksList, StyledLink, Switch } from "./styled"
import { Link } from "react-router-dom"
import { headerLinks } from "@/constants/headerLinks"
import { Logo } from "@/components/Logo/Logo"
import { useDispatch } from "react-redux"
import { setTheme } from "@/store/slices/themeSlice"

export const Header = () => {
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
        {headerLinks.map(({ to, name }, index) => {
          return (
            <li key={index}>
              <StyledLink to={to}>{name}</StyledLink>
            </li>
          )
        })}
      </LinksList>
      <Label>
        <Input data-testid="switch-theme" type="checkbox" onChange={changeTheme} />
        <Switch />
      </Label>
    </HeaderWrapper>
  )
}
