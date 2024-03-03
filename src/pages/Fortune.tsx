import styled from "styled-components";
import ReactPlayer from "react-player";

import { commonStyle } from "../styles/GlobalStyle";
import { useParams } from "react-router-dom";
import fortuneContents from "../constants/fortuneContent";

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
  paddingLeft?: string;
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
  max-height: 95vh;

  /* ! scroll with snap setting */
  scroll-snap-align: start;

  &:last-child {
    width: 100vw;
    transform: translateX(-${commonStyle.padding.main});
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
  position: relative;
  top: -100px;
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
  padding: 4rem;
  padding-left: ${(props) => props.paddingLeft ?? "4rem"};

  &:lang(en) {
    font-family: "Neue Haas Grotesk Display Pro";
  }
`;

const H2 = styled.h2`
  font-size: 3.5rem;
  margin-top: 2.75rem;
  /* max-width: 31.4rem; */
  width: 100%;
  text-align: start;
  line-height: 1.3;
  font-weight: 600;
  word-break: keep-all;
  white-space: pre-wrap;

  &:lang(en) {
    font-family: "Neue Haas Grotesk Display Pro";
  }
`;

const H3 = styled.h3`
  font-size: 36px;
  font-weight: 600;
  padding: 2rem 0;
  border-bottom: 3px solid black;
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
  padding: 0;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: flex-start;
  gap: 1.25rem;
`;

const Button = styled.button`
  border: 3px solid black;
  padding: 0.8rem 1.6rem;
  background-color: white;
  border-radius: 32px;
  margin-top: 2.75rem;
  font-weight: 600;
  font-size: 24px;
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
  width: 10rem;
  margin-right: 2.8 rem;
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
  word-break: keep-all;
`;

type ParamType = {
  fortuneId: string;
};

export default function Fortune() {
  const { fortuneId: id } = useParams<ParamType>();
  console.log(id);
  const fortuneId = parseInt(id ?? "0");

  const {
    bigImage,
    smallImage,
    categories,
    favorite,
    feature,
    name,
    title,
    type,
    video,
  } = fortuneContents[fortuneId];

  // ! 내가 원하는 대로 줄 개행하여 넣기
  const injectLineBreak = (title: string) =>
    title.split("\n").map((sentence) => (
      <>
        {sentence} <br />
      </>
    ));

  return (
    <Main>
      <Section flexDirection="column" justifyContent="space-between">
        <H1 lang="en" paddingLeft="0">
          <span>
            (TODAY ’S <br />
            DAILY FORTUNE
          </span>
          )
        </H1>
        <LogoContainer>
          {/* ! smallImage */}
          <SmallImage src={smallImage} />
        </LogoContainer>
      </Section>
      <Section>
        <Column backgroundColor="#f7f7f7">
          {/* bitImage */}
          <MainImage src={bigImage} />
        </Column>
        <Column>
          <Row>
            <H4 lang="en">TODAY ’S BROKEN EGG</H4>
            {/* ! title */}
            <H2>{injectLineBreak(title)}</H2>
            <ButtonContainer>
              {/* categories */}
              {categories.map((category) => (
                <Button>{category}</Button>
              ))}
            </ButtonContainer>
          </Row>
          <Row>
            {/* name */}
            <H3>{name}</H3>
            <Ul>
              <Li>
                {/* type */}
                <Label lang="en" htmlFor="type">
                  TYPE
                </Label>
                <Paragraph>{type}</Paragraph>
              </Li>
              <Li>
                {/* favorite */}
                <Label lang="en" htmlFor="favorite">
                  FAVORITE
                </Label>
                <Paragraph>{favorite}</Paragraph>
              </Li>
              <Li>
                {/* feature */}
                <Label lang="en" htmlFor="feature">
                  FEATURE
                </Label>
                <Paragraph>{injectLineBreak(feature)}</Paragraph>
              </Li>
            </Ul>
          </Row>
        </Column>
      </Section>
      <Section>
        {/* video */}
        <VideoWrapper>
          <ReactPlayer
            width="100%"
            height="100%"
            loop={true}
            playing={true}
            muted={true}
            url={video}
            controls
          />
        </VideoWrapper>
      </Section>
      <Section backgroundColor="black">
        <H1 lang="en" color="white" textAlign="center">
          TAKE A FORTUNE CAPSULE
        </H1>
      </Section>
    </Main>
  );
}
