import { CurrencyContainer } from "./styled"
import { CurrencyCard } from "@/components/CurrencyCard/CurrencyCard"
import { currencies } from "@/constants/currencies"
import PropTypes from "prop-types"

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

CurrencyList.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  codes: PropTypes.arrayOf(PropTypes.string).isRequired,
  currency: PropTypes.string.isRequired,
}
