import { useEffect, useRef } from "react";

export default function useLoopImage(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: (...args: any[]) => any,
  speed: number
) {
  const currentTimeRef = useRef<DOMHighResTimeStamp>(0); // ! initial value "0" then typescript infer the type ref can't be change!!
  const previousTimeRef = useRef<DOMHighResTimeStamp>(0);

  const loopImages = (currentTime: DOMHighResTimeStamp) => {
    if (currentTimeRef.current) {
      const deltaTime = currentTime - previousTimeRef.current;

      // * speed가 200이면 1초에 200번 실행
      if (deltaTime >= speed) {
        callback();
        previousTimeRef.current = currentTime;
      }
    }

    currentTimeRef.current = requestAnimationFrame(loopImages);
  };

  useEffect(() => {
    const timestamp = requestAnimationFrame(loopImages);

    return () => cancelAnimationFrame(timestamp);
  }, []);
}
