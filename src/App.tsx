import { ThemeProvider } from "styled-components";
import "./App.css";
import { darkTheme, lightTheme } from "./utils";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContainer, GlobalStyle, PageContainer } from "./styled-components";
import { NavBarMobile, SideBar } from "./components";
import { lazy, Suspense, useState } from "react";
import CursorProvider from "./context/CursorContext";
import { useMediaQuery } from "react-responsive";

const Education = lazy(() => import("./pages/Education/Education"));
const Home = lazy(() => import("./pages/Home/Home"));
const Proyects = lazy(() => import("./pages/Proyects/Proyects"));
const Work = lazy(() => import("./pages/Work/Work"));

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
            <Suspense fallback={<PageContainer />}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/work' element={<Work />} />
                <Route path='/education' element={<Education />} />
                <Route path='/proyects' element={<Proyects />} />
              </Routes>
            </Suspense>
          </AppContainer>
        </CursorProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
