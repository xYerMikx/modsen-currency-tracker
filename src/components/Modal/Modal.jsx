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
import axios from "axios"
import { currenciesCodes } from "@/constants/currencies"

export const Modal = ({ onClose, name, imageSrc, code }) => {
  const currentOptions = currenciesCodes.filter((el) => el !== code)
  const [selectedBase, setSelectedBase] = useState(currentOptions[0])
  const [convertedValue, setConvertedValue] = useState(0)
  const [baseValueAmount, setBaseValueAmount] = useState(1)

  const onSelectChange = (e) => {
    setSelectedBase(e.target.value)
  }
  const changeValueAmount = (e) => {
    if (e.target.value < 0) {
      return
    }
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
        const { data } = await axios.get("/currencies")
        const convertValue = data.data[selectedBase].value * baseValueAmount
        setConvertedValue(convertValue.toFixed(4))
      } catch (e) {
        console.error(e)
      }
    }
    getData()
  }, [baseValueAmount, selectedBase])

  return (
    <ModalOverlay>
      <ModalBox data-testid="modal" data-cy="modal">
        <InfoWrapper>
          <ModalImage src={imageSrc} />
          <p>{name}</p>
        </InfoWrapper>
        <ConversionWrapper>
          <ConversionInput
            data-testid="conversion-input"
            type="number"
            value={baseValueAmount}
            onChange={changeValueAmount}
          />
          <p>=</p>
          <div>
            <span data-cy="converted-value">{convertedValue}</span>
            <ConversionSelect
              data-testid="conversion-select"
              value={selectedBase || "USD"}
              onChange={onSelectChange}
            >
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
        <CloseButton data-cy="close-button" data-testid="close-button" onClick={onClose}>
          Close
        </CloseButton>
      </ModalBox>
    </ModalOverlay>
  )
}
