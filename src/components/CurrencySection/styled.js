import styled from "styled-components"

export const CurrencyWrapper = styled.section`
  color: ${(props) => props.theme.primaryColor};
  padding: 0 ${(props) => props.theme.spacings.xl};
  margin-top: ${(props) => props.theme.spacings.lg};
  margin-bottom: ${(props) => props.theme.spacings.xxl};
`

export const LastUpdatedText = styled.p`
  color: ${(props) => props.theme.secondaryColor};
  font-size: ${(props) => props.theme.fontSize.md};
`

export const LastUpdatedStatus = styled.img`
  width: 6rem;
  height: 6rem;
`

export const LastUpdatedWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spacings.lg};
`

export const BlockTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.md};
  padding-bottom: ${(props) => props.theme.spacings.sm};
  margin-bottom: ${(props) => props.theme.spacings.xxmd};
  margin-top: ${(props) => props.theme.spacings.xl};
  border-bottom: 0.1rem solid ${(props) => props.theme.darkColor};
  font-weight: ${(props) => props.theme.fontWeight.light};
  max-width: 40rem;
`
