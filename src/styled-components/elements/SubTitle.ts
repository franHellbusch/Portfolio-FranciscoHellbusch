import styled from "styled-components";

interface SideBarSocialMediaLinkProps {
  $fontSize?: string;
  $color?: string;
}

export const SubTitle = styled("h4")<SideBarSocialMediaLinkProps>`
  font-size: ${(props) => props.$fontSize || "20px"};
  color: ${(props) => props.$color || props.theme.text.dark};
  line-height: 24px;
`;
