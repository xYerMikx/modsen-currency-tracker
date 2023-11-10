import styled from "styled-components"

import { media } from "@/constants/sizes"

export const HeroWrapper = styled.section`
  background-image: ${(props) => props.theme.backgroundGradient};
  background-color: ${(props) => props.theme.bgColor};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: ${(props) => props.theme.spacings.xxmd} 0;
  gap: 1rem;

  @media ${media.phone} {
    padding: ${(props) => props.theme.spacings.xxmd}${(props) => props.theme.spacings.xxs};
  }
`

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media ${media.tablet} {
    text-align: center;
    align-items: center;
  }
`

export const HeroTitle = styled.h1`
  margin-right: ${(props) => props.theme.spacings.xxmd};
  font-size: 6.4rem;

  @media ${media.tablet} {
    font-size: 4.8rem;
    margin: 0;
  }
  @media ${media.phone} {
    font-size: ${(props) => props.theme.fontSize.lg};
  }
`

export const HeroLowerTitle = styled.h2`
  margin-right: ${(props) => props.theme.spacings.xmd};
  font-size: 7.4rem;
  @media ${media.tablet} {
    font-size: 5.4rem;
    margin: 0;
  }
  @media ${media.phone} {
    font-size: ${(props) => props.theme.fontSize.lg};
  }
`

export const HeroText = styled.p`
  color: ${(props) => props.theme.secondaryColor};
  font-size: ${(props) => props.theme.fontSize.sm};
  max-width: 35rem;
  text-align: center;
  margin-top: ${(props) => props.theme.spacings.xs};
  line-height: 3.8rem;
  font-weight: ${(props) => props.theme.fontWeight.light};

  @media ${media.phone} {
    font-size: 1.6rem;
  }
`

export const HeroImage = styled.img`
  max-width: 30rem;
  max-height: 31.2rem;

  @media ${media.tablet} {
    display: none;
  }
`
