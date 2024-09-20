import styled from "styled-components";

export const PageContainer = styled.div`
  flex: 1;
  background: ${(props) => props.theme.background.light};
  padding: 0 25px;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    padding-bottom: 100px;
  }

  @media (max-width: 660px) {
    padding: 0 15px 80px 15px;
  }
`;
