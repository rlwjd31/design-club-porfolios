import styled from "styled-components";
import { Link } from "react-router-dom";

import { commonStyle } from "../styles/GlobalStyle";
import HeaderLogoSVG from "../../public/assets/icons/header-logo.svg?react";

const Container = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: ${commonStyle.padding.main};
  align-items: center;
  z-index: 1;
`;

const HomeButton = styled(Link)`
  /* font-size: calc(${commonStyle.fontSize.x} + 2.5px); */
  font-size: 40px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  mix-blend-mode: difference;
  /* -webkit-text-stroke: 2px white; */
  will-change: transform;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
  -webkit-text-fill-color: white;

  /* background-color: white; */

  &:lang(en) {
    font-family: "Neue Haas Grotesk Display Pro";
  }

  &:link,
  &:visited {
    color: inherit;
  }
`;

export default function GnbNav() {
  return (
    <Container lang="en" className="navbar">
      <HomeButton to="/">
        <HeaderLogoSVG style={{ width: "17rem" }} />
      </HomeButton>
    </Container>
  );
}
