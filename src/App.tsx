import { ThemeProvider } from "styled-components";
import "./App.css";
import { darkTheme, lightTheme } from "./utils";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContainer, GlobalStyle } from "./styled-components";
import { Home } from "./pages";
import { NavBarMobile, SideBar } from "./components";
import { useState } from "react";
import CursorProvider from "./context/CursorContext";
import { useMediaQuery } from "react-responsive";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const themeToggle = (darkDetect: boolean) => {
    darkDetect ? setTheme(darkTheme) : setTheme(lightTheme);
  };

  // Verifica si el dispositivo es móvil
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <CursorProvider>
          <AppContainer>
            {isMobile ? (
              <NavBarMobile themeToggle={themeToggle} />
            ) : (
              <SideBar themeToggle={themeToggle} />
            )}

            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </AppContainer>
        </CursorProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
