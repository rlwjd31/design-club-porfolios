import styled from "styled-components";
import { commonStyle } from "../styles/GlobalStyle";
import { useContext } from "react";
import { ModalContext } from "../App";

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  width: 100vw;
  height: 100vh;
`;

const Card = styled.div`
  border-radius: 20px;
  background-color: white;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 4.25rem;
`;

const Paragraph = styled.p`
  font-size: ${commonStyle.fontSize.l};
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 21rem;
  margin-top: 3.875rem;
  max-width: 34.125rem;
`;

const Button = styled.button`
  position: relative;
  margin-top: 6rem;
  padding: 0.75rem 6.75rem;
  font-size: ${commonStyle.fontSize.m};
  border-radius: 30px;
`;

const Span = styled.span`
  position: absolute;
  top: 50%;
  right: 1.5rem;
  font-size: ${commonStyle.fontSize.x};
  transform: translateY(-50%);
`;

export default function Modal() {
  const { imagePath } = useContext(ModalContext);
  return (
    <ModalContainer>
      <Card>
        <Paragraph>알을 선택하셨습니다!</Paragraph>
        <Image src={imagePath} />
        <Button>
          결과 확인하러 가기<Span>&gt;</Span>
        </Button>
      </Card>
    </ModalContainer>
  );
}
