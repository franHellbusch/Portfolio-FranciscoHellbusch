import { SectionDescription } from "@/styled-components";
import React from "react";
import { ExperienceList } from "./components";
import { PageWithLoading } from "@/components";

const Work: React.FC = () => {
  return (
    <PageWithLoading>
      <SectionDescription>
        <h2>Professional Experience</h2>
        <p>
          Throughout my career, I've had the opportunity to work on diverse projects that have
          enhanced my skills and fueled my passion for problem-solving. From collaborating in
          dynamic teams to leading independent initiatives, I strive to deliver high-quality results
          while continuously learning and adapting to new challenges.
        </p>
      </SectionDescription>
      <ExperienceList />
    </PageWithLoading>
  );
};

export default Work;
