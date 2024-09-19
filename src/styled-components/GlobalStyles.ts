import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Nunito", sans-serif;
    transition: background 0.3s, color 0.3s;
    cursor: none; /* Esto oculta el cursor en todo el documento */
  }
`;
