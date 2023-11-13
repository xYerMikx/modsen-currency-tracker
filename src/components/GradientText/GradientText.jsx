import { GradientWrapper } from "./styled"
import PropTypes from "prop-types"

export const GradientText = ({ children }) => {
  return <GradientWrapper>{children}</GradientWrapper>
}

GradientText.propTypes = {
  children: PropTypes.node.isRequired,
}
