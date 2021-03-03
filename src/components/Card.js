import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import { getPokemonByUrl } from "../api/restApi";

const CardWrapper = styled.div``;

const Image = styled.img``;

const Title = styled.p``;

const Desc = styled.p``;

export default function Card({ listData, url }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    setData([]);
    let pokemonsData = await getPokemonByUrl(url);
    setData(pokemonsData);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [url]);

  const imageUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

  return (
    data && (
      <CardWrapper>
        <NavLink to={`/pokemon/${data.id}`}>
          <Image src={`${imageUrl}/${data.id}.png`} alt={`${data.name}`} />
          <Title>{`#${data.id} ${data.name}`}</Title>
          {data.abilities && (
            <Desc>{`abilites: ${data.abilities.map(
              (item, index) => item.ability.name
            )}`}</Desc>
          )}
          {data.types && (
            <Desc>{`type: ${data.types.map(
              (type, index) => type.type.name
            )}`}</Desc>
          )}
        </NavLink>
      </CardWrapper>
    )
  );
}
