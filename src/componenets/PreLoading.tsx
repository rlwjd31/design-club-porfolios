import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import styled from "styled-components";
import { commonStyle } from "../styles/GlobalStyle";

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

const squareCount = 11;

const Square = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% / ${squareCount});
  background-color: black;
`;

const Span = styled.span`
  color: white;
  font-size: ${commonStyle.fontSize.xxl};
`;

const loadingText = "Loading";

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
          <Square className="square" key={index}>
            <Span>{index >= 2 ? loadingText[index - 2] ?? "" : ""}</Span>
          </Square>
        ))}
    </PreloadingContainer>
  );
}
