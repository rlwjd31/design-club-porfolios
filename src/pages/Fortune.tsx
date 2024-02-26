import styled from "styled-components";
import ReactPlayer from "react-player";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image340 from "/assets/images/detail340.png";
import image650 from "/assets/images/detail650.png";
import testVideo from "/assets/videos/sample-video.mp4";
import { commonStyle } from "../styles/GlobalStyle";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type ImageProps = {
  width?: string;
  height?: string;
};

type ColumnProps = {
  padding?: string;
  backgroundColor?: string;
};

type SectionProps = {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string | number;
  backgroundColor?: string;
};

type H1Props = {
  textAlign?: string;
  color?: string;
};

type H4Props = {
  padding?: string;
  borderBottom?: string;
  fontSize?: string;
};

const Main = styled.main`
  width: 100%;
  padding: 3.125rem;

  // ! scroll with snap setting */
  height: 100vh;

  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-padding-top: 4rem;
`;

const Section = styled.section<SectionProps>`
  width: 100%;
  display: flex;
  background-color: ${(props) => props.backgroundColor ?? "none"};
  flex-direction: ${(props) => props.flexDirection ?? "row"};
  justify-content: ${(props) => props.justifyContent ?? "center"};
  align-items: ${(props) => props.alignItems ?? "center"};
  gap: ${(props) => props.gap ?? "0px"};
  height: 100vh;
  max-height: 100vh;

  /* ! scroll with snap setting */
  scroll-snap-align: center;
  margin-top: 10rem;
  &:first-child {
    margin-top: 1rem;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img<ImageProps>`
  object-fit: cover;
  width: ${(props) => props.width ?? "100%"};
  height: ${(props) => props.height ?? "auto"};
`;

const SmallImage = styled(Image)`
  max-width: 17rem;
`;

const MainImage = styled(Image)`
  max-width: 40rem;
`;

const VideoWrapper = styled.div`
  width: 100%;
`;

const H1 = styled.h1<H1Props>`
  color: ${(props) => props.color ?? "black"};
  font-size: ${commonStyle.fontSize.xxxl};
  text-align: ${(props) => props.textAlign ?? "start"};
  width: 100%;
  padding: 6rem;
  padding-left: 0;

  &:lang(en) {
    font-family: "Neue Haas Grotesk Display Pro";
  }
`;

const H2 = styled.h2`
  font-size: 3.5rem;
  margin-top: 2.75rem;
  max-width: 31.4rem;
  width: 100%;
  text-align: start;
  line-height: 1.3;
  font-weight: 600;

  &:lang(en) {
    font-family: "Neue Haas Grotesk Display Pro";
  }
`;

const H3 = styled.h3`
  font-size: 36px;
  font-weight: 600;
  padding: 2rem 0;
  border-bottom: 1.5px solid black;
  width: 100%;
`;

const H4 = styled.h4<H4Props>`
  font-size: ${(props) => props.fontSize ?? "1.5rem"};
  font-weight: 600;
  width: 100%;

  &:lang(en) {
    font-family: "Neue Haas Grotesk Display Pro";
  }
`;

const Column = styled.div<ColumnProps>`
  background-color: ${(props) => props.backgroundColor ?? "white"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 3.75rem;
`;

const Row = styled(Column)`
  justify-content: flex-start;
  align-items: flex-start;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: flex-start;
  gap: 1.25rem;
`;

const Button = styled.button`
  border: 2px solid black;
  padding: 0.8rem 1.6rem;
  background-color: white;
  border-radius: 20px;
  margin-top: 2.75rem;
  font-weight: 600;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1.25rem;
`;

const Li = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 1.375rem 0;
  width: 100%;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 22px;
  flex-basis: 20%;
  line-height: 1.6;

  &:lang(en) {
    font-family: "Neue Haas Grotesk Display Pro";
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  flex-basis: 80%;
  line-height: 1.6;
`;

export default function Fortune() {
  return (
    <Main>
      <Section flexDirection="column" justifyContent="space-between">
        <H1 lang="en">
          <span>
            (TODAY ’S <br />
            DAILY FORTUNE
          </span>
          )
        </H1>
        <LogoContainer>
          <SmallImage src={image340} />
        </LogoContainer>
      </Section>
      <Section>
        <Column backgroundColor="#f7f7f7">
          <MainImage src={image650} />
        </Column>
        <Column>
          <Row>
            <H4 lang="en">TODAY ’S BROKEN EGG</H4>
            <H2>가정과 일의 경계에서 균형을 유지하라</H2>
            <ButtonContainer>
              <Button>경계</Button>
              <Button>가정</Button>
              <Button>균형</Button>
            </ButtonContainer>
          </Row>
          <Row>
            <H3>비지맨</H3>
            <Ul>
              <Li>
                <Label lang="en" htmlFor="type">
                  TYPE
                </Label>
                <Paragraph>워커홀릭</Paragraph>
              </Li>
              <Li>
                <Label lang="en" htmlFor="favorite">
                  FAVORITE
                </Label>
                <Paragraph>일하기</Paragraph>
              </Li>
              <Li>
                <Label lang="en" htmlFor="feature">
                  FEATURE
                </Label>
                <Paragraph>
                  일을 대신 해주는 아이. 나의 일을 가지고 가서 후딱 처리해
                  버린다. 해야하는 벅찬 일들이 줄어들어 가정에 집중할 수 있게
                  됨.
                </Paragraph>
              </Li>
            </Ul>
          </Row>
        </Column>
      </Section>
      <Section>
        <VideoWrapper>
          <ReactPlayer
            width="100%"
            height="100%"
            loop={true}
            playing={true}
            muted={true}
            url={testVideo}
            controls
          />
        </VideoWrapper>
      </Section>
      <Section backgroundColor="black">
        <H1 lang="en" color="white" textAlign="center">
          TAKE A PAPER FORTUNE
        </H1>
      </Section>
    </Main>
  );
}

// https://webdevpuneet.com/horizontal-snapping-sections-simple-scrolltrigger/#gsc.tab=0
