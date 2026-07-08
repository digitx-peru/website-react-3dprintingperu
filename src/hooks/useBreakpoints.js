import { useEffect, useState } from "react";
import { BREAKPOINTS } from "./breakpoints";

function getMatches() {
  return {
    isMd: window.innerWidth >= BREAKPOINTS.md,
    isLg: window.innerWidth >= BREAKPOINTS.lg,
    isXl: window.innerWidth >= BREAKPOINTS.xl,
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