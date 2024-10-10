import styled from "styled-components";

// Loader styles
export const PageLoaderContainer = styled.div<{ $isLoading: boolean }>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  width: calc(100% - 90px);
  height: 100%;
  background: ${(props) => props.theme.background.light};
  opacity: ${(props) => (props.$isLoading ? 1 : 0)};
  visibility: ${(props) => (props.$isLoading ? "visible" : "hidden")};
  transition: opacity 0.5s ease, visibility 0.5s ease;
  z-index: 50;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const PageLoader = styled.div`
  width: 2.5em;
  height: 2.5em;
  transform: rotate(165deg);

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0.5em;
    height: 0.5em;
    border-radius: 0.25em;
    transform: translate(-50%, -50%);
  }

  &:before {
    animation: before8 2s infinite;
  }

  &:after {
    animation: after6 2s infinite;
  }

  @keyframes before8 {
    0% {
      width: 0.5em;
      box-shadow: 1em -0.5em ${(props) => props.theme.text.lightRed},
        -1em 0.5em ${(props) => props.theme.text.lightBlue};
    }
    35% {
      width: 2.5em;
      box-shadow: 0 -0.5em ${(props) => props.theme.text.lightRed},
        0 0.5em ${(props) => props.theme.text.lightBlue};
    }
    70% {
      width: 0.5em;
      box-shadow: -1em -0.5em ${(props) => props.theme.text.lightRed},
        1em 0.5em ${(props) => props.theme.text.lightBlue};
    }
    100% {
      box-shadow: 1em -0.5em ${(props) => props.theme.text.lightRed},
        -1em 0.5em ${(props) => props.theme.text.lightBlue};
    }
  }

  @keyframes after6 {
    0% {
      height: 0.5em;
      box-shadow: 0.5em 1em ${(props) => props.theme.socialMedia.phone},
        -0.5em -1em ${(props) => props.theme.socialMedia.email};
    }
    35% {
      height: 2.5em;
      box-shadow: 0.5em 0 ${(props) => props.theme.socialMedia.phone},
        -0.5em 0 ${(props) => props.theme.socialMedia.email};
    }
    70% {
      height: 0.5em;
      box-shadow: 0.5em -1em ${(props) => props.theme.socialMedia.phone},
        -0.5em 1em ${(props) => props.theme.socialMedia.email};
    }
    100% {
      box-shadow: 0.5em 1em ${(props) => props.theme.socialMedia.phone},
        -0.5em -1em ${(props) => props.theme.socialMedia.email};
    }
  }
`;
