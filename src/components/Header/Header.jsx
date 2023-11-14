import {
  BurgerMenuButton,
  HeaderWrapper,
  Input,
  Label,
  LinksList,
  StyledLi,
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
    const shouldChangeBody = window.innerWidth <= 768

    if (shouldChangeBody) {
      setIsOpen(!isOpen)

      if (!isOpen) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "auto"
      }
    }
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
            <StyledLi key={index} onClick={toggleMenu}>
              <StyledLink to={to}>{name}</StyledLink>
            </StyledLi>
          )
        })}
      </LinksList>
      <Label data-cy="theme-switch">
        <Input data-testid="switch-theme" type="checkbox" onChange={changeTheme} />
        <Switch />
      </Label>
      <BurgerMenuButton isOpen={isOpen} onClick={toggleMenu} />
    </HeaderWrapper>
  )
}
