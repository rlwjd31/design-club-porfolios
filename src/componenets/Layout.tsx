import { ReactNode, useContext } from "react";
import styled from "styled-components";
import GNB from "./GNB";
import { commonStyle } from "../styles/GlobalStyle";
import Modal from "../componenets/Modal";
import { ModalContext } from "../App";

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
  const { isOpen } = useContext(ModalContext);
  return (
    <>
      <GNB />
      <Main>{children}</Main>
      {isOpen && <Modal />}
    </>
  );
}
