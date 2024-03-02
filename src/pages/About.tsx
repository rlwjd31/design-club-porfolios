import styled from "styled-components";
import HeaderLogoSVG from "../../public/assets/icons/header-logo.svg?react";
import { commonStyle } from "../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 24px;
  font-weight: 400;
`;

const H2 = styled.h2`
  font-size: 32px;
  text-transform: uppercase;
  padding: 2rem 0;
  border-top: 2px solid black;
  border-bottom: 2px solid black;

  &:lang(en) {
    font-family: "Neue Haas Grotesk Display Pro";
  }
`;

const H3 = styled.h3`
  font-size: 24px;
  font-weight: 700;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const Main = styled.main`
  width: 100%;
  padding: 3.125rem;
  padding-top: 0;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;

const LineBreak = styled.div`
  height: 2rem;
`;

const Paragraph = styled.p`
  line-height: 1.4;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 1.25rem;
  gap: 2.25rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 6.25rem 1rem 0;
  border-right: 1px solid black;

  &:last-child {
    border: none;
  }
`;

const FortuneText = styled(HeaderLogoSVG)`
  position: absolute;
  bottom: ${commonStyle.padding.main};
  right: ${commonStyle.padding.main};
  width: 17rem;
  height: 2rem;
  cursor: pointer;
`;

export default function About() {
  const navigate = useNavigate();
  
  return (
    <>
      <Main>
        <Section>
          <Paragraph>
            4명의 디자인 전공생이 모여 완성한 영상 프로젝트.
          </Paragraph>
          <LineBreak />
          <Paragraph>
            예측 불가능한 현실, 생각하는 대로 흘러가지 않는 것이 인생이다.
            우연한 단어와 그 조합으로 생길 수 있는
            <br /> 많은 경우의 수 중 예측 불가능한 이야기. 이것은 하나의 ‘알’이
            되어 새로운 생명체로 탄생한다. <br />이 생명체는 예측 불가능한
            미래로부터 두려움을 느낄 필요가 없게 하는 부적과 같다.
          </Paragraph>
          <LineBreak />
          <Paragraph>
            이 프로젝트는 무작위로 바뀌는 알을 클릭하여 오늘의 운세를 점칠 수
            있는 아카이빙 웹사이트이다. <br /> 하루가 지나도 당신에게 기억에
            남는 우연이 되기를 바라며.
          </Paragraph>
        </Section>
        <Section>
          <H2 lang="en">members</H2>
          <Container>
            <Column>
              <H3>김하늘</H3>
              <Paragraph>@alwaysha_88</Paragraph>
            </Column>
            <Column>
              <H3>권혜정</H3>
              <Paragraph>@rim_sketchbook</Paragraph>
            </Column>
            <Column>
              <H3>오은솔</H3>
              <Paragraph>@underclassher.oh</Paragraph>
            </Column>
            <Column>
              <H3>이유진</H3>
              <Paragraph>@fntsi.e</Paragraph>
            </Column>
          </Container>
        </Section>
      </Main>
      <FortuneText onClick={() => navigate("/")} />
    </>
  );
}
