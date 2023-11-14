import { useEffect } from "react"
import { ErrorWrapper, StyledLink, StyledSubtitle, StyledTitle } from "./styled"

export const ErrorPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <ErrorWrapper>
      <StyledTitle>Something went wrong...</StyledTitle>
      <StyledSubtitle>This page doesn't exist</StyledSubtitle>
      <StyledLink to="/">Go back to home page</StyledLink>
    </ErrorWrapper>
  )
}
