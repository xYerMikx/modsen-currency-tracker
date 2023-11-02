import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { headerLinks } from "@/constants/headerLinks"
import { darkTheme, lightTheme } from "@/constants/theme"
import { Header } from "@/components/Header/Header"
import { Wrapper } from "@/components/Wrapper/Wrapper"
import { Footer } from "@/components/Footer/Footer"
import { useSelector } from "react-redux"
import { Hero } from "@/components/Hero/Hero"

export const App = () => {
  const currentTheme = useSelector((state) => state.theme)

  return (
    <ThemeProvider theme={currentTheme.theme === "dark" ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Wrapper>
          <Header />
          <Hero />
          <Routes>
            {headerLinks.map(({ element, to }, index) => {
              return <Route key={index} element={element} path={to} />
            })}
          </Routes>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  )
}
