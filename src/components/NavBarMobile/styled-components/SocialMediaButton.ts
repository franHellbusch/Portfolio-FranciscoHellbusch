import styled, { keyframes, css } from "styled-components";

const facAnimation = keyframes`
  0% {
    transform: scale(1, 1);
  }
  33% {
    transform: scale(0.95, 1.05);
  }
  66% {
    transform: scale(1.05, 0.95);
  }
  100% {
    transform: scale(1, 1);
  }
`;

// Style the container for the floating button and social media items
export const SocialMediaButtonContainer = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`;

// Style the floating button
export const SocialMediaButton = styled.label<{ $open: boolean }>`
  border: 1px solid ${(props) => props.theme.background.grey};
  background: ${(props) => props.theme.background.greyLight};
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  transition: 0.4s ease-out;
  z-index: 10;

  & > svg {
    width: 22px;
    color: ${(props) => props.theme.text.grey};
  }

  ${(props) =>
    props.$open &&
    css`
      background: ${(props) => props.theme.background.light};
      transform: scale(0.9);

      & > svg {
        color: ${(props) => props.theme.colors.primary};
      }
    `}
`;

// Style the container for social media items
export const SocialMediaItemsContainer = styled.div<{ $open: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease-in, visibility 0.2s ease-in, bottom 0.2s ease-in;
  z-index: 10;
  gap: 15px;
  bottom: 0;

  ${(props) =>
    props.$open &&
    css`
      opacity: 1;
      visibility: visible;
      bottom: 60px;
      animation: ${facAnimation} 0.4s ease-out forwards;
    `}
`;

// Style individual social media items
interface SocialMediaItemProps {
  $socialMediaName: string;
}

export const SocialMediaItem = styled.a<SocialMediaItemProps>`
  background: ${(props) =>
    props.theme.socialMedia[props.$socialMediaName.toLowerCase()] || "#e8e8f3"};
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s, transform 0.3s;
  color: ${(props) => props.theme.permanentColors.white};

  &.active {
    background: ${(props) => props.theme.colors.primary};
  }

  &:hover {
    transform: scale(1.05);
  }

  & > svg {
    width: 21px;
    color: ${(props) => props.theme.permanentColors.white};
  }

  &:hover > svg {
    color: ${(props) => props.theme.permanentColors.white};
  }
`;
