import { ReactNode, useState } from "react";
import styled from "styled-components";
import GNB from "./GNB";
import { commonStyle } from "../styles/GlobalStyle";
import PreLoading from "./PreLoading";

type Props = {
  children: ReactNode;
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-top: ${commonStyle.padding.main};
  position: relative;
`;

export default function Layout({ children }: Props) {
  const [isPreloading, setIsPreloading] = useState<boolean>(true);

  const stopPreloading = () => setIsPreloading(false);

  return (
    <>
      {isPreloading && <PreLoading stopPreloading={stopPreloading} />}
      <GNB />
      <Main>{children}</Main>
    </>
  );
}
