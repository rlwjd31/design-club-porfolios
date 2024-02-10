import { useState } from "react";
import useLoopImage from "../hooks/useLoopImage";
import useMouseFollow from "../hooks/useMouseFollow";
import styled from "styled-components";

import image1 from "/assets/images/image1.jpg";
import image2 from "/assets/images/image2.jpg";
import image3 from "/assets/images/image3.jpg";
import image4 from "/assets/images/image4.jpg";
import image5 from "/assets/images/image5.jpg";

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 68.75rem;
  margin-top: 5.625rem;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  min-width: 37.5rem;
  height: 46.875rem;
  cursor: pointer;
`;

const MouseFollower = styled.span<{ mousePosX: string; mousePosY: string }>`
  will-change: transform;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(
    ${(props) => props.mousePosX},
    ${(props) => props.mousePosY}
  );
  font-size: 2rem;
  -webkit-text-stroke: 2px black;
  color: white;
  text-transform: uppercase;
  font-weight: 900;
  pointer-events: none;
  transition: all 0.2s ease-out;
  &:lang(en) {
    font-family: "Neue Haas Grotesk Display Pro";
  }
`;

const intervalTime = 500;
const mouseFollowerOffset = { x: 15, y: 15 };
const images: string[] = [image1, image2, image3, image4, image5];

function Images() {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isMouseInImage, setIsMouseInImage] = useState<boolean>(false);

  const { x: mousePosX, y: mousePosY } = useMouseFollow();

  const { stop } = useLoopImage(
    () => setCurrentImage((prev) => (prev + 1) % images.length),
    intervalTime
  );
  return (
    <>
      <ImageContainer
        onMouseEnter={() => setIsMouseInImage(true)}
        onMouseLeave={() => setIsMouseInImage(false)}
      >
        <Image onClick={() => stop()} src={images[currentImage]} />
      </ImageContainer>
      {isMouseInImage && (
        <MouseFollower
          lang="en"
          mousePosX={`${mousePosX + mouseFollowerOffset.x}px`}
          mousePosY={`${mousePosY + mouseFollowerOffset.y}px`}
        >
          click
        </MouseFollower>
      )}
    </>
  );
}

export default Images;
