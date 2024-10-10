import styled from "styled-components";

export const ContactSocialMediaListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex: 1;
  min-width: 300px;

  @media (max-width: 1330px) {
    min-width: 250px;
  }
`;
