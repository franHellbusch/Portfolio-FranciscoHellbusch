import { EducationModel } from "@/models";
import React from "react";
import {
  EducationCardContainer,
  EducationCardTechnologies,
  EducationTech,
} from "./styled-components";

interface IEducationCardProps {
  education: EducationModel;
}

const EducationCard: React.FC<IEducationCardProps> = ({ education }) => {
  return (
    <EducationCardContainer>
      <h4>
        {education.title} - {education.academy}
      </h4>
      <p>{education.description}</p>
      <EducationCardTechnologies>
        {education.technologies.map((tech, index) => (
          <EducationTech
            key={index}
            $backgroundColor={tech.backgroundColor}
            $fontColor={tech.fontColor}>
            {tech.name}
          </EducationTech>
        ))}
      </EducationCardTechnologies>
    </EducationCardContainer>
  );
};

export default EducationCard;
