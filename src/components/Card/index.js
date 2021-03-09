import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { getPokemonByUrl } from "../../api/restApi";
import TypeLabel from "../TypeLabel";
import { capitalize } from "../../utils";
import {
  CardWrapper,
  LabelWrapper,
  ImageWrapper,
  Image,
  Title,
  Desc,
} from "./card.style";

export default function Card({ listData, url }) {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const getData = async () => {
    setIsLoading(true);
    setData({});
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
    <CardWrapper
      onClick={() => {
        history.push(`/pokedex/${data.id}`);
      }}
    >
      {data.id ? (
        <div>
          <Title>{`#${data.id} ${capitalize(data.name)}`}</Title>
          <ImageWrapper>
            <Image src={`${imageUrl}/${data.id}.png`} alt={`${data.name}`} />
          </ImageWrapper>
          {/* <Title>{`${data.name}`}</Title> */}
          <LabelWrapper>
            {data.types &&
              data.types.map((type, index) => (
                <TypeLabel key={index} typeName={type.type.name} />
              ))}
          </LabelWrapper>
        </div>
      ) : (
        data.name && (
          <Desc>
            Pokemon Not Found!
            <br />
            Team Rocket is raiding the server!
          </Desc>
        )
      )}
    </CardWrapper>
  );
}
