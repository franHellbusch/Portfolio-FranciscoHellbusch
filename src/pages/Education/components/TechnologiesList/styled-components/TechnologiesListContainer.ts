import styled from "styled-components";

export const TechnologiesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 50px 0;
  max-width: 700px;

  & > h3 {
    font-size: 24px;
    color: ${(props) => props.theme.text.dark};
    line-height: 20px;
    display: flex;
    align-items: center;
    gap: 10px;

    & > svg {
      color: ${(props) => props.theme.colors.primaryLight};
    }
  }

  @media (max-width: 1200px) {
    & > h3 {
      font-size: 20px;
      line-height: 18px;
    }
  }

  @media (max-width: 767px) {
    margin: 20px 0 50px 0;
  }
`;

export const TechnologieItemsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

interface TechnologieItemProps {
  $fontColor: string;
  $backgroundColor: string;
}

export const TechnologieItem = styled.span<TechnologieItemProps>`
  background: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$fontColor};
  font-weight: 600;
  border-radius: 15px;
  padding: 5px 10px;
  font-size: 14px;
`;
