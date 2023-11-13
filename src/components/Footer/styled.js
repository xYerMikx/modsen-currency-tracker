import { Link } from "react-router-dom"
import styled from "styled-components"

import { media } from "@/constants/sizes"

export const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.primaryColor};
  padding: ${(props) => props.theme.spacings.xxmd} ${(props) => props.theme.spacings.xl};
  font-size: ${(props) => props.theme.fontSize.sm};
  @media ${media.tablet} {
    padding: ${(props) => props.theme.spacings.sm} ${(props) => props.theme.spacings.xs};
  }
`

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10rem;
  margin-bottom: ${(props) => props.theme.spacings.xxmd};

  @media ${media.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }
`
export const FooterInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex: 0 1 50%;

  @media ${media.desktop} {
    flex: 0 1 75%;
  }

  @media ${media.phone} {
    flex-direction: column;
    gap: 2rem;
  }
`

export const FooterLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 1 50%;

  @media ${media.desktop} {
    flex: 0 1 25%;
    flex-direction: column;
  }
`
export const InfoText = styled.p`
  margin-top: ${(props) => props.theme.spacings.md};
  font-weight: ${(props) => props.theme.fontWeight.light};
  @media ${media.tablet} {
    display: none;
  }
`

export const FooterText = styled.div`
  @media ${media.desktop} {
    margin-left: ${(props) => props.theme.spacings.md};
    text-align: center;
  }
  @media ${media.phone} {
    text-align: center;
  }
`

export const LinkBlock = styled.li`
  @media ${media.desktop} {
    & > h4:hover {
      color: ${(props) => props.theme.darkColor};
    }
    border-bottom: 0.1rem solid ${(props) => props.theme.darkColor};
    &:not(:last-child) {
      margin-bottom: ${(props) => props.theme.spacings.md};
    }
  }
`

export const LinkBlockTitle = styled.h4`
  font-size: ${(props) => props.theme.fontSize.md};
  margin-bottom: ${(props) => props.theme.spacings.xmd};
  @media ${media.desktop} {
    cursor: pointer;
  }
`

export const FooterLink = styled(Link)`
  transition: all 0.2s linear;
  color: ${(props) => props.theme.darkColor};
  &:hover {
    color: ${(props) => props.theme.primaryColor};
  }
`

export const Copyright = styled.span`
  display: block;
  color: ${(props) => props.theme.darkColor};
  text-align: center;
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  @media ${media.desktop} {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    margin-bottom: ${(props) => props.theme.spacings.sm};
  }
`
