import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface SideBarNavLinkProps {
  $sectionName: string;
}

export const SideBarNavLink = styled(NavLink)<SideBarNavLinkProps>`
  position: relative;
  background: ${(props) => props.theme.background.grey};
  width: 40px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

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
    width: 18px;
    color: ${(props) => props.theme.text.grey};
  }

  &:hover > svg {
    color: ${(props) => props.theme.permanentColors.white};
  }

  &::after {
    content: "${(props) => props.$sectionName}";
    position: absolute;
    left: 100%;
    transform: translateX(-50%) scale(0); /* Mantener centrado verticalmente, animación hacia afuera */
    opacity: 0;
    pointer-events: none;
    z-index: 99999;
    background: ${(props) => props.theme.background.dark};
    color: ${(props) => props.theme.text.white};
    border-radius: 5px;
    padding: 5px 10px;
    transition: 0.3s;
    font-size: 14px;
    font-weight: 600;
  }

  &::before {
    position: absolute;
    content: "";

    left: calc(100% - 2px); /* Colocar justo al borde derecho del botón */
    transform: translateX(-50%) scale(0); /* Animar desde la derecha */
    border-radius: 2px;
    width: 10px;
    height: 10px; /* Mantener cuadrado */
    background: ${(props) => props.theme.background.dark};
    opacity: 0;
    transition: 0.3s;
    transform-origin: center;
  }

  &:hover::after,
  &:hover::before {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateX(10px) scale(1); /* Animación de deslizamiento desde la derecha */
  }

  &:hover::before {
    transform: translateX(10px) scale(1) rotate(45deg); /* Rotación del triángulo */
  }
`;

export const SideBarNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  flex-grow: 1;
`;
