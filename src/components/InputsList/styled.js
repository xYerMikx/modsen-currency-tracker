import styled from "styled-components"

export const FormInput = styled.input`
  padding: ${(props) => props.theme.spacings.xxxs};
  width: 15rem;
  border: 0.1rem solid ${(props) => props.theme.primaryColor};
  border-radius: ${(props) => props.theme.borderRadius};
`
