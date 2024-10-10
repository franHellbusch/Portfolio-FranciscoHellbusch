import styled from "styled-components";

export const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 15px;
  min-width: 450px;

  @media (max-width: 1330px) {
    min-width: 380px;
  }

  @media (max-width: 450px) {
    min-width: auto;
  }
`;
