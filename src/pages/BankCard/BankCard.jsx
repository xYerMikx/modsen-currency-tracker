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

  setValue = (newValue) => {
    this.setState((prevState) => ({ ...prevState, value: newValue }))
  }

  render() {
    const { value } = this.state
    return (
      <BankContainer>
        <BankWrapper>
          <Title>Search currency in the bank</Title>
          <Searchbar value={value} setValue={this.setValue} />
        </BankWrapper>
        <Map value={value} />
      </BankContainer>
    )
  }
}
