import { ProjectModel } from "@/models";
import React, { useState } from "react";
import { ProjectsListContainer } from "./styled-components";
import { ProjectCard } from "../ProjectCard";
import { ProjectModal } from "../ProjectModal";

interface IProjectsListProps {
  projects: ProjectModel[];
}

const ProjectsList: React.FC<IProjectsListProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectModel | null>(null);

  const handleSelectProyect = (selected: ProjectModel) => {
    setSelectedProject(selected);
  };

  return (
    <ProjectsListContainer>
      <ProjectModal project={selectedProject} />
      {projects.map((project) => (
        <ProjectCard handleSelect={handleSelectProyect} key={project.id} project={project} />
      ))}
    </ProjectsListContainer>
  );
};

export default ProjectsList;
