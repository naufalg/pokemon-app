import React, { useEffect, useState, useContext } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams, NavLink, useHistory } from "react-router-dom";

import { getPokemonById } from "../../api/restApi";
import { AppContext } from "../../context/AppContext";
import { catchPokemon, capitalize } from "../../utils";

import {
  CatchButton,
  Desc,
  Image,
  DetailWrapper,
  ImageWrapper,
  NavButton,
  InnerWrapper,
  BackButton,
  Wrapper,
  DescWrapper,
  Name,
  SkeletonWrap,
} from "./pokemonDetail.style";

export default function PokemonDetail() {
  const history = useHistory();
  const { id } = useParams();
  const [currentId, setCurrentId] = useState(id);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const requestData = async (dataId) => {
    setIsLoading(true);
    setData([]);
    let pokemonsData = await getPokemonById(dataId);
    setData(pokemonsData);
    setIsLoading(false);
  };

  useEffect(() => {
    requestData(id);
  }, [id]);

  const handleNav = (type, num) => {
    if (type === "prev") {
      if (num === 1 || num === "1") {
        return `/pokedex/898`;
      } else {
        return `/pokedex/${parseInt(num) - 1}`;
      }
    } else {
      if (num === 898 || num === "898") {
        return `/pokedex/1`;
      } else {
        return `/pokedex/${parseInt(num) + 1}`;
      }
    }
  };

  const imageUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

  console.log(data);

  return (
    <Wrapper>
      <div
        onClick={() => {
          history.push("/pokedex");
        }}
      >
        <BackButton>back</BackButton>
      </div>
      <br />
      <InnerWrapper>
        <NavButton
          onClick={() => {
            history.push(`${handleNav("prev", parseInt(id))}`);
          }}
        >
          Prev
        </NavButton>
        <DetailWrapper>
          <ImageWrapper>
            {!isLoading ? (
              <Name>{`#${data.id} ${capitalize(data.name)}`}</Name>
            ) : (
              <Skeleton height={20} width={200} />
            )}
            {!isLoading ? (
              <>
                <Image
                  src={`${imageUrl}/${data.id}.png`}
                  alt={`${data.name}`}
                />
                <CatchButton
                  onClick={() => {
                    catchPokemon(data);
                  }}
                >
                  CATCH
                </CatchButton>
              </>
            ) : (
              <Skeleton height={150} width={250} />
            )}
          </ImageWrapper>
          <DescWrapper>
            {!isLoading ? (
              <>
                <Desc>{`Height: ${data.height}`}</Desc>
                <Desc>{`Weight: ${data.weight}`}</Desc>
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
              </>
            ) : (
              <Skeleton
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "8px",
                }}
                height={20}
                width={200}
                count={3}
              />
            )}
          </DescWrapper>
        </DetailWrapper>
        <NavButton
          onClick={() => {
            history.push(`${handleNav("next", parseInt(id))}`);
          }}
        >
          Next
        </NavButton>
      </InnerWrapper>
    </Wrapper>
  );
}
