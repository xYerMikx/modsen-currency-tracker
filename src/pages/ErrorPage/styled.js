import { Link } from "react-router-dom"
import styled from "styled-components"

import { media } from "@/constants/sizes"
import { mainContainerStyles } from "@/styles/commonStyles"

export const ErrorWrapper = styled.main`
  ${mainContainerStyles}
  padding:  ${(props) => props.theme.spacings.sm}  ${(props) => props.theme.spacings.xl};
  gap: 2.5rem;
  color: ${(props) => props.theme.primaryColor};

  @media ${media.tablet} {
    padding: ${(props) => props.theme.spacings.sm};
  }
`

export const StyledTitle = styled.h1``
export const StyledSubtitle = styled.h2``

export const StyledLink = styled(Link)`
  display: block;
  font-size: ${(props) => props.theme.fontSize.md};
  margin-top: ${(props) => props.theme.spacings.md};
  transition: all 0.2s linear;

  &:hover {
    color: ${(props) => props.theme.orange};
  }
`
