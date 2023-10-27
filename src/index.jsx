import ReactDOM from "react-dom/client"
import App from "./components/App/App"
import { Provider } from "react-redux"
import "./styles/global.scss"
import store, { persistor } from "./store"
import { PersistGate } from "redux-persist/integration/react"

ReactDOM.createRoot(document.getElementById("app")).render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
)
