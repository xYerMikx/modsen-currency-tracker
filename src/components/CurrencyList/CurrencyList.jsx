import { CurrencyContainer } from "./styled"
import CurrencyCard from "@/components/CurrencyCard/CurrencyCard"
import { currencies } from "@/constants/currencies"

const CurrencyList = ({ values, codes, currency }) => {
  return (
    <CurrencyContainer>
      {currencies.map((item, index) => {
        return (
          <CurrencyCard
            key={item.code}
            name={item.name}
            imageSrc={item.imageSrc}
            amount={values[index]}
            code={codes[index]}
            currency={currency}
          />
        )
      })}
    </CurrencyContainer>
  )
}

export default CurrencyList
