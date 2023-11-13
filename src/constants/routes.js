import { ErrorPage } from "@/pages/ErrorPage/ErrorPage"

import { headerLinks } from "./headerLinks"

const routes = headerLinks.map(({ name, ...rest }) => rest)
routes.push({
  element: <ErrorPage />,
  to: "*",
})

export { routes }
