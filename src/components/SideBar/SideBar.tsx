import {
  DarkModeButton,
  SideBarContainer,
  SideBarNav,
  SideBarNavLink,
  SideBarSocialMedia,
  SideBarSocialMediaLink,
} from "./styled-components";
import {
  Book,
  Briefcase,
  Code,
  GitHub,
  Home,
  Instagram,
  Linkedin,
  MessageCircle,
  Moon,
  Sun,
} from "react-feather";

interface SideBarProps {
  themeToggle: (checked: boolean) => void;
}

const SideBar: React.FC<SideBarProps> = ({ themeToggle }) => {
  const handleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    themeToggle(e.target.checked);
  };

  return (
    <SideBarContainer>
      <DarkModeButton className='darkThemeBtn'>
        <input onChange={handleTheme} type='checkbox' />
        <label>
          <Moon className='moon' />
          <Sun className='sun' />
        </label>
        <span className='fake-body'></span>
      </DarkModeButton>
      <SideBarNav>
        <SideBarNavLink $sectionName='Home' to='/'>
          <Home />
        </SideBarNavLink>
        <SideBarNavLink $sectionName='Work' to='/work'>
          <Briefcase />
        </SideBarNavLink>
        <SideBarNavLink $sectionName='Education' to='/education'>
          <Book />
        </SideBarNavLink>
        <SideBarNavLink $sectionName='Proyects' to='/proyects'>
          <Code />
        </SideBarNavLink>
        <SideBarNavLink $sectionName='Contact' to='/contact'>
          <MessageCircle />
        </SideBarNavLink>
      </SideBarNav>
      <SideBarSocialMedia>
        <SideBarSocialMediaLink
          $sectionName='GitHub'
          href='https://github.com/franHellbusch'
          target='_blank'>
          <GitHub />
        </SideBarSocialMediaLink>
        <SideBarSocialMediaLink
          $sectionName='Instagram'
          href='https://www.instagram.com/franhellbusch/'
          target='_blank'>
          <Instagram />
        </SideBarSocialMediaLink>
        <SideBarSocialMediaLink
          $sectionName='LinkedIn'
          href='https://www.linkedin.com/in/fhdeveloper/'
          target='_blank'>
          <Linkedin />
        </SideBarSocialMediaLink>
      </SideBarSocialMedia>
    </SideBarContainer>
  );
};

export default SideBar;
