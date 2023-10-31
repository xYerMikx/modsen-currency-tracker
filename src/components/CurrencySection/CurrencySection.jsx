import { useEffect, useState } from "react"
import axios from "axios"
import {
  BlockTitle,
  CurrencyWrapper,
  LastUpdatedStatus,
  LastUpdatedText,
  LastUpdatedWrapper,
} from "./styled"
import status from "@/assets/icons/circle-status.svg"
import { convertDate } from "@/utils/convertDate"
import StocksList from "@/components/StocksList/StocksList"
import Dropdown from "@/components/Dropdown/Dropdown"
import CurrencyList from "@/components/CurrencyList/CurrencyList"

const CurrencySection = () => {
  const [values, setValues] = useState([])
  const [codes, setCodes] = useState([])
  const [lastUpdated, setLastUpdated] = useState("")
  const [selectedOption, setSelectedOption] = useState("USD")

  useEffect(() => {
    const getCurrencyData = async () => {
      try {
        const { data } = await axios.get("/base")
        const dataByBase = data.data.find((el) => el.base === selectedOption)
        const currencyValues = Object.values(dataByBase.data).map((el) =>
          (1 / el.value).toFixed(4),
        )
        const codesValues = Object.values(dataByBase.data).map((el) => el.code)
        const date = convertDate(dataByBase.meta.last_updated_at)
        setValues(currencyValues)
        setCodes(codesValues)
        setLastUpdated(date)
      } catch (e) {
        console.error(e)
      }
    }
    getCurrencyData()
  }, [selectedOption])

  return (
    <CurrencyWrapper>
      <LastUpdatedWrapper>
        <LastUpdatedStatus src={status} />
        <LastUpdatedText>Last Updated at {lastUpdated}</LastUpdatedText>
      </LastUpdatedWrapper>
      <Dropdown setSelectedOption={setSelectedOption} selectedOption={selectedOption} />
      <BlockTitle>Stocks</BlockTitle>
      <StocksList />
      <BlockTitle>Quotes</BlockTitle>
      <CurrencyList values={values} codes={codes} currency={selectedOption} />
    </CurrencyWrapper>
  )
}

export default CurrencySection
