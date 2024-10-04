import styled from "styled-components";

export const ProjectModalInfoContainer = styled.div`
  max-width: 500px;
  flex: 1;
  min-width: 420px;

  h4 {
    font-size: 26px;
    color: ${(props) => props.theme.text.dark};
    line-height: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    font-weight: 700;

    & > svg {
      color: ${(props) => props.theme.colors.primaryLight};
    }
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme.text.light};
    line-height: 20px;
    max-width: 700px;
  }

  @media (max-width: 1200px) {
    h2 {
      font-size: 22px;
      line-height: 18px;
    }

    p {
      font-size: 14px;
      line-height: 20px;
      max-width: 600px;
    }
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 20px;
      line-height: 16px;
    }
  }

  @media (max-width: 400px) {
    h2 {
      font-size: 18px;
      line-height: 16px;
    }
  }

  @media (max-width: 500px) {
    min-width: 220px;
  }
`;
