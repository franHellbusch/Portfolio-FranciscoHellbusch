export type EducationTechnologie = {
  name: string;
  backgroundColor: string;
  fontColor: string;
};

export type EducationModel = {
  id: string;
  title: string;
  academy: string;
  description: string;
  technologies: EducationTechnologie[];
};
