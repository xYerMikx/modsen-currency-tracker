import { CurrencyContainer } from "./styled"
import { CurrencyCard } from "@/components/CurrencyCard/CurrencyCard"
import { currencies } from "@/constants/currencies"

export const CurrencyList = ({ values, codes, currency }) => {
  return (
    <CurrencyContainer>
      {currencies.map(({ code, name, imageSrc }, index) => {
        return (
          <CurrencyCard
            key={code}
            name={name}
            imageSrc={imageSrc}
            amount={values[index]}
            code={codes[index]}
            currency={currency}
          />
        )
      })}
    </CurrencyContainer>
  )
}
