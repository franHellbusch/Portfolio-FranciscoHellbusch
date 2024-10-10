import React, { PropsWithChildren, useEffect, useState } from "react";
import { PageContainerContent, PageLoader, PageLoaderContainer } from "./styled-components";
import { PageContainer } from "@/styled-components";

interface IPageWithLoadingProps extends PropsWithChildren {
  $centered?: boolean;
}

const PageWithLoading: React.FC<IPageWithLoadingProps> = ({ children, $centered = false }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    // Usar el evento DOMContentLoaded
    window.addEventListener("DOMContentLoaded", handleLoad);

    // Fallback: asegurarse de que el loader desaparezca tras 5 segundos
    const timer = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      window.removeEventListener("DOMContentLoaded", handleLoad);
      clearTimeout(timer); // Limpiar el temporizador si se desmonta el componente
    };
  }, []);

  return (
    <PageContainer $centered={$centered}>
      <PageLoaderContainer $isLoading={isLoading}>
        <PageLoader />
      </PageLoaderContainer>
      <PageContainerContent $centered={$centered}>{children}</PageContainerContent>
    </PageContainer>
  );
};

export default PageWithLoading;
