import styled from "styled-components";
import { commonStyle } from "../styles/GlobalStyle";

const MainPageHeader = styled.header`
  position: absolute;
  font-weight: 600;
  font-size: ${commonStyle.fontSize.x};
  z-index: 1;

  &:lang(en) {
    font-family: "Neue Haas Grotesk Display Pro";
  }
`;

const InfoHeader = styled(MainPageHeader)`
  top: ${commonStyle.padding.main};
  left: ${commonStyle.padding.main};
  border-bottom: 4px solid black;
  padding-bottom: 5px;
`;

const FortunePageHeader = styled(MainPageHeader)`
  bottom: ${commonStyle.padding.main};
  right: ${commonStyle.padding.main};
`;

export default function GNB() {
  return (
    <>
      <InfoHeader lang="en">Info</InfoHeader>
      <FortunePageHeader lang="en">FORTUNE EGG</FortunePageHeader>
    </>
  );
}
