import { SectionDescription } from "@/styled-components";
import { CategoriesList, Presentation } from "./components";
import { PageWithLoading } from "@/components";

const Home: React.FC = () => {
  return (
    <PageWithLoading>
      <Presentation />
      <SectionDescription>
        <h2>Explore My Journey</h2>
        <p>
          Navigate through my professional path, educational background, notable projects, and get
          in touch for potential collaborations. Discover what I've accomplished and how I can
          contribute to new opportunities.
        </p>
      </SectionDescription>
      <CategoriesList />
    </PageWithLoading>
  );
};

export default Home;
