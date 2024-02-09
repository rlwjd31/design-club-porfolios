import styled from "styled-components";
import { commonStyle } from "../styles/GlobalStyle";

const MainPageHeader = styled.header`
  position: absolute;
  font-weight: 600;
  font-size: 2.5rem;
  z-index: 1;
`;

const InfoHeader = styled(MainPageHeader)`
  top: ${commonStyle.padding.main};
  left: ${commonStyle.padding.main};
`;

const FortunePageHeader = styled(MainPageHeader)`
  bottom: ${commonStyle.padding.main};
  right: ${commonStyle.padding.main};
`;

export default function GNB() {
  return (
    <>
      <InfoHeader>Info</InfoHeader>
      <FortunePageHeader>FORTUNE EGG</FortunePageHeader>
    </>
  );
}
