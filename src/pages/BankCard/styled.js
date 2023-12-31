import styled from "styled-components"

import { mainContainerStyles } from "@/styles/commonStyles"

export const BankContainer = styled.section`
  ${mainContainerStyles}
`

export const Title = styled.h2`
  color: ${(props) => props.theme.primaryColor};
  font-size: ${(props) => props.theme.fontSize.lg};
  text-align: center;
  margin: 0 auto ${(props) => props.theme.spacings.sm} auto;
`

export const BankWrapper = styled.div`
  padding: ${(props) => props.theme.spacings.xxmd};
  display: flex;
  align-items: center;
  flex-direction: column;
`
