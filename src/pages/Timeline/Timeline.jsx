import { useState } from "react"
import {
  CurrencyCode,
  CurrencyImage,
  CurrencyInfo,
  CurrencyName,
  SelectedCurrencyWrapper,
  TimelineContainer,
} from "./styled"
import { Dropdown } from "@/components/Dropdown/Dropdown"
import { currencies, currenciesCodes } from "@/constants/currencies"

export const Timeline = () => {
  const [selectedOption, setSelectedOption] = useState("USD")
  const selectedCurrency = currencies.find((el) => el.code === selectedOption)

  return (
    <TimelineContainer>
      <Dropdown
        setSelectedOption={setSelectedOption}
        selectedOption={selectedOption}
        options={currenciesCodes}
      />
      <SelectedCurrencyWrapper>
        <CurrencyImage src={selectedCurrency.imageSrc} alt="Currency Image" />
        <CurrencyInfo>
          <CurrencyName>{selectedCurrency.name}</CurrencyName>
          <CurrencyCode>{selectedCurrency.code}</CurrencyCode>
        </CurrencyInfo>
      </SelectedCurrencyWrapper>
    </TimelineContainer>
  )
}
