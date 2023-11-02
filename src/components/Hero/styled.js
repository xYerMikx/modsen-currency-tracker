import styled from "styled-components"

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
  padding: ${(props) => props.theme.paddings.lg} 0;
  gap: 1rem;
`

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const HeroTitle = styled.h1`
  margin-right: ${(props) => props.theme.margins.xxmd};
  font-size: 6.4rem;
`

export const HeroLowerTitle = styled.h2`
  margin-right: ${(props) => props.theme.margins.xmd};
  font-size: 7.4rem;
`

export const HeroText = styled.p`
  color: ${(props) => props.theme.secondaryColor};
  font-size: ${(props) => props.theme.fontSize.sm};
  max-width: 35rem;
  text-align: center;
  margin-top: ${(props) => props.theme.margins.xs};
  line-height: 3.8rem;
  font-weight: ${(props) => props.theme.fontWeight.light};
`

export const HeroImage = styled.img`
  max-width: 30rem;
  max-height: 31.2rem;
`
