import styled from "styled-components";

export const ProyectsListContainer = styled.div`
  width: 85%;
  display: flex;
  align-self: center;
  gap: 30px;
  flex-wrap: wrap;
  margin: 20px 0 50px 0;

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
  }

  @media (max-width: 575px) {
    gap: 40px;
  }
`;
