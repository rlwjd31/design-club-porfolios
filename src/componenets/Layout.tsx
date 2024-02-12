import { ReactNode, useContext, useState } from "react";
import styled from "styled-components";
import GNB from "./GNB";
import { commonStyle } from "../styles/GlobalStyle";
import Modal from "../componenets/Modal";
import { ModalContext } from "../App";
import PreLoading from "./PreLoading";

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
  const [isPreloading, setIsPreloading] = useState<boolean>(true);
  const { isOpen } = useContext(ModalContext);


  const stopPreloading = () => setIsPreloading(false);

  return (
    <>
      {isPreloading ? (
        <PreLoading stopPreloading={stopPreloading} />
      ) : (
        <>
          <GNB />
          <Main>{children}</Main>
        </>
      )}
      {isOpen && <Modal />}
    </>
  );
}
