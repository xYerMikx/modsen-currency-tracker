import { CurrencyContainer } from "./styled"
import CurrencyCard from "@components/CurrencyCard/CurrencyCard"
import { currencies } from "@constants/currencies"

const CurrencyList = ({ values, codes }) => {
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
						currency="R$"
					/>
				)
			})}
		</CurrencyContainer>
	)
}

export default CurrencyList
