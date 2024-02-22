import { useContext, useState } from "react";
import styled from "styled-components";

import useMouseFollow from "../hooks/useMouseFollow";
import useLoopImage from "../hooks/useLoopImage";

import { ModalContext } from "../App";
import imagePaths from "../constants/images";
import Modal from "./Modal";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 68.75rem;
  height: 100%;
  transform: translateY(-4rem);
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

const intervalTime = 100;
const mouseFollowerOffset = { x: 15, y: 15 };

function Images() {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isMouseInImage, setIsMouseInImage] = useState<boolean>(false);
  const { x: mousePosX, y: mousePosY } = useMouseFollow();
  const { modalOpen, selectImage } = useContext(ModalContext);
  const { isOpen } = useContext(ModalContext);

  const { stop, restart } = useLoopImage(
    () => setCurrentImage((prev) => (prev + 1) % imagePaths.length),
    intervalTime
  );

  return (
    <>
      <ImageContainer>
        <div
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
        </div>
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
      {isOpen && <Modal restart={restart} />}
    </>
  );
}

export default Images;
