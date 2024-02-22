import styled from "styled-components";
import Images from "../componenets/Images";
import { commonStyle } from "../styles/GlobalStyle";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const H1 = styled.h1`
  text-align: center;
  font-family: "Neue Haas Grotesk Display Pro";
  font-size: ${commonStyle.fontSize.xxl};
  font-weight: 600;
  width: 100%;

  &:lang(en) {
    font-family: "Neue Haas Grotesk Display Pro";
  }
`;

export default function Home() {
  return (
    <Container>
      <H1 lang="en">CLICK YOUR FORTUNE!</H1>
      <Images />
    </Container>
  );
}
