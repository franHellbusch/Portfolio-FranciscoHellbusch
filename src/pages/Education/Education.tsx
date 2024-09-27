import { PageContainer } from "@/styled-components";
import React, { useEffect, useState } from "react";
import { EducationDescription } from "./styled-components";
import { Book } from "react-feather";
import { EducationList, TechnologiesList } from "./components";
import { getEducationList, getTechnologiesList } from "@/services";
import { EducationModel, TechnologieModel } from "@/models";

const Education: React.FC = () => {
  const [educationList, setEducationList] = useState<EducationModel[]>([]);
  const [technologiesList, setTechnologiesList] = useState<TechnologieModel[]>([]);

  useEffect(() => {
    const fetchEducations = async () => {
      const data = await getEducationList();
      const technologiesData = await getTechnologiesList();
      setEducationList(data);
      setTechnologiesList(technologiesData);
    };

    fetchEducations();
  }, []);

  return (
    <PageContainer $centered={true}>
      <EducationDescription>
        <h2>
          <Book /> Education
        </h2>
        <p>
          This section showcases my academic background, highlighting the courses and programs that
          have contributed to my development as a professional.
        </p>
      </EducationDescription>
      <EducationList educationList={educationList} />
      <TechnologiesList techList={technologiesList} />
    </PageContainer>
  );
};

export default Education;
