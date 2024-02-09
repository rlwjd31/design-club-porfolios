import styled, { css } from "styled-components";
import Layout from "../componenets/Layout";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import { useEffect, useRef, useState } from "react";

const textOutline = css`
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: black;
`;

type ImageProps = {
  something: string;
};

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-family: "Neue Haas Grotesk";
  font-size: 4.625rem;
  font-weight: 600;
  width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 68.75rem;
  margin-top: 5.625rem;
`;

const Image = styled.img<ImageProps>`
  object-fit: cover;
  width: 100%;
  min-width: 37.5rem;
  height: 46.875rem;
`;

const intervalTime = 100;
const images = [image1, image2, image3, image4, image5];
// const images = [image1, image2, image3];

export default function Home() {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const timeRef = useRef<DOMHighResTimeStamp>(0); // ! initial value "0" then typescript infer the type ref can't be change!!
  const previousTimeRef = useRef<DOMHighResTimeStamp>(0);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const loopImages = (time: DOMHighResTimeStamp) => {
    if (timeRef.current) {
      const deltaTime = time - previousTimeRef.current;
      if (deltaTime >= intervalTime) {
        setCurrentImage((prev) => (prev + 1) % images.length);
        previousTimeRef.current = time;
      }
    }

    timeRef.current = requestAnimationFrame(loopImages);
  };

  useEffect(() => {
    timeRef.current = requestAnimationFrame(loopImages);

    return () => cancelAnimationFrame(timeRef.current);
  }, []);
  // ! =========================================================
  // ! ============ not apply requestAnimationFrame ============
  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setCurrentImage((prev) => (prev + 1) % images.length);

  //     return () => clearTimeout(timeoutId);
  //   }, intervalTime);
  // }, [currentImage]);
  // ! =========================================================

  return (
    <>
      <H1 lang="en">CLICK YOUR FORTUNE!</H1>
      <ImageContainer>
        <Image src={images[currentImage]} something="hi" />
        <img />
      </ImageContainer>
    </>
  );
}
