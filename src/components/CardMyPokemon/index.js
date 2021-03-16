// library
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

// api
import { getPokemonByUrl } from "../../api/restApi";

// components
import TypeLabel from "../TypeLabel";
import { capitalize } from "../../utils";
import {
  Desc,
  Title,
  Image,
  ImageWrapper,
  CardWrapper,
  LabelWrapper,
} from "./cardMyPokemon.style";

export default function Card({ passData, url, index }) {
  // prep
  const history = useHistory();
  const imageUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

  // state
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  // get function
  const getData = async () => {
    setIsLoading(true);
    setData([]);
    let pokemonsData = await getPokemonByUrl(url);
    setData({ ...pokemonsData, ...passData });
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [url]);


  return (
    <CardWrapper
      onClick={() => {
        history.push(`/my-pokemon/${index}`);
      }}
    >
      {passData && data ? (
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
        <Skeleton height={400} />
      )}
    </CardWrapper>
  );
}
