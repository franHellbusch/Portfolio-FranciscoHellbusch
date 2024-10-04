import React, { useState } from "react";
import {
  ProjectModalButton,
  ProjectModalCarrouselContainer,
  ProjectModalImage,
  ProjectModalImagesWrapper,
} from "./styled-components";
import { ArrowLeft, ArrowRight } from "react-feather";

interface IProjectModalCarrouselProps {
  images: string[];
}

const ProjectModalCarrousel: React.FC<IProjectModalCarrouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <ProjectModalCarrouselContainer>
      {images.length > 1 ? (
        <>
          <ProjectModalImagesWrapper $currentIndex={currentIndex}>
            {images.map((image, index) => (
              <ProjectModalImage key={index} src={image} alt={`Project image ${index + 1}`} />
            ))}
          </ProjectModalImagesWrapper>
          <ProjectModalButton onClick={goToPrevious} $next={false}>
            <ArrowLeft />
          </ProjectModalButton>
          <ProjectModalButton onClick={goToNext} $next={true}>
            <ArrowRight />
          </ProjectModalButton>
        </>
      ) : (
        <ProjectModalImage src={images[0]} alt='Single project image' />
      )}
    </ProjectModalCarrouselContainer>
  );
};

export default ProjectModalCarrousel;
