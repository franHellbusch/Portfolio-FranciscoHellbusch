import { TechnologieModel } from "@/models";
import React from "react";
import {
  TechnologieItem,
  TechnologieItemsContainer,
  TechnologiesListContainer,
} from "./styled-components";
import { Cpu } from "react-feather";

interface ITechnologiesListProps {
  techList: TechnologieModel[];
}

const TechnologiesList: React.FC<ITechnologiesListProps> = ({ techList }) => {
  const sortedTechList = [...techList].sort((a, b) => {
    if (a.name === "Others...") return 1; // Colocar "Others" al final
    if (b.name === "Others...") return -1; // Mantener el resto en su lugar
    return 0; // No cambiar el orden de los demás
  });

  return (
    <TechnologiesListContainer>
      <h3>
        <Cpu /> Some technologies in My Stack
      </h3>
      <TechnologieItemsContainer>
        {sortedTechList.map((tech) => (
          <TechnologieItem
            key={tech.id}
            $backgroundColor={tech.backgroundColor}
            $fontColor={tech.fontColor}>
            {tech.name}
          </TechnologieItem>
        ))}
      </TechnologieItemsContainer>
    </TechnologiesListContainer>
  );
};

export default TechnologiesList;
