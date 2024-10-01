import styled from "styled-components";

export const ProyectRadioSelectCategory = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.background.greyLight};
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;
  max-width: 450px;
  font-size: 14px;
`;

export const CategoryRadio = styled.label`
  flex: 1 1 auto;
  text-align: center;
`;

export const CategoryInput = styled.input`
  display: none;
`;

interface CategoryNameProps {
  $checked: boolean;
}

export const CategoryName = styled.span<CategoryNameProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem 0;
  color: ${(props) => props.theme.text.grey};
  transition: all 0.15s ease-in-out;
  background-color: ${(props) => (props.$checked ? props.theme.background.grey : "transparent")};
  font-weight: ${(props) => (props.$checked ? "600" : "normal")};
  transition: 0.3s;
`;
