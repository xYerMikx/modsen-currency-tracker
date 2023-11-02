import { Card } from "@/components/Card/Card"

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
