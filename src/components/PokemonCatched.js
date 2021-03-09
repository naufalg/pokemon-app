import React from "react";
import styled from "@emotion/styled";

import Modal from "./Modal";

const Wrapper = styled.div`
  display: flex;
  padding: 100px;
`;

export default function PokemonCatched() {
  return (
    <Modal>
      <Wrapper>
          Congratulation, You catch the Pokemon!
      </Wrapper>
    </Modal>
  );
}
