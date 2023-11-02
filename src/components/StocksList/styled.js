import styled from "styled-components"

export const StocksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 5rem;
  margin-bottom: ${(props) => props.theme.spacings.xxmd};
`
