import { ProjectModel } from "@/models";
import React, { useEffect, useState } from "react";
import { ProjectsListContainer } from "./styled-components";
import { ProjectCard } from "../ProjectCard";
import { ProjectModal } from "../ProjectModal";

interface IProjectsListProps {
  loading: boolean;
  projects: ProjectModel[];
}

const ProjectsList: React.FC<IProjectsListProps> = ({ loading, projects }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectModel | null | "initial">(
    "initial"
  );
  const [shouldCollapse, setShouldCollapse] = useState(false);

  const handleSelectProyect = (selected: ProjectModel) => {
    setSelectedProject(selected);
  };

  const handleCloseProyect = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (selectedProject && selectedProject !== "initial") {
      const timer = setTimeout(() => {
        setShouldCollapse(true); // Cambia el estado después de 0.3s
      }, 300);
      return () => clearTimeout(timer); // Limpia el timeout si el componente se desmonta
    } else {
      setShouldCollapse(false); // Resetea el estado si no está activo
    }
  }, [selectedProject]);

  return (
    <ProjectsListContainer $loading={loading} $shouldCollapse={shouldCollapse}>
      <ProjectModal handleClose={handleCloseProyect} project={selectedProject} />
      {projects.map((project) => (
        <ProjectCard handleSelect={handleSelectProyect} key={project.id} project={project} />
      ))}
    </ProjectsListContainer>
  );
};

export default ProjectsList;
