import { ProjectModel } from "@/models";
import React from "react";
import {
  ProjectCardContainer,
  ProjectCardContentContainer,
  ProjectCardDetailButton,
  ProjectCardDetailButtonContainer,
  ProjectTechnologie,
  ProjectTechnologiesContainer,
} from "./styled-components";
import { ArrowRight } from "react-feather";

interface IProjectCardProps {
  project: ProjectModel;
  handleSelect: (selected: ProjectModel) => void;
}

const ProjectCard: React.FC<IProjectCardProps> = ({ project, handleSelect }) => {
  return (
    <ProjectCardContainer>
      <ProjectCardContentContainer $backgroundImage={project.images[0]}>
        <ProjectCardDetailButtonContainer>
          <span></span>
          <span></span>
          <ProjectCardDetailButton onClick={() => handleSelect(project)}>
            <ArrowRight />
          </ProjectCardDetailButton>
        </ProjectCardDetailButtonContainer>
        <ProjectTechnologiesContainer>
          <span></span>
          <span></span>
          {project.technologies.slice(0, 2).map((tech, index) => (
            <ProjectTechnologie key={index}>
              <img src={tech.logo} alt='logo tech' /> {tech.name}
            </ProjectTechnologie>
          ))}
        </ProjectTechnologiesContainer>
      </ProjectCardContentContainer>
      <h4>{project.title}</h4>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
