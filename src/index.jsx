import ReactDOM from "react-dom/client"
import "mapbox-gl/dist/mapbox-gl.css"
import { Main } from "@/components/Main/Main"

const rootElement = ReactDOM.createRoot(document.getElementById("app"))

async function deferRender() {
  const { worker } = await import("./mocks/browser")

  return worker.start({
    findWorker(scriptUrl, mockServiceWorkerUrl) {
      return scriptUrl.includes("mockServiceWorker")
    },
  })
}

deferRender().then(() => {
  rootElement.render(<Main />)
})
