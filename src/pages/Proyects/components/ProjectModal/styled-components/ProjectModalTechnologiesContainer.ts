import styled from "styled-components";

export const ProjectModalTechnologiesTitle = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.text.dark};
  line-height: 18px;
  font-weight: 700;
  margin: 25px 0 10px 0;
`;

export const ProjectModalTechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  transition: 0.3s;
  gap: 10px;
`;

export const ProjectModalTechnologie = styled.span`
  background: ${(props) => props.theme.background.grey};
  font-weight: 600;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${(props) => props.theme.text.grey};

  & > img {
    width: 14px;
  }

  @media (max-width: 950px) {
    font-size: 13px;

    & > img {
      width: 13px;
    }
  }
`;
