import styled from "styled-components";

interface SectionDescriptionProps {
  $titleFontSize?: string;
  $titleColor?: string;
  $paragraphFontSize?: string;
  $paragraphColor?: string;
}

export const SectionDescription = styled.div<SectionDescriptionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  margin: 40px 0;

  h2 {
    font-size: ${(props) => props.$titleFontSize || "28px"};
    color: ${(props) => props.$titleColor || props.theme.text.dark};
    line-height: 23px;
  }

  p {
    font-size: ${(props) => props.$paragraphFontSize || "15px"};
    color: ${(props) => props.$paragraphColor || props.theme.text.light};
    line-height: 23px;
    max-width: 700px;
  }

  @media (max-width: 1200px) {
    margin: 40px 0;

    h2 {
      font-size: ${(props) => props.$titleFontSize || "26px"};
      line-height: 20px;
    }

    p {
      font-size: ${(props) => props.$paragraphFontSize || "14px"};
      line-height: 20px;
      max-width: 600px;
    }
  }
`;
