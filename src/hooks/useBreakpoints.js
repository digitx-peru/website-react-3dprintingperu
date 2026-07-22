import { useEffect, useState } from "react";
import { BREAKPOINTS } from "./breakpoints";

function getMatches() {
  return {
    isTablet: window.innerWidth >= BREAKPOINTS.md,
    isDesktop: window.innerWidth >= BREAKPOINTS.lg,
    isLargeTablet: window.innerWidth >= BREAKPOINTS.xl,
    isWideScreen: window.innerWidth >= BREAKPOINTS.xxl,
  };
}

export default function useBreakpoints() {
  const [matches, setMatches] = useState(getMatches);

  useEffect(() => {
    const handler = () => setMatches(getMatches());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return matches; // { isMd, isLg, isXl }
}