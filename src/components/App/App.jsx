import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { headerLinks } from "@constants/headerLinks"
import { darkTheme, lightTheme } from "@constants/theme"
import Header from "@components/Header/Header"
import Wrapper from "@components/Wrapper/Wrapper"
import Footer from "@components/Footer/Footer"
import { useSelector } from "react-redux"

const App = () => {
	const currentTheme = useSelector((state) => state.theme)

	return (
		<ThemeProvider theme={currentTheme.theme === "dark" ? darkTheme : lightTheme}>
			<BrowserRouter>
				<Wrapper>
					<Header />
					<Routes>
						{headerLinks.map((el, index) => {
							return <Route key={index} element={el.element} path={el.to} />
						})}
					</Routes>
					<Footer />
				</Wrapper>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
