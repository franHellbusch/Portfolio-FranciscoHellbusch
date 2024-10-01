import styled from "styled-components";

export const ProyectsListContainer = styled.div`
  width: 85%;
  display: flex;
  align-self: center;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 1150px) {
    width: 90%;
  }

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }

  @media (max-width: 640px) {
    width: 95%;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;
