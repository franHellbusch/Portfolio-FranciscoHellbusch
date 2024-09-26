import React, { useEffect, useState } from "react";
import { getExperienceList } from "@/services";
import { Experience } from "@/models";
import {
  CompanyLinkContainer,
  ExperienceCard,
  ExperienceCardContainer,
  ExperienceListContainer,
  ExperienceListLoader,
  ExperienceSpace,
  ExperienceTimeLine,
} from "./styled-components";
import { Paragraph, SubTitle } from "@/styled-components";
import { useMediaQuery } from "react-responsive";

const ExperienceList: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 940px)" });

  useEffect(() => {
    const fetchExperiences = async () => {
      setLoading(true); // Indicar que los datos están cargando
      const data = await getExperienceList();
      setExperiences(data);
      setLoading(false); // Termina la carga de datos
    };

    fetchExperiences();
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen); // Alterna el estado solo en mobile
    }
  };

  return (
    <ExperienceListContainer>
      {loading ? (
        <ExperienceListLoader />
      ) : (
        experiences.map((experience, index) =>
          index % 2 == 0 ? (
            <ExperienceCardContainer key={experience.id}>
              <ExperienceSpace />
              <ExperienceTimeLine $direction='left'>
                <CompanyLinkContainer
                  $isOpen={isOpen}
                  onClick={handleClick}
                  $direction='left'
                  $date={experience.date}
                  $companyName={experience.company}
                  style={{ backgroundImage: `url(${experience.companyLogo})` }}>
                  {experience.companyLink ? (
                    <a href={experience.companyLink ? experience.companyLink : "#"} target='_blank'>
                      {experience.company}
                    </a>
                  ) : (
                    <span>{experience.company}</span>
                  )}
                </CompanyLinkContainer>
                {index < experiences.length - 1 && <span />}
              </ExperienceTimeLine>
              <ExperienceCard>
                <SubTitle>{experience.position}</SubTitle>
                <Paragraph>{experience.description}</Paragraph>
              </ExperienceCard>
            </ExperienceCardContainer>
          ) : (
            <ExperienceCardContainer key={experience.id}>
              <ExperienceCard>
                <SubTitle>{experience.position}</SubTitle>
                <Paragraph>{experience.description}</Paragraph>
              </ExperienceCard>
              <ExperienceTimeLine $direction='right'>
                <CompanyLinkContainer
                  $isOpen={isOpen}
                  onClick={handleClick}
                  $date={experience.date}
                  $direction='right'
                  $companyName={experience.company}
                  style={{ backgroundImage: `url(${experience.companyLogo})` }}>
                  {experience.companyLink ? (
                    <a href={experience.companyLink ? experience.companyLink : "#"} target='_blank'>
                      {experience.company}
                    </a>
                  ) : (
                    <span>{experience.company}</span>
                  )}
                </CompanyLinkContainer>
                {index < experiences.length - 1 && <span />}
              </ExperienceTimeLine>
              <ExperienceSpace />
            </ExperienceCardContainer>
          )
        )
      )}
    </ExperienceListContainer>
  );
};

export default ExperienceList;
