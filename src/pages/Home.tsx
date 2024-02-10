import styled from "styled-components";
import Images from "../componenets/Images";

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-family: "Neue Haas Grotesk Display Pro";
  font-size: 6.563rem;
  font-weight: 600;
  width: 100%;

  &:lang(en) {
    font-family: "Neue Haas Grotesk Display Pro";
  }
`;

export default function Home() {
  return (
    <>
      <H1 lang="en">CLICK YOUR FORTUNE!</H1>
      <Images />
    </>
  );
}
