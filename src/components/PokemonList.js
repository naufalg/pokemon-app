import React from "react";
import styled from "@emotion/styled";
import { Skeleton } from "react-loading-skeleton";


import Card from "./Card";

const ListWrapper = styled.div``;

const Bottom = styled.div`
  height: 100px;
  width: 100%;
`;

export default function PokemonList({ listData }) {
  return (
    <ListWrapper>
      {listData[0].name !== undefined ? (
        listData.map((item, idx) => <Card key={idx} url={item.url} />)
      ) : (
        <Skeleton />
      )}
      <Bottom />
    </ListWrapper>
  );
}
