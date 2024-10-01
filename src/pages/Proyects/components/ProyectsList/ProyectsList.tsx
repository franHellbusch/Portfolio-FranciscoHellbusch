import { ProyectModel } from "@/models";
import React from "react";
import { ProyectsListContainer } from "./styled-components";
import { ProyectCard } from "../ProyectCard";

interface IProyectsListProps {
  proyects: ProyectModel[];
}

const ProyectsList: React.FC<IProyectsListProps> = ({ proyects }) => {
  return (
    <ProyectsListContainer>
      {proyects.map((proyect) => (
        <ProyectCard key={proyect.id} proyect={proyect} />
      ))}
    </ProyectsListContainer>
  );
};

export default ProyectsList;
