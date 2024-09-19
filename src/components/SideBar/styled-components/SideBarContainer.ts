import styled from "styled-components";

export const SideBarContainer = styled.div`
  height: calc(100vh - 50px);
  width: 90px;
  padding: 25px 0;
  background: ${(props) => props.theme.background.greyLight};
  box-shadow: 4px 0px 10px 0px rgba(47, 122, 249, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 20;
`;
