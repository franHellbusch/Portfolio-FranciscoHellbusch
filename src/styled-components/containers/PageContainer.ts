import styled from "styled-components";

interface PageContainerProps {
  $centered?: boolean;
}

export const PageContainer = styled.div<PageContainerProps>`
  flex: 1;
  background: ${(props) => props.theme.background.light};
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  ${(props) => props.$centered && `align-items: center; justify-content: center;`}

  @media (max-width: 767px) {
    padding-bottom: 100px;
  }

  @media (max-width: 660px) {
    padding: 0 15px 80px 15px;
  }
`;
