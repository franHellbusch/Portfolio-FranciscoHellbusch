import styled from "styled-components";

export const ProjectModalFloatingButton = styled.button`
  border: 0;
  transition: 0.3s;
  background: none;
  align-self: flex-start;

  & > svg {
    color: ${(props) => props.theme.text.grey};
  }

  &:hover {
    opacity: 0.7;
    transform: scale(1.08);
  }
`;
