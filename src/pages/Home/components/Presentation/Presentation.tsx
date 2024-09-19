import React from "react";
import {
  PresentationCard,
  PresentationCardButton,
  PresentationCardContent,
  PresentationContainer,
} from "./styled-components";
import presentationCardImage from "../../assets/img/presentation-card-image.png";
import { Paragraph } from "@/styled-components";
import { ArrowRight } from "react-feather";

const Presentation: React.FC = () => {
  return (
    <PresentationContainer>
      <PresentationCard>
        <PresentationCardContent>
          <h2>
            I'm Francisco Hellbusch <br />
            <span>Full Stack</span> Developer
          </h2>
          <Paragraph>
            Specializing in building dynamic web applications with seamless front-end and back-end
            integration. Proficient in JavaScript, React, and Node.js, I am passionate about
            creating responsive user experiences.
          </Paragraph>
          <PresentationCardButton to='/contact'>
            HIRE ME <ArrowRight />
          </PresentationCardButton>
        </PresentationCardContent>
        <img src={presentationCardImage} alt='Presentation Card Image' />
      </PresentationCard>
    </PresentationContainer>
  );
};

export default Presentation;
