import { useState } from "react"
import { CardText, CardTitle, CardWrapper, Image } from "./styled"
import { createPortal } from "react-dom"
import Modal from "@/components/Modal/Modal"

const Card = ({ name, baseCurrency, amount, imageSrc, isQuote, code }) => {
  const [show, setShow] = useState(false)
  const showModal = () => setShow(true)
  const closeModal = () => setShow(false)

  return (
    <>
      <CardWrapper onClick={showModal}>
        <Image src={imageSrc} alt="dollar" />
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

export default Card
