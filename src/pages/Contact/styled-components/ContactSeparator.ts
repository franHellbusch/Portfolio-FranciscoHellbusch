import styled from "styled-components";

export const ContactSeparator = styled.span`
  height: 70%;
  width: 2px;
  background: ${(props) => props.theme.background.darkLight};

  @media (max-width: 953px) {
    height: 2px;
    width: 70%;
  }
`;
