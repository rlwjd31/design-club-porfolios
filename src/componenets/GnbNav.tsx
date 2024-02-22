import styled from "styled-components";

import ChevronLeft from "../../public/assets/icons/chevron-left.svg?react";
import { commonStyle } from "../styles/GlobalStyle";
import { Link } from "react-router-dom";

const Container = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: ${commonStyle.padding.main};
  align-items: center;
  z-index: 100;
`;

const HomeButton = styled(Link)`
  font-size: ${commonStyle.fontSize.x};
  text-transform: uppercase;
  text-decoration: none;

  &:lang(en) {
    font-family: "Neue Haas Grotesk Display Pro";
  }

  &:link,
  &:visited {
    color: inherit;
  }
`;

const BackNav = styled(Link)`
  display: flex;
  align-items: center;
  background-color: white;
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
  color: black;
`;

export default function GnbNav() {
  return (
    <Container lang="en">
      <HomeButton to="/">FORTUNE EGG</HomeButton>
    </Container>
  );
}
