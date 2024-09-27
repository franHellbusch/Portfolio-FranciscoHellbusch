import styled from "styled-components";

export const EducationCardTechnologies = styled.div`
  display: flex;
  gap: 10px;
`;

interface EducationTechProps {
  $fontColor: string;
  $backgroundColor: string;
}

export const EducationTech = styled.span<EducationTechProps>`
  background: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$fontColor};
  font-weight: 600;
  border-radius: 15px;
  padding: 5px 10px;
  font-size: 14px;
`;
