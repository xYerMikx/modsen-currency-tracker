import { useState } from "react"
import {
  ArrowIcon,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
  Main,
} from "./styled"
import arrow from "@/assets/icons/arrow-down.svg"

export const Dropdown = ({ selectedOption, setSelectedOption, options }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (value) => () => {
    setSelectedOption(value)
    setIsOpen(false)
  }

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader data-testid="dropdown-header" onClick={toggling}>
          <p data-testid="dropdown-text">{selectedOption || "USD"}</p>
          <ArrowIcon src={arrow} />
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option, index) => (
                <ListItem onClick={onOptionClicked(option)} key={index}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  )
}

export default Dropdown
