import { ErrorWrapper, StyledLink } from "./styled"

export const ErrorPage = () => (
  <ErrorWrapper>
    <div>
      <h1>Something went wrong...</h1>
      <h2>This page doesn't exist</h2>
      <StyledLink to="/">Go back to home page</StyledLink>
    </div>
  </ErrorWrapper>
)
