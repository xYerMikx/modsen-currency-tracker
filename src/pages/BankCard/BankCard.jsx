import { Component } from "react"
import { Map } from "@/components/Map/Map"
import { BankContainer, BankWrapper, Title } from "./styled"
import { Searchbar } from "@/components/Searchbar/Searchbar"

export class BankCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
    }
  }

  render() {
    const { value } = this.state
    const setValue = (newValue) => {
      this.setState((prevState) => ({ ...prevState, value: newValue }))
    }

    return (
      <BankContainer>
        <BankWrapper>
          <Title>Search currency in the bank</Title>
          <Searchbar value={value} setValue={setValue} />
        </BankWrapper>
        <Map value={value} />
      </BankContainer>
    )
  }
}
