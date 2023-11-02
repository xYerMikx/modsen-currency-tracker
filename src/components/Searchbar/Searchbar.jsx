import { Component, createRef } from "react"
import {
  IconButton,
  SearchContainer,
  SearchInput,
  Label,
  SearchList,
  SearchItem,
} from "./styled"
import search from "@/assets/icons/search.svg"
import { currenciesCodes } from "@/constants/currencies"

export class Searchbar extends Component {
  constructor(props) {
    super(props)
    this.inputRef = createRef()
    this.state = { isOpen: false }
  }

  focusTextInput = () => {
    this.inputRef.current.focus()
  }

  handleCurrencyClick = (e) => {
    const { setValue } = this.props
    const value = e.target.textContent
    setValue(value)
    this.setState((prevState) => ({ ...prevState, isOpen: false }))
  }

  handleChange = (e) => {
    const { setValue } = this.props
    const newValue = e.target.value
    setValue(newValue)
  }

  handleInputClick = () => {
    this.setState((prevState) => ({ ...prevState, isOpen: true }))
  }

  render() {
    const { value } = this.props
    const { isOpen } = this.state
    return (
      <SearchContainer>
        <Label htmlFor="search">
          <SearchInput
            id="search"
            ref={this.inputRef}
            onChange={this.handleChange}
            onClick={this.handleInputClick}
            value={value}
            placeholder="Currency search..."
          />
        </Label>
        <IconButton onClick={this.focusTextInput}>
          <img src={search} alt="search icon" />
        </IconButton>
        <SearchList>
          {value.length > 0 &&
            isOpen &&
            currenciesCodes
              .filter((code) => code.toLowerCase().includes(value.toLowerCase()))
              .map((code) => (
                <SearchItem onClick={this.handleCurrencyClick} key={code}>
                  {code}
                </SearchItem>
              ))}
        </SearchList>
      </SearchContainer>
    )
  }
}
