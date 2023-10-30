import ReactDOM from "react-dom/client"
import App from "./components/App/App"
import { Provider } from "react-redux"
// import "./styles/global.scss"
import store, { persistor } from "./store"
import { PersistGate } from "redux-persist/integration/react"
import "mapbox-gl/dist/mapbox-gl.css"
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary"
import { GlobalStyles } from "./styles/globalStyles"

ReactDOM.createRoot(document.getElementById("app")).render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<ErrorBoundary>
				<GlobalStyles />
				<App />
			</ErrorBoundary>
		</PersistGate>
	</Provider>,
)
