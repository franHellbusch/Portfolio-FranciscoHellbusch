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
    left: 130%;
    background: ${(props) => props.theme.background.dark};
    color: ${(props) => props.theme.text.white};
    border-radius: 2px;
    padding: 5px 10px;
    visibility: hidden; /* Inicialmente oculto */
    opacity: 0;
    transition: 0.3s;
    font-size: 14px;
    font-weight: 600;
  }

  &::before {
    content: "";
    width: 10px;
    aspect-ratio: 1/1;
    position: absolute;
    left: calc(130% - 3px);
    background: ${(props) => props.theme.background.dark};
    color: ${(props) => props.theme.permanentColors.white};
    visibility: hidden; /* Inicialmente oculto */
    opacity: 0;
    border-radius: 2px;
    transition: 0.3s;
    transform: rotate(45deg);
  }

  &:hover::after,
  &:hover::before {
    visibility: visible;
    opacity: 1; /* Muestra el cartelito al hacer hover */
  }
`;

export const SideBarNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  flex-grow: 1;
`;
