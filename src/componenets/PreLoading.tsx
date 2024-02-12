import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import styled from "styled-components";

type Props = {
  stopPreloading: () => void;
};

const PreloadingContainer = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 200;
`;

const squareCount = 8;

const Square = styled.div`
  width: calc(100% / ${squareCount});
  background-color: black;
`;

export default function PreLoading({ stopPreloading }: Props) {
  const containerRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          console.log("animation completed!!");
          stopPreloading();
        },
      });

      if (containerRef.current) {
        tl.to(".square", {
          yPercent: "-100",
          duration: 1,
          ease: "power3.inOut",
          stagger: 0.2,
        }).to(containerRef.current, {
          yPercent: "-100",
          duration: 0.8,
          ease: "power3.inOut",
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <PreloadingContainer ref={containerRef}>
      {Array(squareCount)
        .fill(null)
        .map((_, index) => (
          <Square className="square" key={index} />
        ))}
    </PreloadingContainer>
  );
}
