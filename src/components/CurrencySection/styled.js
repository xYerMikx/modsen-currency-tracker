import styled from "styled-components"

export const CurrencyWrapper = styled.section`
  color: ${(props) => props.theme.primaryColor};
  padding: 0 10rem;
  margin-top: 6rem;
  margin-bottom: 12rem;
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
  margin-bottom: 6rem;
`

export const BlockTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.md};
  padding-bottom: 2.4rem;
  margin-bottom: 5rem;
  margin-top: 10rem;
  border-bottom: 1px solid ${(props) => props.theme.darkColor};
  font-weight: ${(props) => props.theme.fontWeight.light};
  max-width: 40rem;
`
