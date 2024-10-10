import styled from "styled-components";

interface ProjectsListContainerProps {
  $shouldCollapse: boolean;
  $loading: boolean;
}

export const ProjectsListContainer = styled.div<ProjectsListContainerProps>`
  width: 85%;
  display: flex;
  align-self: center;
  gap: 30px;
  flex-wrap: wrap;
  margin: 20px 0 50px 0;
  opacity: ${(props) => (props.$loading ? "0.5" : "1")};

  @media (max-width: 1450px) {
    width: 95%;
  }

  @media (max-width: 1300px) {
    width: 90%;
  }

  @media (max-width: 1050px) {
    width: 95%;
  }

  @media (max-width: 767px) {
    margin-bottom: 20px;

    height: ${({ $shouldCollapse }) => ($shouldCollapse ? "0px" : "auto")};
  }

  @media (max-width: 575px) {
    gap: 40px;
  }
`;
