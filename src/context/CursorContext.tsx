import { Cursor, CursorFollower } from "@/styled-components/elements/Cursor";
import React, { createContext, useEffect, useState, ReactNode, useRef } from "react";
import { useMediaQuery } from "react-responsive";

interface CursorContextType {}

export const CursorContext = createContext<CursorContextType>({});

interface CursorProviderProps {
  children: ReactNode;
}

const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [followerStyle, setFollowerStyle] = useState({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();

  // Verifica si el dispositivo es móvil
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    if (isMobile) return; // No agregar listeners en móviles

    const onMouseMove = (event: MouseEvent) => {
      setCursorPos({ x: event.pageX, y: event.pageY });
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return; // No mover el cursor en móviles

    const moveFollower = () => {
      const dx = cursorPos.x - followerPos.current.x;
      const dy = cursorPos.y - followerPos.current.y;

      followerPos.current.x += dx * 0.1;
      followerPos.current.y += dy * 0.1;

      setFollowerStyle({ x: followerPos.current.x, y: followerPos.current.y });

      animationFrameId.current = requestAnimationFrame(moveFollower);
    };

    moveFollower();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [cursorPos, isMobile]);

  if (isMobile) return <>{children}</>; // Renderizar solo los hijos en móviles

  return (
    <CursorContext.Provider value={{}}>
      <Cursor style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }} />
      <CursorFollower
        style={{ left: `${followerStyle.x + 4}px`, top: `${followerStyle.y + 4}px` }}
      />
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
