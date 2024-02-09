import { useEffect, useState } from "react";

type MousePos = {
  x: number;
  y: number;
};

export default function useMouseFollow() {
  const [mousePos, setMousePos] = useState<MousePos>({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) =>
      setMousePos((prev) => ({ ...prev, x: event.clientX, y: event.clientY }));

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return mousePos;
}
