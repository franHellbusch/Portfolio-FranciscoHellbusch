import { PageContainer, SectionDescription } from "@/styled-components";
import { ContactForm, ContactSocialMediaList } from "./components";
import { ContactContentContainer, ContactSeparator } from "./styled-components";

const Contact: React.FC = () => {
  return (
    <PageContainer $centered>
      <SectionDescription>
        <h2>Contact Me</h2>
        <p>
          I'd love to hear from you! Whether you have a question, a project proposal, or just want
          to connect, feel free to reach out. You can use the form below or connect with me through
          social media. Let's get in touch and create something amazing together!
        </p>
      </SectionDescription>
      <ContactContentContainer>
        <ContactSocialMediaList />
        <ContactSeparator />
        <ContactForm />
      </ContactContentContainer>
    </PageContainer>
  );
};

export default Contact;
