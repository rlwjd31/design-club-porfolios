import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { commonStyle } from "../styles/GlobalStyle";
import HeaderLogoSVG from "../../public/assets/icons/header-logo.svg?react";
import ChevRonLeft from "../../public/assets/icons/chevron-left.svg?react";

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
  font-size: 40px;
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

const H1 = styled.h1`
  font-size: 56px;
  font-weight: 600;
  display: flex;
  padding-bottom: 2.25rem;
  border-bottom: 3px solid black;
  &:lang(en) {
    font-family: "Neue Haas Grotesk Display Pro";
  }
`;

const NavigateBack = styled(ChevRonLeft)`
  cursor: pointer;
  width: 4rem;
  height: 3rem;
  stroke-width: 2rem;
  transform: translateX(-40%);
`;

export default function GnbNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onClickGoBack = () => navigate(-1);

  return (
    <Container lang="en" className="navbar">
      {pathname === "/about" && (
        <H1 lang="en">
          <NavigateBack onClick={onClickGoBack} /> About
        </H1>
      )}
      {pathname.includes("/fortune") && (
        <HomeButton to="/">
          <HeaderLogoSVG style={{ width: "17rem", paddingTop: "2rem" }} />
        </HomeButton>
      )}
    </Container>
  );
}
