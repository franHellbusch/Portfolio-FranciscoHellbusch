import styled from "styled-components";

// Botón flotante con flecha
export const ProyectTechnologiesContainer = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -2px;
  top: -2px;
  background: ${(props) => props.theme.background.light};
  border-radius: 0 0 0 25px;
  border-left: 2px solid ${(props) => props.theme.background.grey};
  border-bottom: 2px solid ${(props) => props.theme.background.grey};
  transition: 0.3s;
  gap: 5px;

  & > span:nth-of-type(1) {
    position: absolute;
    top: calc(100% - 6px);
    right: -4px;
    width: 30px;
    aspect-ratio: 1/1;
    background: transparent;
    border-radius: 0 25px 0 0;
    border-right: 6px solid ${(props) => props.theme.background.light};
    border-top: 6px solid ${(props) => props.theme.background.light};
    transition: 0.3s;

    &::before {
      content: "";
      position: absolute;
      width: 30px;
      aspect-ratio: 1/1;
      top: 0;
      right: -2px;
      border-right: 2px solid ${(props) => props.theme.background.grey};
      border-top: 2px solid ${(props) => props.theme.background.grey};
      border-radius: 0 20px 0 0;
      transition: 0.3s;
    }

    &::after {
      content: "";
      position: absolute;
      width: 6px;
      aspect-ratio: 1/1;
      top: 0;
      right: -2px;
      background: ${(props) => props.theme.background.light};
      transition: 0.3s;
    }
  }

  & > span:nth-of-type(2) {
    position: absolute;
    right: calc(100% - 6px);
    top: -4px;
    width: 25px;
    aspect-ratio: 1/1;
    background: transparent;
    border-radius: 0 25px 0 0;
    border-right: 6px solid ${(props) => props.theme.background.light};
    border-top: 6px solid ${(props) => props.theme.background.light};
    transition: 0.3s;

    &::before {
      content: "";
      position: absolute;
      width: 25px;
      aspect-ratio: 1/1;
      top: -2px;
      right: 0;
      border-right: 2px solid ${(props) => props.theme.background.grey};
      border-top: 2px solid ${(props) => props.theme.background.grey};
      border-radius: 0 20px 0 0;
      transition: 0.3s;
    }

    &::after {
      content: "";
      position: absolute;
      width: 6px;
      aspect-ratio: 1/1;
      top: -2px;
      right: 0;
      background: ${(props) => props.theme.background.light};
      transition: 0.3s;
    }
  }
`;

export const ProyectTechnologie = styled.span`
  background: ${(props) => props.theme.background.greyLight};
  font-weight: 600;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${(props) => props.theme.text.grey};

  & > img {
    width: 14px;
  }

  @media (max-width: 950px) {
    font-size: 13px;

    & > img {
      width: 13px;
    }
  }
`;
