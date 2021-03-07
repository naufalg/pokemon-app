import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Skeleton } from "react-loading-skeleton";

import { getPokemonById } from "../api/restApi";

import Card from "./Card";
import { mediaQuery } from "../globalStyles";

const ListWrapper = styled.div``;

const Bottom = styled.div`
  height: 100px;
  width: 100%;
`;

export default function PokemonList({ listData }) {
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);

  console.log(listData);
  return (
    <ListWrapper>
      {listData[0].name !== undefined > 0 ? (
        listData.map((item, idx) => <Card key={idx} url={item.url} />)
      ) : (
        <Skeleton />
      )}
      <Bottom />
    </ListWrapper>
  );
}
