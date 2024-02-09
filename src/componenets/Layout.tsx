import { ReactNode } from "react";
import styled from "styled-components";
import GNB from "./GNB";
import { commonStyle } from "../styles/GlobalStyle";

type Props = {
  children: ReactNode;
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: ${commonStyle.padding.main} 160px;
  position: relative;
`;

export default function Layout({ children }: Props) {
  return (
    <>
      <GNB />
      <Main>{children}</Main>
    </>
  );
}

