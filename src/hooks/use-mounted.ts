import { useEffect, useState } from "react";

// Returns false during SSR and the first client render, true after mount.
// Used to gate decorative framer-motion SVG animations that set attribute
// keyframes (cx/cy/r/y1) which break under SSR hydration.
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
