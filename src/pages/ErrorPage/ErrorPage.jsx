import { useEffect } from "react"
import { ErrorWrapper, StyledLink, StyledSubtitle, StyledTitle } from "./styled"
import { getRoute } from "@/constants/routes"

export const ErrorPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <ErrorWrapper>
      <StyledTitle>Something went wrong...</StyledTitle>
      <StyledSubtitle>This page doesn't exist</StyledSubtitle>
      <StyledLink to={getRoute("home")}>Go back to home page</StyledLink>
    </ErrorWrapper>
  )
}
