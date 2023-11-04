import styled from "styled-components"

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: ${(props) => props.theme.spacings.lg};
  transition: all 0.2s linear;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
`

export const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: ${(props) => props.theme.spacings.xxs};
  border: 0.1rem solid #ccc;
  border-radius: ${(props) => props.theme.borderRadius};
`

export const FormButton = styled.button`
  padding: ${(props) => props.theme.spacings.xs};
  background-color: ${(props) => props.theme.darkColor};
  color: ${(props) => props.theme.primaryColor};
  border: none;
  width: 150px;
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.orange};
  }
`

export const PageButton = styled.button`
  padding: ${(props) => props.theme.spacings.xs};
  background-color: ${(props) => props.theme.darkColor};
  color: white;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.orange};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: ${(props) => props.theme.spacings.xs};
`
