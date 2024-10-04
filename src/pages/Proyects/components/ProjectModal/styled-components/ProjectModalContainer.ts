import styled, { keyframes, css } from "styled-components";

interface ProjectModalContainerProps {
  $active: boolean;
}

// Animación de entrada desde la izquierda
const slideInFromLeft = keyframes`
  0% {
    right: 100%;
    opacity: 0;
  }
  100% {
    right: 0%;
    opacity: 1;
  }
`;

// Animación de salida hacia la izquierda
const slideOutToLeft = keyframes`
  0% {
    right: 0%;
    opacity: 1;
  }
  100% {
    right: 100%;
    opacity: 0;
  }
`;

export const ProjectModalContainer = styled.div<ProjectModalContainerProps>`
  position: fixed;
  padding: 10px 50px 30px 50px;
  top: 0;
  right: 100%;
  z-index: 10;
  width: calc(100% - 90px);
  height: 100%; /* Asegura que ocupe toda la altura de la pantalla */
  background: ${(props) => props.theme.background.greyLight};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center; /* Centra verticalmente el contenido en pantallas grandes */
  overflow-y: auto; /* Habilita el scroll si el contenido sobrepasa la pantalla */
  transition: 0.3s, right 0.5s ease, opacity 0.5s ease;

  ${(props) =>
    props.$active
      ? css`
          animation: ${slideInFromLeft} 0.5s ease forwards;
        `
      : css`
          animation: ${slideOutToLeft} 0.5s ease forwards;
        `}

  pointer-events: ${(props) => (props.$active ? "auto" : "none")};

  @media (max-width: 767px) {
    padding: 20px 10px;
    width: 100%;
    align-items: flex-start;
  }
`;

// Animación de entrada/salida del contenido
const fadeIn = keyframes`
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
`;

const fadeOut = keyframes`
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-20px);
    }
`;

interface ProjectModalBoxContainerProps {
  $active: boolean;
}

export const ProjectModalBoxContainer = styled.div<ProjectModalBoxContainerProps>`
  width: 100%;
  max-width: 1040px; /* Limita el ancho máximo del contenido */
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: 0;
  margin-top: auto; /* Garantiza que el contenido se mantenga centrado verticalmente */
  margin-bottom: auto; /* Igual que arriba, para centrarlo en pantallas grandes */
  overflow: hidden;

  ${(props) =>
    props.$active
      ? css`
          animation: ${fadeIn} 0.3s ease-in-out forwards;
          animation-delay: 0.5s;
        `
      : css`
          animation: ${fadeOut} 0.3s ease-in-out forwards;
        `}

  @media (max-width: 767px) {
    padding: 20px 20px 90px 20px;
  }
`;

export const ProjectModalContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
  align-items: center; /* Centra el contenido horizontal y verticalmente */
  gap: 40px;

  @media (max-width: 767px) {
    gap: 30px;
  }
`;
