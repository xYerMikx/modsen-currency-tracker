import { ThemeProvider } from "styled-components"
import theme from "../../constants/theme"

const App = () => {
	return <ThemeProvider theme={theme.darkTheme}></ThemeProvider>
}

export default App
