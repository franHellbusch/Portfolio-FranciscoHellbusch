import styled from "styled-components";

export const ProjectModalCarrousel = styled.img`
  max-width: 500px;
  width: 100%;
  flex: 1;
  min-width: 420px;
  box-shadow: 4px 0px 10px 0px rgba(47, 122, 249, 0.1);
  border-radius: 5px;

  @media (max-width: 500px) {
    min-width: auto;
  }
`;
