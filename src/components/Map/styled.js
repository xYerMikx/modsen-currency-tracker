import styled from "styled-components"

import { media } from "@/constants/sizes"

export const MapContainer = styled.div`
  width: 100%;
  height: 40rem;

  cursor: grab;

  @media ${media.tablet} {
    height: 30rem;
  }

  @media ${media.tablet} {
    height: 20rem;
  }
`
