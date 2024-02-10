import { useContext, useState } from "react";
import styled from "styled-components";

import useMouseFollow from "../hooks/useMouseFollow";
import useLoopImage from "../hooks/useLoopImage";

import { ModalContext } from "../App";
import imagePaths from "../constants/images";

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

const intervalTime = 150;
const mouseFollowerOffset = { x: 15, y: 15 };

function Images() {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isMouseInImage, setIsMouseInImage] = useState<boolean>(false);
  const { x: mousePosX, y: mousePosY } = useMouseFollow();
  const { modalOpen, selectImage } = useContext(ModalContext);

  const { stop } = useLoopImage(
    () => setCurrentImage((prev) => (prev + 1) % imagePaths.length),
    intervalTime
  );
  return (
    <>
      <ImageContainer
        onMouseEnter={() => setIsMouseInImage(true)}
        onMouseLeave={() => setIsMouseInImage(false)}
      >
        <Image
          onClick={() => {
            stop();
            modalOpen();
            selectImage(imagePaths[currentImage]);
          }}
          src={imagePaths[currentImage]}
        />
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
