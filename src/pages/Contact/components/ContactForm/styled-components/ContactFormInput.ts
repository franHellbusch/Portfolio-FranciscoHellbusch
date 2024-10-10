import styled from "styled-components";

export const ContactFormInputGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  flex: 1;
`;

export const ContactFormInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
`;

export const ContactFormLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.text.light};

  @media (max-width: 1330px) {
    font-size: 13px;
  }
`;

export const ContactErrorMessage = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.text.lightRed};
  margin-left: 5px;

  @media (max-width: 1330px) {
    font-size: 13px;
  }
`;

export const ContactFormInput = styled.input`
  background: ${(props) => props.theme.background.greyLight};
  color: ${(props) => props.theme.text.grey};
  padding: 10px;
  font-size: 16px;
  border: 0;
  border-radius: 8px;
  outline: 0;
  box-sizing: border-box;
  transition: 0.3s;

  @media (max-width: 1330px) {
    font-size: 14px;
    padding: 8px;
  }
`;

export const ContactFormTextArea = styled.textarea`
  height: 200px;
  background: ${(props) => props.theme.background.greyLight};
  color: ${(props) => props.theme.text.grey};
  padding: 15px;
  font-size: 16px;
  border: 0;
  border-radius: 8px;
  resize: none;
  outline: 0;
  box-sizing: border-box;
  transition: 0.3s;

  @media (max-width: 1330px) {
    font-size: 14px;
    padding: 8px;
  }
`;
