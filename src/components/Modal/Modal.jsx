import { useEffect } from "react"
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

const Modal = ({ onClose, name, imageSrc }) => {
	useEffect(() => {
		document.body.style.overflow = "hidden"
		return () => {
			document.body.style.overflow = "unset"
		}
	}, [])
	return (
		<ModalOverlay>
			<ModalBox>
				<InfoWrapper>
					<ModalImage src={imageSrc} />
					<p>{name}</p>
				</InfoWrapper>
				<ConversionWrapper>
					<ConversionInput type="number" />
					<p>=</p>
					<ConversionSelect>
						<option value=""></option>
					</ConversionSelect>
				</ConversionWrapper>
				<CloseButton onClick={onClose}>Close</CloseButton>
			</ModalBox>
		</ModalOverlay>
	)
}

export default Modal
