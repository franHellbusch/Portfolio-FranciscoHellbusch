export type ProjectTechnologie = {
  name: string;
  logo: string;
};

export type ProjectModel = {
  id: string;
  title: string;
  description: string;
  deployLink: string | null;
  githubLink: string | null;
  category: string;
  images: string[];
  technologies: ProjectTechnologie[];
};

export type ProjectCategory = {
  id: string;
  name: string;
};
