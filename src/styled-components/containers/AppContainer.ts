import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  background: ${(props) => props.theme.background.light};
`;
