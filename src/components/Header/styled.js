import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const HeaderWrapper = styled.header`
  padding: ${(props) => props.theme.spacings.md} ${(props) => props.theme.spacings.xl};
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 50%;
  color: ${(props) => props.theme.primaryColor};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.light};
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
