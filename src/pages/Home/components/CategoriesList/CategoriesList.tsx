import React from "react";
import { CategoriesListContainer, CategoryCard } from "./styled-components";
import developmentIcon from "../../assets/icons/development-icon.png";
import workIcon from "../../assets/icons/work-icon.png";
import educationIcon from "../../assets/icons/education-icon.png";
import contactIcon from "../../assets/icons/contact-icon.png";

const CategoriesList: React.FC = () => {
  return (
    <CategoriesListContainer>
      <CategoryCard to='/work'>
        <img src={workIcon} alt='Work Icon' />
        <h3>Work</h3>
        <p>Discover my professional experience and the skills I've developed.</p>
      </CategoryCard>
      <CategoryCard to='/education'>
        <img src={educationIcon} alt='Education Icon' />
        <h3>Education</h3>
        <p>Learn about my academic background and completed courses.</p>
      </CategoryCard>
      <CategoryCard to='/proyects'>
        <img src={developmentIcon} alt='Development Icon' />
        <h3>Proyects</h3>
        <p>Explore the projects I've worked on and my portfolio.</p>
      </CategoryCard>
      <CategoryCard to='/contact'>
        <img src={contactIcon} alt='Contact Icon' />
        <h3>Contact</h3>
        <p>Get in touch for more information or collaboration opportunities.</p>
      </CategoryCard>
    </CategoriesListContainer>
  );
};

export default CategoriesList;
