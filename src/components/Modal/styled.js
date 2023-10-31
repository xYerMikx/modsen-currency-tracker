import styled from "styled-components"

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalBox = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  background: white;
  padding: 20px;
  min-width: 50rem;
  min-height: 20rem;
`

export const CloseButton = styled.div`
  cursor: pointer;
  max-width: 15rem;
  padding: 0.5rem 1rem;
  margin-top: 2rem;
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.orange};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.orange};
  text-align: center;
  transition: all 0.2s linear;

  &:hover {
    color: ${(props) => props.theme.orange};
    background-color: ${(props) => props.theme.primaryColor};
  }
`
export const ModalImage = styled.img``

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: ${(props) => props.theme.fontSize.sm};
  margin-bottom: 1.5rem;
`

export const ConversionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  font-size: ${(props) => props.theme.fontSize.sm};
`
export const ConversionInput = styled.input`
  padding: 0.8rem 0.5rem;
  border-radius: ${(props) => props.theme.borderRadius};
`

export const ConversionSelect = styled.select`
  margin-left: 1rem;
  padding: 0.8rem 0.5rem;
  border-radius: ${(props) => props.theme.borderRadius};
`
