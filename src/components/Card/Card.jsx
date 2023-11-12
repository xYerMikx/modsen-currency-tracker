import { useState } from "react"
import { CardText, CardTitle, CardWrapper, Image } from "./styled"
import { createPortal } from "react-dom"
import { Modal } from "@/components/Modal/Modal"
import PropTypes from "prop-types"

export const Card = ({ name, baseCurrency, amount, imageSrc, isQuote, code }) => {
  const [show, setShow] = useState(false)
  const showModal = () => setShow(true)
  const closeModal = () => setShow(false)

  return (
    <>
      <CardWrapper data-testid="card" data-cy="currency-card" onClick={showModal}>
        <Image src={imageSrc} alt={name} />
        <div>
          <CardTitle>{name}</CardTitle>
          <CardText>
            <span>{baseCurrency} </span>
            <span>{amount}</span>
          </CardText>
        </div>
      </CardWrapper>
      {show &&
        isQuote &&
        createPortal(
          <Modal onClose={closeModal} name={name} imageSrc={imageSrc} code={code} />,
          document.getElementById("app"),
        )}
    </>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  baseCurrency: PropTypes.string,
  amount: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
  imageSrc: PropTypes.string.isRequired,
  isQuote: PropTypes.bool.isRequired,
  code: PropTypes.string,
}
