/*jshint esversion: 10 */
import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import { getPokemonByUrl } from "../../api/restApi";
import TypeLabel from "../TypeLabel";
import { capitalize } from "../../utils";
import {
  Desc,
  Title,
  Image,
  ImageWrapper,
  InfoWrapper,
  CardWrapper,
  LabelWrapper,
} from "./cardMyPokemon.style";

export default function Card({ passData, url, index }) {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const getData = async () => {
    setIsLoading(true);
    setData([]);
    let pokemonsData = await getPokemonByUrl(url);
    setData({ ...pokemonsData, ...passData });
    setIsLoading(false);
  };

  console.log(data);

  useEffect(() => {
    getData();
  }, [url]);

  const imageUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

  return (
    <CardWrapper
      onClick={() => {
        history.push(`/my-pokemon/${index}`);
      }}
    >
      {data ? (
        <div>
          <Title>
            {`#${data.id} ${capitalize(data.name)}`}
            {passData.nickname && ` "${passData.nickname}"`}
          </Title>
          <ImageWrapper>
            <Image src={`${imageUrl}/${data.id}.png`} alt={`${data.name}`} />
          </ImageWrapper>
          <LabelWrapper>
            {data.types &&
              data.types.map((type, index) => (
                <TypeLabel key={index} typeName={type.type.name} />
              ))}
          </LabelWrapper>
        </div>
      ) : data.name ? (
        <Desc>
          Pokemon Not Found
          <br />
          Team Rocket raiding the server
        </Desc>
      ) : (
        <Skeleton />
      )}
    </CardWrapper>
  );
}
