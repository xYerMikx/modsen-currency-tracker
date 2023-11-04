import React from "react"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/lib/integration/react"
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary"
import { GlobalStyles } from "@/styles/globalStyles"
import { persistor } from "@/store"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "@/constants/theme"
import configureStore from "redux-mock-store"

const mockStore = configureStore()

const store = mockStore({
  theme: {
    theme: "dark",
  },
})

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <GlobalStyles />
          {children}
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  )
}

const ProdiverWithTheme = ({ children }) => {
  return (
    <Providers>
      <ThemeProvider
        theme={store.getState().theme.theme === "dark" ? darkTheme : lightTheme}
      >
        {children}
      </ThemeProvider>
    </Providers>
  )
}

const renderWithWrappers = (ui, options) =>
  render(ui, { wrapper: ProdiverWithTheme, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { renderWithWrappers }
