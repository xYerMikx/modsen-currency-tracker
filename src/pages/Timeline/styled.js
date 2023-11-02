import styled from "styled-components"

import { mainContainerStyles } from "@/styles/commonStyles"

export const TimelineContainer = styled.main`
  ${mainContainerStyles}
  font-size: ${(props) => props.theme.fontSize.sm};
  padding: ${(props) => props.theme.spacings.xl};

  color: ${(props) => props.theme.primaryColor};
`

export const SelectedCurrencyWrapper = styled.div`
  margin-top: ${(props) => props.theme.spacings.xxl};
  margin-bottom: ${(props) => props.theme.spacings.lg};
  display: flex;
  gap: 2.6rem;
`

export const CurrencyInfo = styled.div`
  padding: ${(props) => props.theme.spacings.xxxs} 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const CurrencyImage = styled.img``
export const CurrencyCode = styled.span`
  display: block;
  font-size: 1.2rem;
`

export const CurrencyName = styled.p`
  font-size: ${(props) => props.theme.fontSize.md};
`
