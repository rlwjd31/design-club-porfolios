/// <reference types="vite-plugin-svgr/client" />

import React from "react";
import styled from "styled-components";
import { commonStyle } from "../styles/GlobalStyle";
import { useContext, useRef } from "react";
import { ModalContext } from "../App";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import ChevronRight from "../../public/assets/icons/chevron-right.svg?react";
import { useNavigate } from "react-router-dom";

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
  cursor: pointer;
`;

const Span = styled.span`
  position: absolute;
  top: 50%;
  right: 1.5rem;
  font-size: ${commonStyle.fontSize.s};
  transform: translateY(-50%);
`;

const ChevronRightIcon = styled(ChevronRight)`
  position: absolute;
  top: 50%;
  right: 1.5rem;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
`;

export default function Modal() {
  const { imagePath } = useContext(ModalContext);
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { modalClose } = useContext(ModalContext);
  useGSAP(
    () => {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 }
      );
    },
    { scope: modalRef }
  );

  const showFortunePage = () => {
    navigate("/fortune/asdf");
    modalClose();
  };

  return (
    <ModalContainer ref={modalRef}>
      <Card>
        <Paragraph>알을 선택하셨습니다!</Paragraph>
        <Image src={imagePath} />
        <Button onClick={showFortunePage}>
          결과 확인하러 가기
          <ChevronRightIcon />
        </Button>
      </Card>
    </ModalContainer>
  );
}
