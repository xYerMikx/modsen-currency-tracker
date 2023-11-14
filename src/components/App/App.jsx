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
import { ScrollToTop } from "@/utils/scrollToTop"

export const App = () => {
  const currentTheme = useSelector(themeSelector)

  return (
    <ThemeProvider theme={currentTheme.theme === "dark" ? darkTheme : lightTheme}>
      <BrowserRouter>
        <ScrollToTop />
        <Wrapper>
          <Header />
          <Hero />
          <Routes>
            {routes.map(({ element, to }, index) => {
              return <Route key={index} element={element} path={to} />
            })}
          </Routes>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  )
}
