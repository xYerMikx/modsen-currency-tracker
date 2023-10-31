import { useEffect, useState } from "react"
import {
	CloseButton,
	ConversionInput,
	ConversionSelect,
	ConversionWrapper,
	InfoWrapper,
	ModalBox,
	ModalImage,
	ModalOverlay,
} from "./styled"
import { currencies } from "../../constants/currencies"
import axios from "axios"

const currenciesOptions = currencies.map((el) => el.code)

const Modal = ({ onClose, name, imageSrc, code }) => {
	const currentOptions = currenciesOptions.filter((el) => el !== code)
	const [selectedBase, setSelectedBase] = useState(currentOptions[0])
	const [convertedValue, setConvertedValue] = useState(0)
	const [baseValueAmount, setBaseValueAmount] = useState(1)

	const onSelectChange = (e) => {
		setSelectedBase(e.target.value)
	}
	const changeValueAmount = (e) => {
		setBaseValueAmount(e.target.value)
	}
	useEffect(() => {
		document.body.style.overflow = "hidden"
		return () => {
			document.body.style.overflow = "unset"
		}
	}, [])

	useEffect(() => {
		const getData = async () => {
			try {
				const { data } = await axios.get("/mockCurrencies.json")
				const convertValue = data.data[selectedBase].value * baseValueAmount
				setConvertedValue(convertValue.toFixed(4))
			} catch (e) {
				console.log(e)
			}
		}
		getData()
	}, [baseValueAmount, selectedBase])

	return (
		<ModalOverlay>
			<ModalBox>
				<InfoWrapper>
					<ModalImage src={imageSrc} />
					<p>{name}</p>
				</InfoWrapper>
				<ConversionWrapper>
					<ConversionInput
						type="number"
						value={Math.abs(baseValueAmount)}
						onChange={changeValueAmount}
						min={0}
					/>
					<p>=</p>
					<div>
						<span>{convertedValue}</span>
						<ConversionSelect value={selectedBase || "USD"} onChange={onSelectChange}>
							{currentOptions.map((el) => {
								return (
									<option value={el} key={el}>
										{el}
									</option>
								)
							})}
						</ConversionSelect>
					</div>
				</ConversionWrapper>
				<CloseButton onClick={onClose}>Close</CloseButton>
			</ModalBox>
		</ModalOverlay>
	)
}

export default Modal
