import { StocksContainer } from "./styled"
import { stocks } from "@constants/stocks"
import StocksCard from "@components/StocksCard/StocksCard"

const StocksList = () => {
	return (
		<StocksContainer>
			{stocks.map((item) => {
				return (
					<StocksCard
						key={item.name}
						name={item.name}
						imageSrc={item.imageSrc}
						percent="0.15%"
					/>
				)
			})}
		</StocksContainer>
	)
}

export default StocksList
