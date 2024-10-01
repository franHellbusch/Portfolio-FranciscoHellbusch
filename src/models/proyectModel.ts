export type ProyectTechnologie = {
  name: string;
  logo: string;
};

export type ProyectModel = {
  id: string;
  title: string;
  description: string;
  deployLink: string | null;
  githubLink: string | null;
  category: string;
  images: string[];
  technologies: ProyectTechnologie[];
};

export type ProyectCategory = {
  id: string;
  name: string;
};
