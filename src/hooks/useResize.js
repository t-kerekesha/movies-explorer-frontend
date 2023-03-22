import { useEffect, useState } from "react";
import { SCREEN_LARGE, SCREEN_MEDIUM, SCREEN_SMALL } from "../utils/constants";

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };

    window.addEventListener('resize', (event) => {
      setTimeout(() => {
        handleResize(event);
      }, 200);
    });
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenSmall: width >= SCREEN_SMALL,
    isScreenMedium: width >= SCREEN_MEDIUM,
    isScreenLarge: width >= SCREEN_LARGE,
  };
};