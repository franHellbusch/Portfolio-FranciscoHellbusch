import styled, { keyframes } from "styled-components";

interface PageContainerProps {
  $centered?: boolean;
  $position?: string;
}

// Animación para rotar y escalar las capas
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.05); /* Aumenta un poco el tamaño en el medio */
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`;

export const PageContainer = styled.div<PageContainerProps>`
  position: relative;
  flex: 1;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${(props) => props.$centered && "align-items: center; justify-content: center;"}

  @media (max-width: 767px) {
    padding-bottom: 100px;
  }

  @media (max-width: 660px) {
    padding: 0 15px 80px 15px;
  }

  &:before {
    content: "";
    display: flex;
    height: 100vh; /* Aumenta el tamaño para más efecto visual */
    aspect-ratio: 1/1; /* Ajusta la altura para un efecto de ola */
    position: fixed;
    top: -20vh; /* Ajusta la posición */
    left: -20%; /* Ajusta la posición */
    background: ${(props) => props.theme.background.primaryExtraLight};
    border-radius: 300px 60% 300px 60%; /* Formas abstractas que simulan olas */
    opacity: 0.3;
    transition: 0.3s;
    animation: ${rotateAnimation} 60s linear infinite; /* Aumenta la duración de la animación */
  }

  &::after {
    content: "";
    display: flex;
    height: 100vh; /* Aumenta el tamaño para más efecto visual */
    aspect-ratio: 1/1; /* Ajusta la altura para un efecto de ola */
    position: fixed;
    bottom: -20vh; /* Ajusta la posición */
    right: -25%; /* Ajusta la posición */
    background: ${(props) => props.theme.background.primaryExtraLight};
    border-radius: 300px 60% 300px 60%; /* Formas abstractas que simulan olas */
    opacity: 0.3;
    transition: 0.3s;
    animation: ${rotateAnimation} 60s linear infinite reverse; /* Aumenta la duración de la animación */
  }

  @media (max-width: 1200px) {
    &:before {
      height: 80vh;
    }

    &::after {
      height: 80vh;
    }
  }

  @media (max-width: 767px) {
    &:before {
      height: 70vh;
      border-radius: 200px 50% 200px 50%;
      animation: ${rotateAnimation} 40s linear infinite reverse;
    }

    &::after {
      height: 70vh;
      border-radius: 200px 50% 200px 50%;
      animation: ${rotateAnimation} 40s linear infinite reverse;
    }
  }

  @media (max-width: 500px) {
    &:before {
      height: 65vh;
    }

    &::after {
      height: 65vh;
    }
  }
`;
