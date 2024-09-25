import styled from "styled-components";

interface SideBarSocialMediaLinkProps {
  $fontSize?: string;
  $color?: string;
}

export const Paragraph = styled("p")<SideBarSocialMediaLinkProps>`
  font-size: ${(props) => props.$fontSize || "14px"};
  color: ${(props) => props.$color || props.theme.text.light};
  line-height: 20px;
`;
