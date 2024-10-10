import { Instagram, Linkedin, Mail, Phone } from "react-feather";
import { ContactSocialMediaLink, ContactSocialMediaListContainer } from "./styled-components";

const ContactSocialMediaList: React.FC = () => {
  return (
    <ContactSocialMediaListContainer>
      <ContactSocialMediaLink
        target='_blank'
        href='https://wa.me/+543388670766'
        $socialMediaName='Phone'>
        <Phone /> +54 3388 670766
      </ContactSocialMediaLink>
      <ContactSocialMediaLink
        target='_blank'
        href='https://www.instagram.com/franhellbusch/'
        $socialMediaName='Instagram'>
        <Instagram /> Instagram
      </ContactSocialMediaLink>
      <ContactSocialMediaLink
        target='_blank'
        href='https://www.linkedin.com/in/fhdeveloper/'
        $socialMediaName='LinkedIn'>
        <Linkedin /> LinkedIn
      </ContactSocialMediaLink>
      <ContactSocialMediaLink
        target='_blank'
        href='mailto:fghellbusch@gmail.com?subject=Asunto%20aquí&body=Hola,%0A%0AEscribe%20tu%20mensaje%20aquí.'
        $socialMediaName='Email'>
        <Mail /> fghellbusch@gmail.com
      </ContactSocialMediaLink>
    </ContactSocialMediaListContainer>
  );
};

export default ContactSocialMediaList;
