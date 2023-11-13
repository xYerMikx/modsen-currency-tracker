import { Card } from "@/components/Card/Card"
import PropTypes from "prop-types"

export const CurrencyCard = ({
  imageSrc,
  name,
  amount,
  currency,
  isQuote = true,
  code,
}) => {
  return (
    <Card
      name={name}
      imageSrc={imageSrc}
      amount={amount}
      baseCurrency={currency}
      isQuote={isQuote}
      code={code}
    />
  )
}

CurrencyCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.string,
  currency: PropTypes.string.isRequired,
  isQuote: PropTypes.bool,
  code: PropTypes.string,
}
