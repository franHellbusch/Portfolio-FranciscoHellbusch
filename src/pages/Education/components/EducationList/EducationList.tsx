import { EducationModel } from "@/models";
import React from "react";
import { EducationListContainer, EducationListLoader } from "./styled-componets";
import { EducationCard } from "../EducationCard";

interface IEducationListProps {
  educationList: EducationModel[];
}

const EducationList: React.FC<IEducationListProps> = ({ educationList }) => {
  return (
    <EducationListContainer>
      {educationList.length == 0 ? (
        <EducationListLoader />
      ) : (
        educationList.map((education) => <EducationCard education={education} key={education.id} />)
      )}
    </EducationListContainer>
  );
};

export default EducationList;
