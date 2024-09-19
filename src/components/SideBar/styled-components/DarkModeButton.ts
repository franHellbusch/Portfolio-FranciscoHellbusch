import styled from "styled-components";

export const DarkModeButton = styled.div`
  position: relative;
  transition: 0.3s;

  & * {
    transition: all 0.3s;
  }

  &:hover {
    transform: scale(1.08);
  }

  & input {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
    opacity: 0;
  }

  & label {
    border: 1px solid ${(props) => props.theme.background.grey};
    background: ${(props) => props.theme.background.light};
    border-radius: 10px;
    height: 40px;
    width: 40px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }

  & label:active {
    border-radius: 5px;
  }

  & label svg {
    position: absolute;
    width: 18px;
    transition: 0.3s;
    z-index: 1;
  }

  & label svg.sun {
    width: 20px;
    opacity: 0;
    color: ${(props) => props.theme.text.white};
  }

  & label svg.moon {
    color: ${(props) => props.theme.text.dark};
    opacity: 1;
  }

  & input:checked + label {
    background: ${(props) => props.theme.permanentColors.yellow};
  }

  & input:checked + label svg.sun {
    opacity: 1;
  }

  & input:checked + label svg.moon {
    opacity: 0;
  }
`;
