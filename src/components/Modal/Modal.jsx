import { useEffect, useState } from "react"
import {
  CloseButton,
  ConversionInput,
  ConversionSelect,
  ConversionWrapper,
  ConvertedValue,
  InfoWrapper,
  ModalBox,
  ModalImage,
  ModalOption,
  ModalOverlay,
  StyledDiv,
  StyledParagraph,
} from "./styled"
import { currenciesCodes } from "@/constants/currencies"
import PropTypes from "prop-types"
import { axios } from "@/services/axios"

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
          <StyledParagraph>{name}</StyledParagraph>
        </InfoWrapper>
        <ConversionWrapper>
          <ConversionInput
            data-testid="conversion-input"
            type="number"
            value={baseValueAmount}
            onChange={changeValueAmount}
          />
          <StyledParagraph>=</StyledParagraph>
          <StyledDiv>
            <ConvertedValue data-cy="converted-value">{convertedValue}</ConvertedValue>
            <ConversionSelect
              data-testid="conversion-select"
              value={selectedBase || "USD"}
              onChange={onSelectChange}
            >
              {currentOptions.map((option) => {
                return (
                  <ModalOption value={option} key={option}>
                    {option}
                  </ModalOption>
                )
              })}
            </ConversionSelect>
          </StyledDiv>
        </ConversionWrapper>
        <CloseButton data-cy="close-button" data-testid="close-button" onClick={onClose}>
          Close
        </CloseButton>
      </ModalBox>
    </ModalOverlay>
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
}
