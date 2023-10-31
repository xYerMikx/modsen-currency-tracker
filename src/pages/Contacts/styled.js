import styled from "styled-components"

import { mainContainerStyles } from "@/styles/commonStyles"

export const ContactsWrapper = styled.main`
  ${mainContainerStyles}
  padding: 2.5rem 10rem;
  gap: 2.5rem;
  color: ${(props) => props.theme.primaryColor};
`
export const ContactsLink = styled.a`
  transition: all 0.2s linear;

  &:hover {
    color: ${(props) => props.theme.orange};
  }
`
export const LinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: ${(props) => props.theme.fontSize.sm};
`

export const ProfileImage = styled.img`
  border-radius: ${(props) => props.theme.borderRadius};
  max-width: 15rem;
  margin-right: 2.5rem;
`

export const EmailText = styled.p`
  margin-top: 5rem;
  font-size: ${(props) => props.theme.fontSize.md};
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
`
