/*jshint esversion: 10 */
import React, { useEffect, useState, useContext } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams, NavLink, useHistory } from "react-router-dom";
import { BsBackspaceFill } from "react-icons/bs";

import PokeballDrop from "../../components/PokeballDrop";
import { getPokemonById } from "../../api/restApi";
import TypeLabel from "../../components/TypeLabel";
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
  ULists,
  TypeWrapper,
} from "./pokemonDetail.style";

export default function PokemonDetail() {
  const history = useHistory();
  const { isMediumSize } = useContext(AppContext);
  const { id } = useParams();
  const [currentId, setCurrentId] = useState(id);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [othersData, setOthersData] = useState({});

  const requestData = async (dataId) => {
    setIsLoading(true);
    setData({});
    setOthersData({});
    let pokemonsData = await getPokemonById(dataId);
    let prevResult = await getPokemonById(parseInt(dataId) - 1);
    let nextResult = await getPokemonById(parseInt(dataId) + 1);
    setData(pokemonsData);
    setOthersData({ prevData: prevResult, nextData: nextResult });
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

  const handlePokeball = () => {
    return <PokeballDrop />;
  };

  const imageUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

  console.log(data);
  console.log(data.types);

  return (
    <Wrapper>
      <br/>
      <BsBackspaceFill
        onClick={() => {
          history.push("/pokedex");
        }}
        style={{ color: "white" }}
      />
      <br />
      <InnerWrapper>
        <NavButton
          onClick={() => {
            history.push(`${handleNav("prev", parseInt(id))}`);
          }}
        >
          &#171;{" "}
          {othersData.prevData && !isMediumSize && othersData.prevData.name}
        </NavButton>
        <DetailWrapper>
          <ImageWrapper>
            {!isLoading ? (
              <Name>{`#${data.id} ${capitalize(data.name)}`}</Name>
            ) : (
              <Skeleton style={{ margin: "15px" }} height={20} width={200} />
            )}
            {!isLoading ? (
              <>
                <Image
                  src={`${imageUrl}/${data.id}.png`}
                  alt={`${data.name}`}
                />
                <CatchButton
                  onClick={() => {
                    catchPokemon(data, handlePokeball);
                  }}
                >
                  <span>CATCH</span>
                </CatchButton>
              </>
            ) : (
              <Skeleton height={150} width={250} />
            )}
          </ImageWrapper>
          <DescWrapper>
            {!isLoading ? (
              <>
                <Desc>{`Height: ${data.height} m`}</Desc>
                <Desc>{`Weight: ${data.weight} Kg`}</Desc>
                {data.abilities && (
                  <ULists>
                    Abilites:
                    {data.abilities.map((item, index) => (
                      <li
                        style={{
                          listStyleType: "circle",
                          listStylePosition: "inside",
                        }}
                      >
                        {item.ability.name}
                      </li>
                    ))}
                  </ULists>
                )}
                <TypeWrapper>
                  {data.types &&
                    data.types.map((type, index) => (
                      <TypeLabel typeName={type.type.name} />
                    ))}
                </TypeWrapper>
              </>
            ) : (
              <Skeleton
                style={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "12px 0  0 10px",
                }}
                height={20}
                width={200}
                count={4}
              />
            )}
          </DescWrapper>
        </DetailWrapper>
        <NavButton
          onClick={() => {
            history.push(`${handleNav("next", parseInt(id))}`);
          }}
        >
          {othersData.nextData && !isMediumSize && othersData.nextData.name}{" "}
          &#187;
        </NavButton>
      </InnerWrapper>
    </Wrapper>
  );
}
