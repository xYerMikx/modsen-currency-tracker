import Card from "@components/Card/Card"

const CurrencyCard = ({ imageSrc, name, amount, currency, isQuote = true }) => {
	return (
		<Card
			name={name}
			imageSrc={imageSrc}
			amount={amount}
			baseCurrency={currency}
			isQuote={isQuote}
		/>
	)
}

export default CurrencyCard