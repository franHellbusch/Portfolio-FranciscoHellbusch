import styled from "styled-components";

export const CategoriesListContainer = styled.div`
  flex: 1;
  gap: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 25px;

  @media (max-width: 660px) {
    gap: 15px;
  }
`;
