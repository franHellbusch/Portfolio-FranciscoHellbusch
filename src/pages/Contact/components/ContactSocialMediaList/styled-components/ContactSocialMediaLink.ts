import styled from "styled-components";

interface ContactSocialMediaLinkProps {
  $socialMediaName: string;
}

export const ContactSocialMediaLink = styled.a<ContactSocialMediaLinkProps>`
  padding: 15px;
  background: ${(props) => props.theme.background.greyLight};
  box-shadow: 4px 0px 10px 0px rgba(47, 122, 249, 0.1);
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${(props) => props.theme.text.grey};
  font-weight: 700;
  font-size: 16px;
  transition: 0.3s;

  & > svg {
    background: ${(props) => props.theme.socialMedia[props.$socialMediaName.toLowerCase()]};
    padding: 8px;
    border-radius: 8px;
    color: ${(props) => props.theme.permanentColors.white};
    box-shadow: 4px 0px 10px 0px rgba(47, 122, 249, 0.1);
  }

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 1330px) {
    padding: 12px;
    font-size: 14px;

    & > svg {
      padding: 6px;
    }
  }
`;
