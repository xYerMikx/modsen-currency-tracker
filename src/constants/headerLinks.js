import { BankCard } from "@/pages/BankCard/BankCard"
import { Contacts } from "@/pages/Contacts/Contacts"
import { Home } from "@/pages/Home/Home"
import { Timeline } from "@/pages/Timeline/Timeline"

export const headerLinks = [
  { name: "Home", to: "/", element: <Home /> },
  { name: "Timeline", to: "/timeline", element: <Timeline /> },
  { name: "Bank card", to: "/bankcard", element: <BankCard /> },
  { name: "Contacts", to: "/contacts", element: <Contacts /> },
]
