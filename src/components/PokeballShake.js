import React from "react";
import styled from "@emotion/styled";

const PokeBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const PokeballButton = styled.div`
  position: absolute;
  top: calc(50% - 15px);
  left: calc(50% - 15px);
  width: 30px;
  height: 30px;
  background: #fff;
  border: 4px solid #7f8c8d;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 0 7px black;
  animation: blink 0.5s alternate infinite;
  animation-play-state: paused;
`;
// S/o to athanstan

const Pokeball = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  background: #fff;
  border: 5px solid #000;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset -10px 10px 0 10px #ccc;
  animation: shake 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
  animation-play-state: paused;

  &:hover {
    animation-play-state: running;
  }

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
    top: calc(50% - 5px);
    width: 100%;
    height: 10px;
    background: #000;
  }

  &:hover .pokeball-button {
    animation-play-state: running;
  }

  @keyframes blink {
    from {
      background: #eee;
    }
    to {
      background: #e74c3c;
    }
  }
`;

export default function PokeballShake() {
  return (
    <PokeBox>
      <Pokeball>
        <PokeballButton className="pokeball-button"></PokeballButton>
      </Pokeball>
    </PokeBox>
  );
}
