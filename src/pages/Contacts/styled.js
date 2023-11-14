import styled from "styled-components"

import { media } from "@/constants/sizes"
import { mainContainerStyles } from "@/styles/commonStyles"

export const ContactsWrapper = styled.main`
  ${mainContainerStyles}
  padding:  ${(props) => props.theme.spacings.sm}  ${(props) => props.theme.spacings.xl};
  gap: 2.5rem;
  color: ${(props) => props.theme.primaryColor};

  @media ${media.tablet} {
    padding: ${(props) => props.theme.spacings.sm};
  }
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

  @media ${media.tablet} {
    margin-top: ${(props) => props.theme.spacings.md};
    flex-direction: row;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
    font-size: ${(props) => props.theme.fontSize.xs};
  }
`

export const StyledLi = styled.li``

export const ProfileImage = styled.img`
  border-radius: ${(props) => props.theme.borderRadius};
  width: 15rem;
  margin-right: ${(props) => props.theme.spacings.md};

  @media ${media.tablet} {
    margin-right: 0;
  }
`

export const EmailText = styled.p`
  margin-top: ${(props) => props.theme.spacings.xxmd};
  font-size: ${(props) => props.theme.fontSize.md};
  @media ${media.tablet} {
    margin-top: ${(props) => props.theme.spacings.md};
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  @media ${media.tablet} {
    flex-direction: column;
  }
`
