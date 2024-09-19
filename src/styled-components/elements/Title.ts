import styled from "styled-components";

interface SideBarSocialMediaLinkProps {
  $fontSize?: string;
  $color?: string;
}

export const Title = styled("h2")<SideBarSocialMediaLinkProps>`
  font-size: ${(props) => props.$fontSize || "28px"};
  color: ${(props) => props.$color || props.theme.text.dark};
  line-height: 23px;
`;
