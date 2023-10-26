import Card from "@components/Card/Card"

const StocksCard = ({ imageSrc, name, percent, currency = null, isQuote = false }) => {
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

export default StocksCard
