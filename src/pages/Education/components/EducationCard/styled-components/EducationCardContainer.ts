import styled from "styled-components";

export const EducationCardContainer = styled.div`
  flex: 1;
  transition: 0.3s;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 350px;
  max-width: 450px;

  &:hover {
    background: ${(props) => props.theme.background.greyLight};
    box-shadow: 4px 0px 10px 0px rgba(47, 122, 249, 0.1);
  }

  & > h4 {
    font-size: 20px;
    color: ${(props) => props.theme.text.dark};
    line-height: 24px;
  }

  & > p {
    font-size: 14px;
    color: ${(props) => props.theme.text.light};
    line-height: 20px;
  }

  @media (max-width: 1050px) {
    max-width: 100%;
  }

  @media (max-width: 450px) {
    min-width: 200px;
  }
`;
