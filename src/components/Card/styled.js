import styled from "styled-components"

import { media } from "@/constants/sizes"

export const CardWrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.cardBgColor};
  padding: ${(props) => props.theme.spacings.md};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 0.1rem solid ${(props) => props.theme.borderColor};
  gap: 3rem;
  font-size: ${(props) => props.theme.fontSize.sm};
  flex: 0 1 47.5%;
  cursor: pointer;

  @media ${media.screen} {
    gap: 1.5rem;
  }

  @media ${media.phone} {
    padding: ${(props) => props.theme.spacings.sm};
    flex: 1 0 100%;
    width: 100%;
  }
`

export const CardTitle = styled.h3`
  color: ${(props) => props.theme.secondaryColor};
  @media ${media.phone} {
    font-size: 1.6rem;
  }
`

export const CardText = styled.p`
  color: ${(props) => props.theme.lightGray};
  font-size: ${(props) => props.theme.fontSize.md};

  @media ${media.tablet} {
    font-size: 1.6rem;
  }
`

export const Image = styled.img`
  max-width: 8rem;
  max-height: 8rem;

  @media ${media.screen} {
    max-width: 6rem;
    max-height: 6rem;
  }
  @media ${media.tablet} {
    max-width: 5rem;
    max-height: 5rem;
  }
`
