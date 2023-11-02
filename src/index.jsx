import ReactDOM from "react-dom/client"
import "mapbox-gl/dist/mapbox-gl.css"
import { Main } from "@/components/Main/Main"

const rootElement = ReactDOM.createRoot(document.getElementById("app"))

async function deferRender() {
  if (process.env.NODE_ENV !== "development") {
    return
  }

  const { worker } = await import("./mocks/browser")

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}

deferRender().then(() => {
  rootElement.render(<Main />)
})
