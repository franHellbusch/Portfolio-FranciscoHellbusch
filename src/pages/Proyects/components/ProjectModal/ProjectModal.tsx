import React from "react";
import { ProjectModel } from "@/models";
import {
  ProjectModalBoxContainer,
  ProjectModalButtonsContainer,
  ProjectModalContainer,
  ProjectModalContentContainer,
  ProjectModalDeployButton,
  ProjectModalFloatingButton,
  ProjectModalGithubButton,
  ProjectModalInfoContainer,
  ProjectModalTechnologie,
  ProjectModalTechnologiesContainer,
  ProjectModalTechnologiesTitle,
} from "./styled-components";
import { ArrowLeft, Code, Eye, EyeOff } from "react-feather";
import { ProjectModalCarrousel } from "../ProjectModalCarrousel";

interface IProjectModalProps {
  project: ProjectModel | null | "initial";
  handleClose: () => void;
}

const ProjectModal: React.FC<IProjectModalProps> = ({ project, handleClose }) => {
  if (project == "initial") {
    return null; // O puedes retornar algún mensaje o componente alternativo.
  }

  return (
    <ProjectModalContainer $active={!!project}>
      <ProjectModalBoxContainer $active={!!project}>
        <ProjectModalFloatingButton onClick={handleClose}>
          <ArrowLeft />
        </ProjectModalFloatingButton>
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
          {project?.images && <ProjectModalCarrousel images={project?.images} />}
        </ProjectModalContentContainer>
      </ProjectModalBoxContainer>
    </ProjectModalContainer>
  );
};

export default ProjectModal;
