import styled from "styled-components";

export const ProjectModalCarrouselContainer = styled.div`
  max-width: 500px;
  width: 100%;
  flex: 1;
  min-width: 420px;
  box-shadow: 4px 0px 10px 0px rgba(47, 122, 249, 0.1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;

  @media (max-width: 500px) {
    min-width: 200px;
  }
`;

export const ProjectModalImagesWrapper = styled.div<{ $currentIndex: number }>`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => `-${props.$currentIndex * 100}%`});
  width: 100%;
`;

export const ProjectModalImage = styled.img`
  width: 100%;
  border-radius: 5px;
  flex-shrink: 0;
`;

export const ProjectModalButton = styled.button<{ $next: boolean }>`
  position: absolute;
  background: ${(props) => props.theme.background.light};
  border: 0;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  z-index: 2;
  ${(props) => (props.$next ? "right: 10px;" : "left: 10px;")}
  border-radius: 50%;
  color: ${(props) => props.theme.text.grey};
  box-shadow: 4px 0px 10px 0px rgba(47, 122, 249, 0.1);
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
