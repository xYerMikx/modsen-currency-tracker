import styled from "styled-components"

import { media } from "@/constants/sizes"

export const CurrencyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 5rem;

  @media ${media.tablet} {
    justify-content: space-around;
    column-gap: 1rem;
  }

  @media ${media.phone} {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }
`
