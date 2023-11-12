import { Card } from "@/components/Card/Card"
import PropTypes from "prop-types"

export const StocksCard = ({
  imageSrc,
  name,
  percent,
  currency = null,
  isQuote = false,
}) => {
  return (
    <Card
      name={name}
      imageSrc={imageSrc}
      amount={percent}
      baseCurrency={currency}
      isQuote={isQuote}
    />
  )
}

StocksCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
  isQuote: PropTypes.bool,
}
