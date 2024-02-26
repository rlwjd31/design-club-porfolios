import styled from "styled-components";

import { commonStyle } from "../styles/GlobalStyle";
import { Link } from "react-router-dom";

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
  font-size: ${commonStyle.fontSize.x};
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

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
      <HomeButton to="/">FORTUNE EGG</HomeButton>
    </Container>
  );
}
