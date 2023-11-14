import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname !== "timeline" && pathname !== "contacts" && pathname !== "bankcard") {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}
