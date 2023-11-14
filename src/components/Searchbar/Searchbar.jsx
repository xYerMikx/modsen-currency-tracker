import { Component, createRef } from "react"
import {
  IconButton,
  SearchContainer,
  SearchInput,
  Label,
  SearchList,
  SearchItem,
  StyledImage,
} from "./styled"
import search from "@/assets/icons/search.svg"
import { currenciesCodes } from "@/constants/currencies"
import PropTypes from "prop-types"

export class Searchbar extends Component {
  constructor(props) {
    super(props)
    this.inputRef = createRef()
    this.state = { isOpen: false }
  }

  render() {
    const { value } = this.props
    const { isOpen } = this.state

    const focusTextInput = () => {
      this.inputRef.current.focus()
    }

    const handleCurrencyClick = (e) => {
      const { setValue } = this.props
      const value = e.target.textContent
      setValue(value)
      this.setState((prevState) => ({ ...prevState, isOpen: false }))
    }
    const handleChange = (e) => {
      const { setValue } = this.props
      const newValue = e.target.value
      setValue(newValue)
    }
    const handleInputClick = () => {
      this.setState((prevState) => ({ ...prevState, isOpen: true }))
    }
    return (
      <SearchContainer>
        <Label htmlFor="search">
          <SearchInput
            id="search"
            ref={this.inputRef}
            onChange={handleChange}
            onClick={handleInputClick}
            value={value}
            placeholder="Currency search..."
            autoComplete="off"
          />
        </Label>
        <IconButton onClick={focusTextInput}>
          <StyledImage src={search} alt="search icon" />
        </IconButton>
        <SearchList>
          {value.length > 0 &&
            isOpen &&
            currenciesCodes
              .filter((code) => code.toLowerCase().includes(value.toLowerCase()))
              .map((code) => (
                <SearchItem onClick={handleCurrencyClick} key={code}>
                  {code}
                </SearchItem>
              ))}
        </SearchList>
      </SearchContainer>
    )
  }
}

Searchbar.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}
