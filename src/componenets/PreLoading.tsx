import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import styled from "styled-components";
import LogoSVG from "../../public/assets/icons/preloading-logo.svg?react";
import EggSVG from "../../public/assets/icons/preloading-egg.svg?react";

type Props = {
  stopPreloading: () => void;
};

const PreloadingContainer = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  overflow: hidden;
`;

const LoadingContainer = styled.p`
  color: white;
  font-size: 24px;
  position: absolute;
  height: 10vh;
  bottom: 5%;
  left: 50%;
  transform: translateX(-42%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & > svg {
    transform: translateY(3px);
    margin-left: 0.625rem;
  }

  & > svg:first-of-type {
    margin-left: 1.2rem;
  }
`;

export default function PreLoading({ stopPreloading }: Props) {
  const containerRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          console.log("animation completed!!");
          stopPreloading();
          containerRef.current!.style.visibility = "hidden";
        },
      });
      const createEggBounce = () =>
        gsap.utils
          .toArray<GSAPTweenTarget[]>(".loading .egg")
          .forEach((egg, index) => {
            gsap.set(".loading", { opacity: 1 });
            gsap.from(egg, {
              y: -10,
              duration: 0.6,
              ease: "circ.inout",
              repeat: -1,
              yoyo: true,
              delay: index * 0.1,
            });
          });

      if (containerRef.current) {
        tl.add(createEggBounce)
          .from(".logo", {
            delay: 1,
            yPercent: 102,
            ease: "power4.out",
            duration: 1.2,
          })
          .to(containerRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: "power2.in",
          });
      }
    },
    { scope: containerRef }
  );

  return (
    <PreloadingContainer ref={containerRef}>
      <LogoContainer>
        <LogoSVG className="logo" />
      </LogoContainer>
      <LoadingContainer className="loading" lang="en">
        <span>Loading</span>
        <EggSVG className="egg" />
        <EggSVG className="egg" />
        <EggSVG className="egg" />
      </LoadingContainer>
    </PreloadingContainer>
  );
}
