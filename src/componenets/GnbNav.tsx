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
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
  z-index: 100;
  background-color: white;
`;

const ChevronLeftIcon = styled(ChevronLeft)`
  width: 3rem;
  height: 3rem;
  transform: translateY(-0.2rem);
`;

const Span = styled.span`
  font-size: ${commonStyle.fontSize.x};
  text-transform: uppercase;
  vertical-align: middle;

  &:lang(en) {
    font-family: "Neue Haas Grotesk Display Pro";
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
    <Container>
      <BackNav to="/" lang="en">
        <ChevronLeftIcon />
        <Span>back</Span>
      </BackNav>
      <Span lang="en">FORTUNE EGG</Span>
    </Container>
  );
}
