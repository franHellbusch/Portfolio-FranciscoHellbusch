import styled from "styled-components";

interface ProjectRadioSelectCategoryProps {
  $loading: boolean;
}

export const ProjectRadioSelectCategory = styled.div<ProjectRadioSelectCategoryProps>`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.background.greyLight};
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 5px;
  overflow-x: auto; /* Habilita el scroll horizontal */
  gap: 5px; /* Añadir un espacio entre categorías */
  max-width: 100%; /* Asegúrate de que no exceda el ancho del contenedor padre */
  white-space: nowrap; /* Evita que las categorías se envuelvan en múltiples líneas */
  opacity: ${(props) => (props.$loading ? "0.5" : "1")};

  /* Opcional: estilizar el scrollbar */
  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.background.grey};
    border-radius: 10px;
    transition: background 0.3s;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const CategoryRadio = styled.label`
  flex-shrink: 0; /* Asegura que el elemento no se reduzca */
  width: 100px; /* Fija el ancho de cada categoría */
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
  padding: 8px 0;
  color: ${(props) => props.theme.text.grey};
  background-color: ${(props) => (props.$checked ? props.theme.background.grey : "transparent")};
  font-weight: ${(props) => (props.$checked ? "600" : "normal")};
  transition: 0.3s;
  font-size: 14px;

  @media (max-width: 767px) {
    font-size: 13px;
  }
`;
