import React from "react";
import styled from "@emotion/styled";

import pokeball from "../assets/pokeball.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Pokeball = styled.img`
  height: 40px;
  @keyframes spinning {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: spinning 1s infinite;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
  .ball-2 {
    animation-delay: 500ms;
  }
  .ball-3 {animation-delay: 1s;}
`;

export default function PokeballLoad() {
  return (
    <Wrapper>
      <Pokeball src={pokeball} alt="pokeball" />
      <Pokeball src={pokeball} className="ball-2" alt="pokeball" />
      <Pokeball src={pokeball} className="ball-3" alt="pokeball" />
    </Wrapper>
  );
}
