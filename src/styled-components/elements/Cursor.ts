import styled from "styled-components";

export const Cursor = styled.div`
  position: fixed;
  background: ${(props) => props.theme.text.grey};
  width: 8px;
  height: 8px;
  border-radius: 50%;
  z-index: 10001;
  pointer-events: none;
  user-select: none;
`;

export const CursorFollower = styled.div`
  position: fixed;
  background: ${(props) => props.theme.text.light};
  width: 26px;
  height: 26px;
  border-radius: 50%;
  z-index: 10000;
  opacity: 0.5;
  pointer-events: none;
  user-select: none;
  transform: translate(-50%, -50%);
`;
