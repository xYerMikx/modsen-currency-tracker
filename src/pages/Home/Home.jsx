import React from "react"
import Hero from "../../components/Hero/Hero"
import { HomeWrapper } from "./styled"
import CurrencySection from "../../components/CurrencySection/CurrencySection"

const Home = () => {
	return (
		<HomeWrapper>
			<Hero />
			<CurrencySection />
		</HomeWrapper>
	)
}

export default Home
