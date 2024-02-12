import styled from "styled-components";
import ReactPlayer from "react-player";

import image340 from "/assets/images/detail340.png";
import image650 from "/assets/images/detail650.png";
import testVideo from "/assets/videos/sample-video.mp4";
import { commonStyle } from "../styles/GlobalStyle";

type ImageProps = {
  width?: string;
  height?: string;
};

type ColumnProps = {
  padding?: string;
  backgroundColor?: string;
};

type RowProps = {
  backgroundColor?: string;
};

type SectionProps = {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
};

type H4Props = {
  padding?: string;
  borderBottom?: string;
};

// const Section = styled.section`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
const Section = styled.section<SectionProps>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.flexDirection ?? "row"};
  justify-content: ${(props) => props.justifyContent ?? "center"};
  align-items: ${(props) => props.justifyContent ?? "center"};
  height: 100%;
`;

const Image = styled.img<ImageProps>`
  object-fit: cover;
  width: ${(props) => props.width ?? "100%"};
  height: ${(props) => props.height ?? "auto"};
`;

const SmallImage = styled(Image)`
  max-width: 21.25rem;
  margin-top: calc(${commonStyle.padding.main} + 14rem);
`;

const VideoWrapper = styled.div`
  margin-top: -35%;
  padding-top: 56.25%;
  width: 100%;
`;

const H2 = styled.h2`
  font-size: ${commonStyle.fontSize.xxxl};
  width: 100%;
  margin-top: 17rem;
  margin-bottom: 3.5rem;
  /* max-width: 48rem; */
  &:lang(en) {
    font-family: "Neue Haas Grotesk Display Pro";
  }
`;

const H3 = styled.h3`
  font-size: ${commonStyle.fontSize.xl};
  max-width: 35.9rem;
  line-height: 1.4;
`;

const H4 = styled.h4<H4Props>`
  font-size: ${commonStyle.fontSize.x};
  border-bottom: ${(props) => props.borderBottom ?? "inherit"};
  padding: ${(props) => props.padding ?? "0"};
  font-weight: 600;
  width: 100%;

  &:lang(en) {
    font-family: "Neue Haas Grotesk Display Pro";
  }
`;

const ArticleContainer = styled.article`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${(props) => props.padding ?? "0"};
  background-color: ${(props) => props.backgroundColor ?? "inherit"};
`;

const Row = styled.div<RowProps>`
  width: 100%;
  height: 50%;
  padding: 3.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.backgroundColor ?? "inherit"};
`;

const Ul = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 1.25rem;
  margin-top: 2.8rem;

  & > li {
    padding: 20px 30px;
    border: 2px solid black;
    border-radius: 30px;
    font-size: 24px;
    font-weight: 500;
  }
`;

const DescriptionRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 600;
`;

const DL = styled.dl`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.25rem;
  text-align: start;
  & dt {
    color: rgba(0, 0, 0, 0.5);
    flex: 1;
    &:lang(en) {
      font-family: "Neue Haas Grotesk Display Pro";
    }
  }

  & dd {
    flex: 4;
    font-weight: 400;
  }
`;

const Footer = styled.footer`
  font-size: ${commonStyle.fontSize.m};
  font-weight: 600;
  text-transform: uppercase;
  padding: 7rem 0 3rem 0;
  padding-top: 7rem;
  pad &:lang(en) {
    font-family: "Neue Haas Grotesk Display Pro";
  }
`;

export default function Fortune() {
  return (
    <>
      <Section flexDirection="column" alignItems="center">
        <SmallImage src={image340} />
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
      <Section flexDirection="column">
        <H2 lang="en">
          <p>(TODAY ’S</p> <span>DAILY FORTUNE</span>)
        </H2>
        <ArticleContainer>
          <Column backgroundColor="#F7F7F7" padding="15.88rem 7.75rem">
            <Image width="40.63rem" height="40.63rem" src={image650} />
          </Column>
          <Column>
            <Row>
              <H3>가정과 일의 경계에서 균형을 유지하라</H3>
              <Ul>
                <li>경계</li>
                <li>균형</li>
                <li>가정</li>
              </Ul>
            </Row>
            <Row backgroundColor="#EAEAEA">
              <H4 lang="en" borderBottom="2px solid black" padding="0 0 2rem 0">
                TODAY ’S BROKEN EGG
              </H4>
              <Column>
                <H4 padding="2.75rem 0 4.25rem 0">비지맨</H4>
                <DL>
                  <DescriptionRow>
                    <dt lang="en">type</dt>
                    <dd>워커홀릭</dd>
                  </DescriptionRow>
                  <DescriptionRow>
                    <dt lang="en">Favorite</dt>
                    <dd>일하기</dd>
                  </DescriptionRow>
                  <DescriptionRow>
                    <dt lang="en">Feature</dt>
                    <dd>
                      <p>
                        일을 대신 해주는 아이. 나의 일을 가지고 가서 후딱 처리해
                        버린다.
                      </p>
                      <br />
                      <p>
                        해야하는 벅찬 일들이 줄어들어 가정에 집중할 수 있게 됨.
                      </p>
                    </dd>
                  </DescriptionRow>
                </DL>
              </Column>
            </Row>
          </Column>
        </ArticleContainer>
      </Section>
      <Footer lang="en">take a paper fortune</Footer>
    </>
  );
}
