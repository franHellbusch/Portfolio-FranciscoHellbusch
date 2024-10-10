import { ProjectCategory, ProjectModel } from "@/models";
import { getProjectsCategoryList, getProjectsList } from "@/services";
import React, { useEffect, useState } from "react";
import {
  CategoryInput,
  CategoryName,
  CategoryRadio,
  ProjectRadioSelectCategory,
  ProjectsDescription,
} from "./styled-components";
import { Code } from "react-feather";
import { ProjectsList } from "./components";
import { PageWithLoading } from "@/components";

const Projects: React.FC = () => {
  const [projectsList, setProjectsList] = useState<ProjectModel[]>([]);
  const [projectsCategoryList, setProjectsCategoryList] = useState<ProjectCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      const data = await getProjectsList(selectedCategory?.name || null);
      setProjectsList(data);
      setIsLoading(false);
    };

    fetchProjects();
  }, [selectedCategory]);

  useEffect(() => {
    const fetchProjectsCategories = async () => {
      setIsLoading(true);
      const categories = await getProjectsCategoryList();
      setProjectsCategoryList(categories);
      setIsLoading(false);
    };

    fetchProjectsCategories();
  }, []);

  const handleCategoryChange = (category: ProjectCategory | null = null) => {
    setSelectedCategory(category);
  };

  return (
    <PageWithLoading>
      <ProjectsDescription>
        <h2>
          <Code /> My Projects
        </h2>
        <p>
          Explore my projects across frontend, backend, and full stack development, showcasing my
          skills and experience in building dynamic applications.
        </p>
        <ProjectRadioSelectCategory $loading={isLoading}>
          <CategoryRadio>
            <CategoryInput
              type='radio'
              name='radio'
              checked={selectedCategory == null}
              onChange={() => handleCategoryChange()}
              disabled={isLoading}
            />
            <CategoryName $checked={selectedCategory == null}>All</CategoryName>
          </CategoryRadio>
          {projectsCategoryList.map((category) => (
            <CategoryRadio key={category.id}>
              <CategoryInput
                type='radio'
                name='radio'
                checked={selectedCategory?.id == category.id}
                onChange={() => handleCategoryChange(category)}
                disabled={isLoading}
              />
              <CategoryName $checked={selectedCategory?.id == category.id}>
                {category.name}
              </CategoryName>
            </CategoryRadio>
          ))}
        </ProjectRadioSelectCategory>
      </ProjectsDescription>
      <ProjectsList loading={isLoading} projects={projectsList} />
    </PageWithLoading>
  );
};

export default Projects;
