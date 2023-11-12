import { WrapperContainer } from "./styled"
import PropTypes from "prop-types"

export const Wrapper = ({ children }) => {
  return <WrapperContainer>{children}</WrapperContainer>
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
