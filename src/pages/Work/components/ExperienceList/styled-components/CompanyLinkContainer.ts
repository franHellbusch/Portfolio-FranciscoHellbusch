import styled from "styled-components";

interface CompanyLinkProps {
  $companyName: string;
  $direction: string;
  $date: string;
  $isOpen: boolean;
}

export const CompanyLinkContainer = styled.div<CompanyLinkProps>`
  display: flex;
  align-items: center;
  z-index: 10;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  box-shadow: 4px 0px 10px 0px rgba(47, 122, 249, 0.1);

  & > a,
  & > span {
    position: absolute;
    width: 140px;
    ${(props) => (props.$direction == "right" ? `left: calc(50%);` : `right: calc(50%);`)}
    background: ${(props) => props.theme.background.greyLight};
    box-shadow: 4px 0px 10px 0px rgba(47, 122, 249, 0.1);
    border: 1px solid ${(props) => props.theme.background.grey};
    color: ${(props) => props.theme.text.lightBlue};
    border-radius: 10px;
    padding: 5px 10px;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    transition: 0.3s;
  }

  & > span {
    color: ${(props) => props.theme.text.grey};
  }

  & > a:hover,
  & > span:hover {
    transform: scale(1.03);
  }

  &::before {
    content: "${(props) => props.$date}";
    position: absolute;
    ${(props) =>
      props.$direction == "right" ? `left: calc(100% + 10px);` : `right: calc(100% + 10px);`}
    top: 13px;
    font-size: 14px;
    white-space: nowrap;
    color: ${(props) => props.theme.text.grey};
    font-weight: 600;
    transition: 0.3s;
    pointer-events: none; /* Evita que capture eventos del mouse */
  }

  &:hover > a,
  &:hover > span {
    visibility: visible;
    opacity: 1; /* Muestra el cartelito al hacer hover */
    ${(props) =>
      props.$direction == "right" ? `left: calc(100% + 10px);` : `right: calc(100% + 10px);`}
  }

  &:hover::before {
    ${(props) =>
      props.$direction == "right" ? `left: calc(100% + 180px);` : `right: calc(100% + 180px);`}
  }

  @media (max-width: 940px) {
    & > a,
    & > span {
      left: 50%;
    }

    &::before {
      left: calc(100% + 10px);
    }

    &:hover::before {
      left: ${(props) => (props.$isOpen ? "calc(100% + 180px)" : "calc(100% + 10px)")};
    }

    &:hover > a,
    &:hover > span {
      visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
      opacity: ${(props) => (props.$isOpen ? "1" : "0")};
      left: ${(props) => (props.$isOpen ? "calc(100% + 10px)" : "50%")};
    }
  }

  @media (max-width: 450px) {
    & > a,
    & > span {
      width: fit-content;
      white-space: nowrap;
    }

    &::before {
      left: calc(100% + 15px);
      top: 13px;
    }

    &:hover::before {
      left: calc(100% + 15px);
      top: ${(props) => (props.$isOpen ? " -20px" : "13px")};
    }
  }
`;
