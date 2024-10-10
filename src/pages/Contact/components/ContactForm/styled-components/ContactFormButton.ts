import styled, { keyframes } from "styled-components";

interface ContactFormButtonProps {
  $disabled: boolean;
}

export const ContactFormButton = styled.button<ContactFormButtonProps>`
  background: ${(props) => props.theme.colors.primaryLight};
  color: ${(props) => props.theme.permanentColors.white};
  padding: 15px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 8px;
  border: 0;
  margin-top: 10px;
  transition: 0.3s;
  opacity: ${(props) => (props.$disabled ? "0.7" : "1")};
  display: flex;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 1330px) {
    font-size: 16px;
    padding: 12px;
  }
`;

export const ContactSentSuccessMessage = styled.span`
  display: flex;
  align-items: center;

  & > svg {
    color: ${(props) => props.theme.socialMedia.phone};
    margin-right: 10px;
  }
`;

export const ContactSentErrorMessage = styled.span`
  display: flex;
  align-items: center;

  & > svg {
    color: ${(props) => props.theme.text.lightRed};
    margin-right: 10px;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const ContactFormLoader = styled.div`
  border: 4px solid ${(props) => props.theme.permanentColors.white};
  border-top: 4px solid ${(props) => props.theme.colors.primaryLight}; // Cambia esto al color deseado
  border-radius: 50%;
  width: 16px; // Ajusta el tamaño del loader
  height: 16px; // Ajusta el tamaño del loader
  animation: ${spin} 1s linear infinite;

  @media (max-width: 1330px) {
    border: 3px solid ${(props) => props.theme.permanentColors.white};
    border-top: 3px solid ${(props) => props.theme.colors.primaryLight}; // Cambia esto al color deseado
    width: 14px; // Ajusta el tamaño del loader
    height: 14px; // Ajusta el tamaño del loader
  }
`;
