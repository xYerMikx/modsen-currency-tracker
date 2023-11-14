import { BankCard } from "@/pages/BankCard/BankCard"
import { Contacts } from "@/pages/Contacts/Contacts"
import { ErrorPage } from "@/pages/ErrorPage/ErrorPage"
import { Home } from "@/pages/Home/Home"
import { Timeline } from "@/pages/Timeline/Timeline"

import { footerLinks } from "./footerLinks"

const footerRoutes = footerLinks.reduce((acc, curr) => {
  curr.links.forEach((link) => {
    acc[link.name.toLowerCase()] = link.to
  })
  return acc
}, {})
export const routes = [
  {
    name: "home",
    element: <Home />,
  },
  {
    name: "timeline",
    element: <Timeline />,
  },
  {
    name: "bankcard",
    element: <BankCard />,
  },
  {
    name: "contacts",
    element: <Contacts />,
  },
  {
    name: "error",
    element: <ErrorPage />,
  },
]
export const routesObj = {
  home: "/",
  timeline: "/timeline",
  bankcard: "/bankcard",
  contacts: "/contacts",
  ...footerRoutes,
  error: "*",
}
export const getRoute = (routeName) => {
  return routesObj[routeName]
}
