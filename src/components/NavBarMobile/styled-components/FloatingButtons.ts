import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface FloatingButtonProps {
  $open: boolean;
}

export const FloatingButton = styled.button<FloatingButtonProps>`
  position: absolute;
  top: -20px;
  left: calc(50% - 28px);
  padding: 12px;
  background: ${(props) => props.theme.background.greyLight};
  border-radius: 100%;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border: 0;

  & > div {
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: 0.5s;
  }

  & > div > span {
    width: 100%;
    height: 4px;
    background-color: rgb(176, 92, 255);
    border-radius: 2px;
  }

  & > div > span:nth-of-type(2) {
    transition: 0.8s;
  }

  & > div > span:first-of-type,
  & > div > span:last-of-type {
    width: 70%;
  }

  ${(props) =>
    props.$open &&
    `
    transition: 0.3s ease;
    transform: scale(0.95);

    & > div > span {
      position: absolute;
      transition: transform .5s;
    }
    
     & > div > span:nth-of-type(2) {
      transform: scaleX(0);
      transition: transform .5s;
    }
    
     & > div > span:first-of-type {
      width: 100%;
      transform: rotate(45deg);
      transition: transform .5s;
    }
    
    & > div > span:last-of-type {
      width: 100%;
      transform: rotate(-45deg);
      transition: transform .5s;
    }
    
    & > div {
      transition: transform .5s;
      transform: rotate(180deg);
    }
  `}
`;

interface FloatingButtonItemProps {
  $open: boolean;
}

export const FloatingButtonItem = styled(NavLink)<FloatingButtonItemProps>`
  background: ${(props) => props.theme.background.greyLight};
  width: 46px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 0;
  pointer-events: none;
  box-shadow: inherit;
  transition: 0.2s cubic-bezier(0.18, 0.89, 0.32, 1.28), 0.2s ease opacity,
    0.2s cubic-bezier(0.08, 0.82, 0.17, 1) transform;
  z-index: -1;

  &.active {
    background: ${(props) => props.theme.colors.primary};
  }

  &.active > svg {
    color: ${(props) => props.theme.permanentColors.white};
  }

  &:hover {
    background: ${(props) => props.theme.colors.primaryLight};
    transform: scale(1.05);
  }

  & > svg {
    width: 22px;
    color: ${(props) => props.theme.text.grey};
  }

  &:hover > svg {
    color: ${(props) => props.theme.permanentColors.white};
  }

  /* Muestra los botones cuando $open está activado */
  ${(props) =>
    props.$open &&
    `
    opacity: 1;
    pointer-events: auto;
    z-index: 0;

    &:first-of-type {
      bottom: 60px;
      right: 86px;
    }

    &:nth-of-type(2) {
      bottom: 120px;
      right: 60px;
      transition-delay: 0.05s;
    }

    &:nth-of-type(3) {
      bottom: 160px;
      right: 3px;
      transition-delay: 0.1s;
    }

    &:nth-of-type(4) {
      bottom: 120px;
      right: -54px;
      transition-delay: 0.15s;
    }

    &:last-of-type {
      bottom: 60px;
      right: -80px;
      transition-delay: 0.2s;
    }
  `}
`;
