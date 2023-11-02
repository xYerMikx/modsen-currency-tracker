import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/lib/integration/react"
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary"
import { GlobalStyles } from "@/styles/globalStyles"
import { App } from "@/components/App/App"
import store, { persistor } from "@/store"

export const Main = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <GlobalStyles />
          <App />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  )
}
