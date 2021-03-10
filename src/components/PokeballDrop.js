import React from "react";
import styled from "@emotion/styled";
import { mediaQuery } from "../globalStyles";

const Wrapper = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 900;
  box-shadow: inset 0px 0px 0 2000px rgba(0, 0, 0, 0.5);
  min-height: 100vh;
  min-width: 100vw;
`;

const Pokeball = styled.div`
  position: relative;
  top: 30vh;
  left: 30vw;
  ${mediaQuery[1]} {
    top: 40vh;
    left: 40vw;
  }
  width: 200px;
  height: 200px;
  background: #fff;
  border: 10px solid #000;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset -10px 10px 0 10px #ccc;
  animation: fall 0.25s ease-in-out,
    shake 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) 3;

  @keyframes shake {
    0 {
      transform: translate(0, 0) rotate(0);
    }
    20% {
      transform: translate(-10px, 0) rotate(-20deg);
    }
    30% {
      transform: translate(10px, 0) rotate(20deg);
    }
    50% {
      transform: translate(-10px, 0) rotate(-10deg);
    }
    60% {
      transform: translate(10px, 0) rotate(10deg);
    }
    100% {
      transform: translate(0, 0) rotate(0);
    }
  }
  @keyframes fall {
    0% {
      top: -200px;
    }
    60% {
      top: 0;
    }
    80% {
      top: -20px;
    }
    100% {
      top: 0;
    }
  }

  &:before {
    content: "";
    position: absolute;
    background: red;
    width: 100%;
    height: 50%;
  }

  &:after {
    content: "";
    position: absolute;
    top: calc(50% - 10px);
    width: 100%;
    height: 20px;
    background: #000;
  }
`;

const PokeballButton = styled.div`
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  width: 60px;
  height: 60px;
  background: #7f8c8d;
  border: 10px solid #fff;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 0 10px black;
  animation: blink 0.5s alternate 7;

  @keyframes blink {
    from {
      background: #eee;
    }
    to {
      background: #e74c3c;
    }
  }
`;

export default function PokeballDrop() {
  return (
    <Wrapper>
      <Pokeball>
        <PokeballButton />
      </Pokeball>
    </Wrapper>
  );
}
