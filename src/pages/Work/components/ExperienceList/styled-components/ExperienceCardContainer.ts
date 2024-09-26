import styled from "styled-components";

export const ExperienceCardContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;

  @media (max-width: 1350px) {
    width: 85%;
  }

  @media (max-width: 1150px) {
    width: 90%;
  }

  @media (max-width: 1050px) {
    width: 100%;
  }

  @media (max-width: 940px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const ExperienceSpace = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;

  @media (max-width: 940px) {
    display: none;
  }
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

  @media (max-width: 940px) {
    order: 1;
    width: 70px;
  }

  @media (max-width: 460px) {
    width: 45px;
    padding-right: 10px;
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

  @media (max-width: 940px) {
    order: 2;
    margin: 65px 0 80px 0;
  }
`;
