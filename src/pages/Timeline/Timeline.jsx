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
import { ChartComponent } from "@/components/Chart/Chart"
import { FormComponent } from "@/components/FormComponent/FormComponent"

export const Timeline = () => {
  const [selectedOption, setSelectedOption] = useState("USD")
  const selectedCurrency = currencies.find(({ code }) => code === selectedOption)
  const [formData, setFormData] = useState([])

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
      <FormComponent onSubmit={setFormData} />
      <ChartComponent selectedOption={selectedOption} formData={formData} />
    </TimelineContainer>
  )
}
