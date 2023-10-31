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
import { options } from "@/constants/dropdownOptions"

const Dropdown = ({ selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (value) => () => {
    setSelectedOption(value)
    setIsOpen(false)
  }

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          <p>{selectedOption || "USD"}</p>
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
