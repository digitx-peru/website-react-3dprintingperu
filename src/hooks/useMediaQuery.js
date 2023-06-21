import { useEffect, useState } from "react";

export default function useMediaQuery(maxWidth) {
  //width State
  const [widthState, setWidthState] = useState({
    windowWidth: window.innerWidth,
    isDesiredWidth: false,
  });

  useEffect(() => {
    const resizeHandler = () => {
      const currentWindowWidth = window.innerWidth;
      const isDesiredWidth = currentWindowWidth < maxWidth;
      setWidthState({ windowWidth: currentWindowWidth, isDesiredWidth });
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [widthState.windowWidth]);

  return widthState.isDesiredWidth;
}
