import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { getPokemonById } from "../api/restApi";

import Card from "./Card";
import { mediaQuery } from "../globalStyles";

const ListWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
  ${mediaQuery[1]} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${mediaQuery[2]} {
    grid-template-columns: repeat(4, 1fr);
  }
  ${mediaQuery[3]} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export default function PokemonList({ listData }) {
  const [isLoading, setIsLoading] = useState(false);

  console.log(listData);
  return (
    <ListWrapper>
      {listData &&
        listData.map((item, idx) => <Card key={idx} url={item.url} />)}
    </ListWrapper>
  );
}
