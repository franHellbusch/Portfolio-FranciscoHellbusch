import styled from "styled-components";

interface ProjectModalContainerProps {
  $active: boolean;
}

export const ProjectModalContainer = styled.div<ProjectModalContainerProps>`
  display: ${(props) => (props.$active ? "flex" : "none")};
  position: fixed;
  padding: 20px 50px;
  top: 0;
  right: 0;
  z-index: 10;
  width: calc(100% - 90px);
  box-sizing: border-box;
  height: 100vh;
  align-self: center;
  justify-content: center;
  background: ${(props) => props.theme.background.greyLight};

  @media (max-width: 767px) {
    width: 100%;
  }

  @media (max-width: 660px) {
    padding: 0 15px 0 15px;
  }
`;

export const ProjectModalContentContainer = styled.div`
  max-width: 1000px;
  display: flex;
  align-items: center;
  gap: 40px;
`;
