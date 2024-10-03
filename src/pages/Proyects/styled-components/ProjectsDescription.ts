import styled from "styled-components";

export const ProjectsDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 10px;
  width: 85%;
  margin: 50px 0 20px 0;
  align-items: flex-start;

  h2 {
    font-size: 28px;
    color: ${(props) => props.theme.text.dark};
    line-height: 23px;
    display: flex;
    align-items: center;
    gap: 10px;

    & > svg {
      color: ${(props) => props.theme.colors.primaryLight};
    }
  }

  p {
    font-size: 15px;
    color: ${(props) => props.theme.text.light};
    line-height: 23px;
    max-width: 700px;
  }

  @media (max-width: 1450px) {
    width: 95%;
  }

  @media (max-width: 1300px) {
    width: 90%;
  }

  @media (max-width: 1200px) {
    h2 {
      font-size: 26px;
      line-height: 20px;
    }

    p {
      font-size: 14px;
      line-height: 20px;
      max-width: 600px;
    }
  }

  @media (max-width: 1050px) {
    width: 95%;
  }

  @media (max-width: 767px) {
    align-items: center;
    text-align: center;
  }
`;
