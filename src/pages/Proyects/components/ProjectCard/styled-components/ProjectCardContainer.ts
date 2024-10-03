import styled from "styled-components";

// Contenedor de la Card
export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc(100% / 3 - 60px / 3);

  & > h4 {
    font-size: 20px;
    color: ${(props) => props.theme.text.dark};
    line-height: 24px;
  }

  @media (max-width: 1120px) {
    width: calc(50% - 15px);
  }

  @media (max-width: 767px) {
    & > h4 {
      font-size: 18px;
      line-height: 22px;
    }
  }

  @media (max-width: 575px) {
    width: 100%;
  }
`;

interface ProjectCardContentContainerProps {
  $backgroundImage: string;
}

export const ProjectCardContentContainer = styled.div<ProjectCardContentContainerProps>`
  position: relative;
  border-radius: 20px;
  background-image: url(${(props) => props.$backgroundImage});
  border: 2px solid ${(props) => props.theme.background.grey};
  background-position: center;
  background-size: 170%;
  width: 100%;
  box-sizing: border-box;
  aspect-ratio: 5/4;
  transition: 0.3s;

  &:hover {
    background-size: 180%;
  }
`;
