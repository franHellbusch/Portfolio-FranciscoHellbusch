import styled from "styled-components";

export const MobileNavBar = styled.div`
  position: fixed;
  bottom: 25px;
  left: 25px;
  right: 25px;
  height: 60px;
  background: ${(props) => props.theme.background.primaryExtraLight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 30;
  border-radius: 3px;
  box-shadow: 4px 0px 10px 0px rgba(47, 122, 249, 0.1);

  @media (max-width: 660px) {
    bottom: 15px;
    left: 15px;
    right: 15px;
  }
`;
