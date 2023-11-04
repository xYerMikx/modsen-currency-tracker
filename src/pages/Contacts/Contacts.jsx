import { contactsLinks } from "@/constants/contactsLinks"
import {
  ContactsLink,
  ContactsWrapper,
  EmailText,
  Flex,
  LinksWrapper,
  ProfileImage,
} from "./styled"
import profile from "@/assets/images/profile.jpg"

export const Contacts = () => {
  return (
    <ContactsWrapper>
      <Flex>
        <ProfileImage src={profile} alt="Profile" />
        <LinksWrapper>
          {contactsLinks.map(({ link, name }) => {
            return (
              <li key={link}>
                <ContactsLink href={link} target="blank">
                  {name}
                </ContactsLink>
              </li>
            )
          })}
        </LinksWrapper>
      </Flex>
      <EmailText>Email: {process.env.EMAIL}</EmailText>
    </ContactsWrapper>
  )
}
