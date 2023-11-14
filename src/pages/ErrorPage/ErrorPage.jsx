import { ErrorWrapper, StyledLink, StyledSubtitle, StyledTitle } from "./styled"

export const ErrorPage = () => (
  <ErrorWrapper>
    <StyledTitle>Something went wrong...</StyledTitle>
    <StyledSubtitle>This page doesn't exist</StyledSubtitle>
    <StyledLink to="/">Go back to home page</StyledLink>
  </ErrorWrapper>
)
