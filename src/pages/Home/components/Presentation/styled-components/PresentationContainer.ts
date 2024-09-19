import styled from "styled-components";

export const PresentationContainer = styled.div`
  padding: 0 80px;
  width: calc(100% - 160px);
  height: 400px;
  display: flex;
  border-radius: 3px;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.background.greyLight};
  box-shadow: 4px 0px 10px 0px rgba(47, 122, 249, 0.1);
  position: relative;

  /* Pseudo-elemento para el lado izquierdo */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 70%;
    background: ${(props) =>
      `linear-gradient(to right, ${props.theme.colors.primaryExtraLight} 50%, transparent 50%)`};
    clip-path: polygon(0 0, 100% 0, 0 100%);
  }

  /* Pseudo-elemento para el lado derecho */
  &::after {
    border-radius: 0 0 3px 0;
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 150px;
    height: 70%;
    background: ${(props) =>
      `linear-gradient(to left, ${props.theme.colors.primaryExtraLight} 50%, transparent 50%)`};
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
  }

  @media (max-width: 1200px) {
    padding: 0 60px;
    width: calc(100% - 120px);
    height: 350px;
    display: flex;

    &::before {
      width: 110px;
    }

    &::after {
      width: 110px;
    }
  }

  @media (max-width: 1000px) {
    padding: 0 60px;
    width: calc(100% - 120px);
    height: auto;

    &::before {
      width: 130px;
    }

    &::after {
      width: 130px;
    }
  }

  @media (max-width: 660px) {
    &::before {
      width: 100px;
    }

    &::after {
      width: 100px;
    }
  }

  @media (max-width: 540px) {
    padding: 0 40px;
    width: calc(100% - 80px);
    height: auto;

    &::before {
      width: 70px;
    }

    &::after {
      width: 70px;
    }
  }

  @media (max-width: 450px) {
    padding: 0 30px;
    width: calc(100% - 60px);
    height: auto;

    &::before {
      width: 50px;
    }

    &::after {
      width: 50px;
    }
  }
`;
