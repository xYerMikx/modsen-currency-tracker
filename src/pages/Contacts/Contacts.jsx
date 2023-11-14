import { contactsLinks } from "@/constants/contactsLinks"
import {
  ContactsLink,
  ContactsWrapper,
  EmailText,
  Flex,
  LinksWrapper,
  ProfileImage,
  StyledLi,
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
              <StyledLi key={link}>
                <ContactsLink href={link} target="blank">
                  {name}
                </ContactsLink>
              </StyledLi>
            )
          })}
        </LinksWrapper>
      </Flex>
      <EmailText>Email: {process.env.EMAIL}</EmailText>
    </ContactsWrapper>
  )
}
