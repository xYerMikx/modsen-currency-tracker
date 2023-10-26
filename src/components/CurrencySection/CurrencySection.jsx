import { useEffect, useState } from "react"
import axios from "axios"
import {
	BlockTitle,
	CurrencyWrapper,
	LastUpdatedStatus,
	LastUpdatedText,
	LastUpdatedWrapper,
} from "./styled"
import CurrencyList from "@components/CurrencyList/CurrencyList"
import status from "@assets/icons/circle-status.svg"
import { convertDate } from "@utils/convertDate"
import StocksList from "@components/StocksList/StocksList"

const CurrencySection = () => {
	const [values, setValues] = useState([])
	const [lastUpdated, setLastUpdated] = useState("")

	useEffect(() => {
		const getCurrencyData = async () => {
			try {
				const { data } = await axios.get("/mockLatest.json")
				const currencyValues = Object.values(data.data).map((el) =>
					(1 / el.value).toFixed(4),
				)
				setValues(currencyValues)
				const date = convertDate(data.meta.last_updated_at)
				setLastUpdated(date)
			} catch (e) {
				console.error(e)
			}
		}
		getCurrencyData()
	}, [])

	return (
		<CurrencyWrapper>
			<LastUpdatedWrapper>
				<LastUpdatedStatus src={status} />
				<LastUpdatedText>Last Updated at {lastUpdated}</LastUpdatedText>
			</LastUpdatedWrapper>
			<BlockTitle>Stocks</BlockTitle>
			<StocksList />
			<BlockTitle>Quotes</BlockTitle>
			<CurrencyList values={values} />
		</CurrencyWrapper>
	)
}

export default CurrencySection
