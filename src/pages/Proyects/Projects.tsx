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

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjectsList(selectedCategory?.name || null);
      setProjectsList(data);
    };

    fetchProjects();
  }, [selectedCategory]);

  useEffect(() => {
    const fetchProjectsCategories = async () => {
      const categories = await getProjectsCategoryList();
      setProjectsCategoryList(categories);
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
        <ProjectRadioSelectCategory>
          <CategoryRadio>
            <CategoryInput
              type='radio'
              name='radio'
              checked={selectedCategory == null}
              onChange={() => handleCategoryChange()}
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
              />
              <CategoryName $checked={selectedCategory?.id == category.id}>
                {category.name}
              </CategoryName>
            </CategoryRadio>
          ))}
        </ProjectRadioSelectCategory>
      </ProjectsDescription>
      <ProjectsList projects={projectsList} />
    </PageWithLoading>
  );
};

export default Projects;
