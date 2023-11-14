import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "@/constants/theme"
import { Header } from "@/components/Header/Header"
import { Wrapper } from "@/components/Wrapper/Wrapper"
import { Footer } from "@/components/Footer/Footer"
import { useSelector } from "react-redux"
import { Hero } from "@/components/Hero/Hero"
import { routes } from "@/constants/routes"
import { themeSelector } from "@/store/selectors"
import { getRoute } from "@/constants/routes"

export const App = () => {
  const currentTheme = useSelector(themeSelector)

  return (
    <ThemeProvider theme={currentTheme.theme === "dark" ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Wrapper>
          <Header />
          <Hero />
          <Routes>
            {routes.map(({ element, name }, index) => {
              return <Route key={index} element={element} path={getRoute(name)} />
            })}
          </Routes>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  )
}
