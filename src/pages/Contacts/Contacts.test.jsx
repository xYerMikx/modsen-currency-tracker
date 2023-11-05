import React from "react"
import { Contacts } from "./Contacts"
import { renderWithWrappers } from "@/utils/testUtils"
import { contactsLinks } from "@/constants/contactsLinks"
import { screen } from "@testing-library/react"
import dotenv from "dotenv"

dotenv.config()

describe("Contacts", () => {
  it("renders without crashing", () => {
    renderWithWrappers(<Contacts />)
  })
  it("renders email text", () => {
    renderWithWrappers(<Contacts />)
    const emailText = screen.getByText(`Email: ${process.env.EMAIL}`)
    expect(emailText).toBeInTheDocument()
  })

  it.each(contactsLinks.map(({ name, link }) => [name, link]))(
    "renders contact link with name: %s and link: %s",
    (name, link) => {
      renderWithWrappers(<Contacts />)
      const contactLink = screen.getByText(name)
      expect(contactLink).toBeInTheDocument()
      expect(contactLink).toHaveAttribute("href", link)
    },
  )

  it("renders the profile image", () => {
    renderWithWrappers(<Contacts />)
    const profileImage = screen.getByAltText("Profile")
    expect(profileImage).toBeInTheDocument()
  })
})
