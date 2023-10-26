import { contactsLinks } from "@constants/contactsLinks"
import {
	ContactsLink,
	ContactsWrapper,
	EmailText,
	Flex,
	LinksWrapper,
	ProfileImage,
} from "./styled"
import profile from "@assets/images/profile.jpg"

const Contacts = () => {
	return (
		<ContactsWrapper>
			<Flex>
				<ProfileImage src={profile} />
				<LinksWrapper>
					{contactsLinks.map((el) => {
						return (
							<li key={el.link}>
								<ContactsLink href={el.link} target="blank">
									{el.name}
								</ContactsLink>
							</li>
						)
					})}
				</LinksWrapper>
			</Flex>
			<EmailText>Email: yermik2014@yandex.ru</EmailText>
		</ContactsWrapper>
	)
}

export default Contacts
