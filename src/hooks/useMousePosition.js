
import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = e => {
    try {
      if (!e.clientX || !e.clientY) {
        throw new Error("Invalid mouse event");
      }
      setMousePosition({ x: e.clientX, y: e.clientY });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;