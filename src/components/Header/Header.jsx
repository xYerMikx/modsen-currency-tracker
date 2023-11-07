import {
  BurgerMenuButton,
  HeaderWrapper,
  Input,
  Label,
  LinksList,
  StyledLink,
  Switch,
} from "./styled"
import { useState } from "react"
import { Link } from "react-router-dom"
import { headerLinks } from "@/constants/headerLinks"
import { Logo } from "@/components/Logo/Logo"
import { useDispatch } from "react-redux"
import { setTheme } from "@/store/slices/themeSlice"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const dispatch = useDispatch()

  const changeTheme = () => {
    dispatch(setTheme())
  }
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo />
      </Link>
      <LinksList isOpen={isOpen}>
        {headerLinks.map(({ to, name }, index) => {
          return (
            <li key={index} onClick={toggleMenu}>
              <StyledLink to={to}>{name}</StyledLink>
            </li>
          )
        })}
      </LinksList>
      <Label>
        <Input type="checkbox" onChange={changeTheme} />
        <Switch />
      </Label>
      <BurgerMenuButton isOpen={isOpen} onClick={toggleMenu} />
    </HeaderWrapper>
  )
}
