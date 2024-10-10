import styled from "styled-components";

interface PageContainerContentProps {
  $centered: boolean;
}

export const PageContainerContent = styled.div<PageContainerContentProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 10;
  ${(props) => props.$centered && "align-items: center; justify-content: center;"}
`;
