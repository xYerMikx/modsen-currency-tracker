import styled from "styled-components"

import { media } from "@/constants/sizes"

export const StocksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 5rem;
  margin-bottom: ${(props) => props.theme.spacings.xxmd};

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
