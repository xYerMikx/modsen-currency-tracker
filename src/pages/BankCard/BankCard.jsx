import React, { Component } from "react"
import Map from "@/components/Map/Map"
import { BankContainer } from "./styled"
import Searchbar from "../../components/Searchbar/Searchbar"

export default class BankCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: "dsfj",
		}
	}
	render() {
		const { value } = this.state
		return (
			<BankContainer>
				<Searchbar />
				{/* <Map /> */}
			</BankContainer>
		)
	}
}
