import { useState } from "react"
import { ThemeProvider } from "styled-components"
import theme from "../../constants/theme"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../Header/Header"
import { headerLinks } from "../../constants/headerLinks"

const App = () => {
	const [currentTheme, setCurrentTheme] = useState("dark")
	return (
		<ThemeProvider theme={currentTheme === "dark" ? theme.darkTheme : theme.lightTheme}>
			<BrowserRouter>
				<Header setCurrentTheme={setCurrentTheme} currentTheme={currentTheme} />
				<Routes>
					{headerLinks.map((el, index) => {
						return <Route key={index} element={el.element} path={el.to} />
					})}
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
