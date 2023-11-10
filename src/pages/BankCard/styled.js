import styled from "styled-components"

import { media } from "@/constants/sizes"
import { mainContainerStyles } from "@/styles/commonStyles"

export const BankContainer = styled.section`
  ${mainContainerStyles}

  @media ${media.tablet} {
    font-size: ${(props) => props.theme.fontSize.md};
  }
`

export const Title = styled.h2`
  color: ${(props) => props.theme.primaryColor};
  font-size: ${(props) => props.theme.fontSize.lg};
  text-align: center;
  margin: 0 auto ${(props) => props.theme.spacings.sm} auto;

  @media ${media.tablet} {
    font-size: ${(props) => props.theme.fontSize.md};
  }

  @media ${media.phone} {
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`

export const BankWrapper = styled.div`
  padding: ${(props) => props.theme.spacings.xxmd};
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${media.tablet} {
    padding: ${(props) => props.theme.spacings.md};
  }
`
