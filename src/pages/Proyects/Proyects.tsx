import { ProyectCategory, ProyectModel } from "@/models";
import { getProyectsCategoryList, getProyectsList } from "@/services";
import { PageContainer } from "@/styled-components";
import React, { useEffect, useState } from "react";
import {
  CategoryInput,
  CategoryName,
  CategoryRadio,
  ProyectRadioSelectCategory,
  ProyectsDescription,
} from "./styled-components";
import { Code } from "react-feather";
import { ProyectsList } from "./components";

const Proyects: React.FC = () => {
  const [proyectsList, setProyectsList] = useState<ProyectModel[]>([]);
  const [proyectsCategoryList, setProyectsCategoryList] = useState<ProyectCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ProyectCategory | null>(null);

  useEffect(() => {
    const fetchProyects = async () => {
      const data = await getProyectsList(selectedCategory?.name || null);
      setProyectsList(data);
    };

    fetchProyects();
  }, [selectedCategory]);

  useEffect(() => {
    const fetchProyectsCategories = async () => {
      const categories = await getProyectsCategoryList();
      setProyectsCategoryList(categories);
    };

    fetchProyectsCategories();
  }, []);

  const handleCategoryChange = (category: ProyectCategory | null = null) => {
    setSelectedCategory(category);
  };

  return (
    <PageContainer>
      <ProyectsDescription>
        <h2>
          <Code /> My Proyects
        </h2>
        <p>
          Explore my projects across frontend, backend, and full stack development, showcasing my
          skills and experience in building dynamic applications.
        </p>
        <ProyectRadioSelectCategory>
          <CategoryRadio>
            <CategoryInput
              type='radio'
              name='radio'
              checked={selectedCategory == null}
              onChange={() => handleCategoryChange()}
            />
            <CategoryName $checked={selectedCategory == null}>All</CategoryName>
          </CategoryRadio>
          {proyectsCategoryList.map((category) => (
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
        </ProyectRadioSelectCategory>
      </ProyectsDescription>
      <ProyectsList proyects={proyectsList} />
    </PageContainer>
  );
};

export default Proyects;
