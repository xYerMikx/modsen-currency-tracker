import React, { Component } from "react"
import Map from "@/components/Map/Map"
import { BankContainer } from "./styled"

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
				<Map />
			</BankContainer>
		)
	}
}
