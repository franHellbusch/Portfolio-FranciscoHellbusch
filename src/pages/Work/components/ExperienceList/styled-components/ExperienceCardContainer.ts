import styled from "styled-components";

export const ExperienceCardContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
`;

export const ExperienceSpace = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
`;

interface ExperienceTimeLineProps {
  $direction: string;
}

export const ExperienceTimeLine = styled.div<ExperienceTimeLineProps>`
  display: flex;
  justify-content: center;
  width: 100px;
  position: relative;

  & > span {
    position: absolute;
    width: 3px;
    height: 100%;
    background: ${(props) => props.theme.background.darkLight};
    box-shadow: 4px 0px 10px 0px rgba(47, 122, 249, 0.1);
  }
`;

export const ExperienceCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: ${(props) => props.theme.background.greyLight};
  box-shadow: 4px 0px 10px 0px rgba(47, 122, 249, 0.1);
  border-radius: 5px;
  gap: 10px;
  margin-bottom: 50px;
`;
