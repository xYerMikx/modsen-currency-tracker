import styled from "styled-components"

export const SearchContainer = styled.div`
  position: relative;
  width: 36rem;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.5rem;
  transition: all 0.3s linear;
`

export const Label = styled.label`
  width: 100%;
  height: 100%;
`

export const SearchInput = styled.input`
  padding-left: 2rem;
  border: none;
  color: ${(props) => props.theme.primaryColor};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 1.6rem;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.inputColor};
`

export const IconButton = styled.button`
  position: relative;
  height: 3.6rem;
  width: 3.6rem;
  border: none;
  z-index: ${(props) => props.theme.zIndex.one};
  cursor: pointer;
  background: none;

  &:hover {
    color: white;
    &::after {
      opacity: 1;
      transform: scale(1);
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    border-radius: 50%;
    z-index: ${(props) => props.theme.zIndex.lowest};
    background: ${(props) => props.theme.black};
    transform: scale(0.6);
    opacity: 0;
  }
`

export const SearchList = styled.ul`
  position: absolute;
  top: 4.8rem;
  left: 0;
  max-height: 10rem;
  width: 100%;
  background-color: ${(props) => props.theme.inputColor};
  color: ${(props) => props.theme.primaryColor};
  display: flex;
  flex-direction: column;
  overflow: auto;
  font-size: 1.6rem;
  height: auto;
`

export const SearchItem = styled.li`
  cursor: pointer;
  padding: 1rem 2rem;
  transition: all 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.darkColor};
  }
`
