import styled from "styled-components"

export const GradientWrapper = styled.div`
  background: ${(props) => props.theme.gradientColor};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  margin-left: ${(props) => props.theme.margins.sm};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`
