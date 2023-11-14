import { useScrollToTop } from "../../hooks/useScrollToTop"
import { WrapperContainer } from "./styled"
import PropTypes from "prop-types"

export const Wrapper = ({ children }) => {
  useScrollToTop()
  return <WrapperContainer>{children}</WrapperContainer>
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
