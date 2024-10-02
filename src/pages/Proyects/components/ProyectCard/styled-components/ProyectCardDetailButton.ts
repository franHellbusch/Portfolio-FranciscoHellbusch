import styled from "styled-components";

// Botón flotante con flecha
export const ProyectCardDetailButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  position: absolute;
  right: -2px;
  bottom: -2px;
  width: 62px;
  aspect-ratio: 1/1;
  background: ${(props) => props.theme.background.light};
  border-radius: 50% 0 0 0;
  border-left: 2px solid ${(props) => props.theme.background.grey};
  border-top: 2px solid ${(props) => props.theme.background.grey};
  transition: 0.3s;

  & > span:nth-of-type(1) {
    position: absolute;
    bottom: calc(100% - 6px);
    right: -4px;
    width: 20px;
    aspect-ratio: 1/1;
    background: transparent; // Se puede eliminar si no hay fondo
    border-radius: 0 0 25px 0;
    border-right: 6px solid ${(props) => props.theme.background.light};
    border-bottom: 6px solid ${(props) => props.theme.background.light};
    transition: 0.3s;

    &::before {
      content: "";
      position: absolute;
      width: 20px;
      aspect-ratio: 1/1;
      bottom: 0;
      right: -2px;
      border-right: 2px solid ${(props) => props.theme.background.grey};
      border-bottom: 2px solid ${(props) => props.theme.background.grey};
      border-radius: 0 0 20px 0;
      transition: 0.3s;
    }

    &::after {
      content: "";
      position: absolute;
      width: 6px;
      aspect-ratio: 1/1;
      bottom: 0;
      right: -2px;
      background: ${(props) => props.theme.background.light};
      transition: 0.3s;
    }
  }

  & > span:nth-of-type(2) {
    position: absolute;
    right: calc(100% - 6px);
    bottom: -4px;
    width: 20px;
    aspect-ratio: 1/1;
    background: transparent; // Se puede eliminar si no hay fondo
    border-radius: 0 0 25px 0;
    border-right: 6px solid ${(props) => props.theme.background.light};
    border-bottom: 6px solid ${(props) => props.theme.background.light};
    transition: 0.3s;

    &::before {
      content: "";
      position: absolute;
      width: 20px;
      aspect-ratio: 1/1;
      bottom: -2px;
      right: 0;
      border-right: 2px solid ${(props) => props.theme.background.grey};
      border-bottom: 2px solid ${(props) => props.theme.background.grey};
      border-radius: 0 0 20px 0;
      transition: 0.3s;
    }

    &::after {
      content: "";
      position: absolute;
      width: 6px;
      aspect-ratio: 1/1;
      bottom: -2px;
      right: 0;
      background: ${(props) => props.theme.background.light};
      transition: 0.3s;
    }
  }

  @media (max-width: 650px) {
    width: 57px;
  }

  @media (max-width: 575px) {
    width: 62px;
  }
`;

export const ProyectCardDetailButton = styled.button`
  width: calc(100% - 10px);
  aspect-ratio: 1/1;
  border: 0;
  border-radius: 50%;
  background: ${(props) => props.theme.background.greyLight};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2px 2px 0;
  border: 2px solid ${(props) => props.theme.background.grey};
  transition: 0.3s;

  & > svg {
    color: ${(props) => props.theme.text.grey};
    width: 20px;
  }

  &:hover {
    opacity: 0.7;
    transform: scale(1.05);
  }
`;
