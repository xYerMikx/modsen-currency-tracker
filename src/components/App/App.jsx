import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { headerLinks } from "../../constants/headerLinks"
import { darkTheme, lightTheme } from "../../constants/theme"
import Header from "../Header/Header"
import Wrapper from "../Wrapper/Wrapper"
import Footer from "../Footer/Footer"

const App = () => {
	const [currentTheme, setCurrentTheme] = useState("dark")
	return (
		<ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
			<BrowserRouter>
				<Wrapper>
					<Header setCurrentTheme={setCurrentTheme} currentTheme={currentTheme} />
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
