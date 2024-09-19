import styled from "styled-components";

interface SideBarSocialMediaLinkProps {
  $sectionName: string;
}

export const SideBarSocialMediaLink = styled("a")<SideBarSocialMediaLinkProps>`
  position: relative;
  background: ${(props) => props.theme.socialMedia[props.$sectionName.toLowerCase()]};
  width: 40px;
  aspect-ratio: 1/1;
  border-radius: 10px;
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
    transform: scale(1.05);
  }

  & > svg {
    width: 21px;
    color: ${(props) => props.theme.permanentColors.white};
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
    z-index: 30;
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
    z-index: 20;
  }

  &:hover::after,
  &:hover::before {
    visibility: visible;
    opacity: 1; /* Muestra el cartelito al hacer hover */
  }
`;

export const SideBarSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
