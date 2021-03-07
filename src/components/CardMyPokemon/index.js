import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { getPokemonByUrl } from "../../api/restApi";
import {
  Desc,
  Title,
  Image,
  ImageWrapper,
  InfoWrapper,
  CardWrapper,
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
            {`#${data.id} ${data.name}`}
            {passData.nickname && ` "${passData.nickname}"`}
          </Title>
          <ImageWrapper>
            <Image src={`${imageUrl}/${data.id}.png`} alt={`${data.name}`} />
          </ImageWrapper>
          {data.types && (
            <Desc>{`${data.types.map((type, index) => type.type.name)}`}</Desc>
          )}
          {/* {data.abilities && (
            <Desc>
              Abilites: <br />{" "}
              {`${data.abilities.map((item, index) => item.ability.name)}`}
            </Desc>
          )} */}
        </div>
      ) : (
        <Desc>
          Pokemon Not Found
          <br />
          Team Rocket raiding the server
        </Desc>
      )}
    </CardWrapper>
  );
}
