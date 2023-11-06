import React from "react"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/lib/integration/react"
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary"
import { GlobalStyles } from "@/styles/globalStyles"
import store, { persistor } from "@/store"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "@/constants/theme"
import configureStore from "redux-mock-store"

const mockStoreFn = configureStore()

export const mockStore = mockStoreFn({
  theme: "dark",
})

const Providers = ({ children, store }) => {
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

const ProdiverWithTheme =
  (store) =>
  ({ children }) => {
    return (
      <Providers store={store}>
        <ThemeProvider theme={store.getState().theme === "dark" ? darkTheme : lightTheme}>
          {children}
        </ThemeProvider>
      </Providers>
    )
  }

const renderWithWrappers = (ui, options) =>
  render(ui, { wrapper: ProdiverWithTheme(mockStore), ...options })
const renderWithRealStore = (ui, options) =>
  render(ui, { wrapper: ProdiverWithTheme(store), ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { renderWithWrappers, renderWithRealStore }
