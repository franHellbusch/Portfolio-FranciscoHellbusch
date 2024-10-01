import { ProyectModel } from "@/models";
import React from "react";
import {
  ProyectCardContainer,
  ProyectCardContentContainer,
  ProyectCardDetailButton,
  ProyectCardDetailButtonContainer,
  ProyectTechnologie,
  ProyectTechnologiesContainer,
} from "./styled-components";
import { ArrowRight } from "react-feather";

interface IProyectCardProps {
  proyect: ProyectModel;
}

const ProyectCard: React.FC<IProyectCardProps> = ({ proyect }) => {
  return (
    <ProyectCardContainer>
      <ProyectCardContentContainer $backgroundImage={proyect.images[0]}>
        <ProyectCardDetailButtonContainer>
          <span></span>
          <span></span>
          <ProyectCardDetailButton>
            <ArrowRight />
          </ProyectCardDetailButton>
        </ProyectCardDetailButtonContainer>
        <ProyectTechnologiesContainer>
          <span></span>
          <span></span>
          {proyect.technologies.map((tech) => (
            <ProyectTechnologie>
              <img src={tech.logo} alt='logo tech' /> {tech.name}
            </ProyectTechnologie>
          ))}
        </ProyectTechnologiesContainer>
      </ProyectCardContentContainer>
      <h4>{proyect.title}</h4>
    </ProyectCardContainer>
  );
};

export default ProyectCard;
