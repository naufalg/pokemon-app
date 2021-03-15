import React, { useEffect, useState, useContext } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams, useHistory } from "react-router-dom";
import {
  BsBackspaceFill,
  BsChevronDoubleRight,
  BsChevronDoubleLeft,
} from "react-icons/bs";

import NotFound from "../../pages/NotFound";
import pokeball from "../../assets/pokeball.png";
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

export default function PokemonDetail({ isGraph }) {
  const history = useHistory();
  const { isMediumSize } = useContext(AppContext);
  const { id } = useParams();
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

  const handleNav = (type, num, isGraph) => {
    if (isGraph === true) {
      if (type === "prev") {
        if (num === 10001 || num === "10001") {
          return `/graphql-pokedex/898`;
        } else {
          return `/graphql-pokedex/${parseInt(num) - 1}`;
        }
      } else {
        if (num === 898 || num === "898") {
          return `/graphql-pokedex/10001`;
        } else {
          return `/graphql-pokedex/${parseInt(num) + 1}`;
        }
      }
    } else {
      if (type === "prev") {
        if (num === 10001 || num === "10001") {
          return `/pokedex/898`;
        } else {
          return `/pokedex/${parseInt(num) - 1}`;
        }
      } else {
        if (num === 898 || num === "898") {
          return `/pokedex/10001`;
        } else {
          return `/pokedex/${parseInt(num) + 1}`;
        }
      }
    }
  };

  const imageUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

  if (parseInt(id) > 898 && parseInt(id) < 10001) {
    return <NotFound />;
  }

  return (
    <Wrapper>
      <br />
      <BackButton>
        <BsBackspaceFill
          onClick={() => {
            isGraph
              ? history.push("/graphql-pokedex")
              : history.push("/pokedex");
          }}
        />
      </BackButton>
      <br />
      <InnerWrapper>
        {parseInt(id) > 1 ? (
          <NavButton
            className="left"
            onClick={() => {
              history.push(`${handleNav("prev", parseInt(id), isGraph)}`);
            }}
          >
            <span>
              <BsChevronDoubleLeft />{" "}
            </span>
            {othersData.prevData &&
              !isMediumSize &&
              capitalize(othersData.prevData.name)}
          </NavButton>
        ) : (
          <NavButton className="left">None</NavButton>
        )}
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
                    catchPokemon(data);
                  }}
                >
                  <img className="pokeball" src={pokeball} alt="pokeball" />
                  CATCH
                </CatchButton>
              </>
            ) : (
              <Skeleton height={150} width={250} />
            )}
          </ImageWrapper>
          {!isLoading ? (
            <DescWrapper>
              <>
                <Desc>
                  <b>Height:</b> &nbsp;
                  {data.height} m
                </Desc>
                <Desc>
                  <b>Weight:</b> &nbsp;
                  {data.weight} Kg
                </Desc>
                {data.abilities && (
                  <ULists>
                    <b>Abilites:</b>
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
            </DescWrapper>
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
        </DetailWrapper>
        <NavButton
          onClick={() => {
            history.push(`${handleNav("next", parseInt(id), isGraph)}`);
          }}
        >
          {othersData.nextData &&
            !isMediumSize &&
            capitalize(othersData.nextData.name)}{" "}
          <span>
            <BsChevronDoubleRight />
          </span>
        </NavButton>
      </InnerWrapper>
    </Wrapper>
  );
}
