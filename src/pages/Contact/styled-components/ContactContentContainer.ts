import styled from "styled-components";

export const ContactContentContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 70px;
  flex-wrap: wrap;
  margin-bottom: 50px;

  @media (max-width: 1330px) {
    width: 85%;
    gap: 50px;
  }

  @media (max-width: 1150px) {
    width: 90%;
  }

  @media (max-width: 953px) {
    width: 70%;
    gap: 40px;
  }

  @media (max-width: 767px) {
    margin-bottom: 30px;
  }

  @media (max-width: 660px) {
    width: 90%;
  }

  @media (max-width: 450px) {
    width: 95%;
  }
`;
