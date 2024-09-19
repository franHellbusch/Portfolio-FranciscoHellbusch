import React, { useState } from "react";
import {
  DarkModeButtonMobile,
  FloatingButton,
  FloatingButtonItem,
  MobileNavBar,
  SocialMediaButton,
  SocialMediaButtonContainer,
  SocialMediaItem,
  SocialMediaItemsContainer,
} from "./styled-components";
import {
  Book,
  Briefcase,
  Cloud,
  Code,
  GitHub,
  Home,
  Instagram,
  Linkedin,
  MessageCircle,
  Moon,
  Sun,
} from "react-feather";

interface INavBarMobileProps {
  themeToggle: (checked: boolean) => void;
}

const NavBarMobile: React.FC<INavBarMobileProps> = ({ themeToggle }) => {
  const [isFloatingButtonsOpen, setIsFloatingButtonsOpen] = useState(false);
  const [isSocialMediaOpen, setIsSocialMediaOpen] = useState(false);

  const toggleFloatingButtons = () => {
    setIsFloatingButtonsOpen(!isFloatingButtonsOpen);
  };

  const toggleSocialMedia = () => {
    setIsSocialMediaOpen(!isSocialMediaOpen);
  };

  const handleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    themeToggle(e.target.checked);
  };

  return (
    <MobileNavBar>
      <DarkModeButtonMobile className='darkThemeBtn'>
        <input onChange={handleTheme} type='checkbox' />
        <label>
          <Moon className='moon' />
          <Sun className='sun' />
        </label>
        <span className='fake-body'></span>
      </DarkModeButtonMobile>

      <FloatingButton $open={isFloatingButtonsOpen} onClick={toggleFloatingButtons}>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <FloatingButtonItem $open={isFloatingButtonsOpen} to='/'>
          <Home />
        </FloatingButtonItem>
        <FloatingButtonItem $open={isFloatingButtonsOpen} to='/work'>
          <Briefcase />
        </FloatingButtonItem>
        <FloatingButtonItem $open={isFloatingButtonsOpen} to='/education'>
          <Book />
        </FloatingButtonItem>
        <FloatingButtonItem $open={isFloatingButtonsOpen} to='/proyects'>
          <Code />
        </FloatingButtonItem>
        <FloatingButtonItem $open={isFloatingButtonsOpen} to='/contact'>
          <MessageCircle />
        </FloatingButtonItem>
      </FloatingButton>

      <SocialMediaButtonContainer>
        <SocialMediaButton $open={isSocialMediaOpen} onClick={toggleSocialMedia}>
          <Cloud />
        </SocialMediaButton>

        <SocialMediaItemsContainer $open={isSocialMediaOpen}>
          <SocialMediaItem $socialMediaName='Github' href='' target='_blank'>
            <GitHub />
          </SocialMediaItem>
          <SocialMediaItem $socialMediaName='Instagram' href='' target='_blank'>
            <Instagram />
          </SocialMediaItem>
          <SocialMediaItem $socialMediaName='LinkedIn' href='' target='_blank'>
            <Linkedin />
          </SocialMediaItem>
        </SocialMediaItemsContainer>
      </SocialMediaButtonContainer>
    </MobileNavBar>
  );
};

export default NavBarMobile;
