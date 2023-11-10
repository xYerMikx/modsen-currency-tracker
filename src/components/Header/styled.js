import { NavLink } from "react-router-dom"
import styled from "styled-components"

import { media } from "../../constants/sizes"

export const HeaderWrapper = styled.header`
  padding: ${(props) => props.theme.spacings.md} ${(props) => props.theme.spacings.xl};
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${media.tablet} {
    padding: ${(props) => props.theme.spacings.sm} ${(props) => props.theme.spacings.md};
  }
`

export const LinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 70%;
  color: ${(props) => props.theme.primaryColor};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.light};

  @media ${media.tablet} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;
    background-color: ${(props) => props.theme.bgColor};
    font-size: ${(props) => props.theme.fontSize.md};
    transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease-in-out;
    z-index: ${(props) => props.theme.zIndex.xl};
  }
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`

export const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.primaryColor};
  transition: all 0.2s linear;

  &.active,
  &:hover {
    color: ${(props) => props.theme.orange};
  }
`

export const Switch = styled.div`
  position: relative;
  width: 6rem;
  height: 3.2rem;
  background: ${(props) => props.theme.bgColor};
  border-radius: 3.2rem;
  border: 0.1rem solid ${(props) => props.theme.primaryColor};
  transition: 300ms all;
  z-index: ${(props) => props.theme.zIndex.xxl};

  &:before {
    content: "";
    position: absolute;
    width: 3rem;
    height: 3rem;
    border-radius: 3.5rem;
    top: 50%;
    background: ${(props) => props.theme.bgColor};
    border: 0.1rem solid ${(props) => props.theme.primaryColor};
    transform: translate(0, -50%);
    transition: 0.3s all;

    transform: translate(
      ${(props) => (props.theme.currentTheme === "dark" ? "0rem" : "2.8rem")},
      -50%
    );
  }
`

export const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: ${(props) => props.theme.bgColor};

    &:before {
      transform: translate(
        ${(props) => (props.theme.currentTheme === "dark" ? "0rem" : "2.8rem")},
        -50%
      );
    }
  }
`

export const BurgerMenuButton = styled.div`
  display: none;
  position: relative;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  z-index: ${(props) => props.theme.zIndex.xxl};
  cursor: pointer;

  @media ${media.tablet} {
    display: block;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    width: 2rem;
    height: 0.2rem;
    background: ${(props) => props.theme.primaryColor};
    transition: all 0.3s ease-in-out;
  }

  &:before {
    top: ${(props) => (props.isOpen ? "1rem" : "1.5rem")};
    transform: ${(props) => (props.isOpen ? "rotate(135deg)" : "rotate(0)")};
  }

  &:after {
    top: ${(props) => (props.isOpen ? "1rem" : "0.5rem")};
    transform: ${(props) => (props.isOpen ? "rotate(-135deg)" : "rotate(0)")};
  }
`
