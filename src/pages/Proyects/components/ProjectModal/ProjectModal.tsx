import React from "react";
import { ProjectModel } from "@/models";
import {
  ProjectModalButtonsContainer,
  ProjectModalCarrousel,
  ProjectModalContainer,
  ProjectModalContentContainer,
  ProjectModalDeployButton,
  ProjectModalGithubButton,
  ProjectModalInfoContainer,
  ProjectModalTechnologie,
  ProjectModalTechnologiesContainer,
  ProjectModalTechnologiesTitle,
} from "./styled-components";
import { Code, Eye, EyeOff } from "react-feather";

interface IProjectModalProps {
  project: ProjectModel | null;
}

const ProjectModal: React.FC<IProjectModalProps> = ({ project }) => {
  console.log(project?.deployLink);
  return (
    <ProjectModalContainer $active={!!project}>
      <ProjectModalContentContainer>
        <ProjectModalInfoContainer>
          <h4>{project?.title}</h4>
          <p>{project?.description}</p>
          <ProjectModalTechnologiesTitle>Technologies</ProjectModalTechnologiesTitle>
          <ProjectModalTechnologiesContainer>
            {project?.technologies.map((tech, index) => (
              <ProjectModalTechnologie key={index}>
                <img src={tech.logo} alt='logo tech' />
                {tech.name}
              </ProjectModalTechnologie>
            ))}
          </ProjectModalTechnologiesContainer>
          <ProjectModalButtonsContainer>
            {project?.deployLink || project?.githubLink ? (
              <>
                {project?.githubLink && (
                  <ProjectModalGithubButton href={project.githubLink} target='_blank'>
                    <Code />
                    View Code
                  </ProjectModalGithubButton>
                )}
                {project?.deployLink && (
                  <ProjectModalDeployButton href={project.deployLink} target='_blank'>
                    <Eye />
                    Live Demo
                  </ProjectModalDeployButton>
                )}
              </>
            ) : (
              <h5>
                <EyeOff />
                Can't share the deploy or GitHub due to contract restrictions.
              </h5>
            )}
          </ProjectModalButtonsContainer>
        </ProjectModalInfoContainer>
        <ProjectModalCarrousel src={project?.images[0]} />
      </ProjectModalContentContainer>
    </ProjectModalContainer>
  );
};

export default ProjectModal;
