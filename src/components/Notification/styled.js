import styled, { keyframes } from "styled-components"

const fadeInOut = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`

export const NotificationContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: lightgreen;
  padding: ${(props) => props.theme.spacings.sm};
  animation: 2s ${fadeInOut} ease-in-out;
  animation-fill-mode: forwards;
  z-index: ${(props) => props.theme.zIndex.xxxl};
`
