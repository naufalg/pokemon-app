// library
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// api
import { getPokemonByUrl } from "../../api/restApi";

// components
import TypeLabel from "../TypeLabel";
import { capitalize } from "../../utils";

// style
import {
  CardWrapper,
  LabelWrapper,
  ImageWrapper,
  Image,
  Title,
  Desc,
} from "./card.style";

export default function Card({ listData, url, isCatched, isGraph }) {
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
    setData({});
    let pokemonsData = await getPokemonByUrl(url);
    setData(pokemonsData);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [url]);

  
  return (
    <CardWrapper >
      {data.id ? (
        <div
          onClick={() => {
            isGraph
              ? history.push(`/graphql-pokedex/${data.id}`)
              : history.push(`/pokedex/${data.id}`);
          }}
        >
          <Title>{`#${data.id} ${capitalize(data.name)}`}</Title>
          <ImageWrapper className={isCatched}>
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
          Pokemon Not Found!
          <br />
          Team Rocket is raiding the server!
        </Desc>
      ) : (
        ""
      )}
    </CardWrapper>
  );
}
