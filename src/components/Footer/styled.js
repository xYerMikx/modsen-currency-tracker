import { Link } from "react-router-dom"
import styled from "styled-components"

export const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.primaryColor};
  padding: ${(props) => props.theme.spacings.xxmd} ${(props) => props.theme.spacings.xl};
  font-size: ${(props) => props.theme.fontSize.sm};
`

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10rem;
  margin-bottom: ${(props) => props.theme.spacings.xxmd};
`
export const FooterInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex: 0 1 40%;
`

export const FooterLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 1 60%;
`
export const InfoText = styled.p`
  margin-top: ${(props) => props.theme.spacings.md};
  font-weight: ${(props) => props.theme.fontWeight.light};
`

export const LinkBlock = styled.li``

export const LinkBlockTitle = styled.h4`
  font-size: ${(props) => props.theme.fontSize.md};
  margin-bottom: ${(props) => props.theme.spacings.xmd};
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
`
