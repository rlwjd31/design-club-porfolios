/// <reference types="vite-plugin-svgr/client" />

import React from "react";
import styled from "styled-components";
import { commonStyle } from "../styles/GlobalStyle";
import { useContext, useRef } from "react";
import { ModalContext } from "../App";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import CloseSVG from "../../public/assets/icons/close.svg?react";
import RightArrow from "../../public/assets/icons/right-arrow.svg?react";

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
  position: relative;
  padding: 5rem 3.75rem 2.75rem;
  background-color: white;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

const ModalHeader = styled.h3`
  font-size: ${commonStyle.fontSize.m};
  font-weight: 600;
  text-align: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  padding: 1.75rem 0;
  margin-top: 2.25rem;
  font-size: ${commonStyle.fontSize.s};
  cursor: pointer;
  min-width: 20.75rem;
  min-height: 5rem;
  background-color: black;
  color: white;
`;

const Span = styled.span`
  font-weight: 500;
  font-size: 1.125rem;
  color: #747474;
  margin-top: 1.4rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const RigtArrowIcon = styled(RightArrow)`
  margin-left: 1.5rem;
  width: 1.5rem;
  transform: translateY(1px);
`;

const CloseIcon = styled(CloseSVG)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

type Props = {
  restart: () => void;
};

export default function Modal({ restart }: Props) {
  const { fortune } = useContext(ModalContext);
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

  const CrackedSvg = fortune.cracked;

  return (
    <ModalContainer ref={modalRef}>
      <Card>
        <CloseIcon
          onClick={() => {
            modalClose();
            restart();
          }}
        />
        <CrackedSvg />
        <ContentContainer>
          <ModalHeader>알을 선택하셨습니다!</ModalHeader>
          <Span>결과 확인하기를 통해 오늘의 운세를 확인해보세요</Span>
          <Button onClick={showFortunePage}>
            결과 확인하러 가기
            <RigtArrowIcon />
          </Button>
        </ContentContainer>
      </Card>
    </ModalContainer>
  );
}
