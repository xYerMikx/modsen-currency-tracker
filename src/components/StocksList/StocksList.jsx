import { StocksContainer } from "./styled"
import { stocks } from "@/constants/stocks"
import { StocksCard } from "@/components/StocksCard/StocksCard"

export const StocksList = () => {
  return (
    <StocksContainer>
      {stocks.map(({ name, imageSrc }) => {
        return <StocksCard key={name} name={name} imageSrc={imageSrc} percent="0.15%" />
      })}
    </StocksContainer>
  )
}
