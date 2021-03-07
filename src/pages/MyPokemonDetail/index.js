import React, { useEffect, useState, useContext } from "react";
import { useParams, NavLink, useHistory } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { BsBackspaceFill } from "react-icons/bs";

import { getPokemonById } from "../../api/restApi";
import { removePokemon, capitalize } from "../../utils";
import {
  CatchButton,
  Desc,
  Image,
  InfoWrapper,
  ImageWrapper,
  DetailWrapper,
  NavButton,
  InnerWrapper,
  BackButton,
  Wrapper,
  DescWrapper,
  Title,
  Name,
} from "./myPokemonDetail.style";

export default function MyPokemonDetail() {
  const myPokemon = JSON.parse(localStorage.getItem("myPokemon"));
  const history = useHistory();
  const { idx } = useParams();
  const [page, setPage] = useState(idx);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [othersData, setOthersData] = useState({});

  const requestData = async (dataId) => {
    setIsLoading(true);
    setData({});
    setOthersData({});
    let result = await getPokemonById(dataId);
    let prevResult = myPokemon[parseInt(idx) - 1];
    let nextResult = myPokemon[parseInt(idx) + 1];
    setData(result);
    setOthersData({ prevData: prevResult, nextData: nextResult });
    setIsLoading(false);
  };

  useEffect(() => {
    requestData(myPokemon[idx].id);
  }, [idx]);

  const handleNav = (type, num) => {
    if (type === "prev") {
      setPage(parseInt(num) - 1);
      return `/my-pokemon/${parseInt(num) - 1}`;
    } else {
      setPage(parseInt(num) + 1);
      return `/my-pokemon/${parseInt(num) + 1}`;
    }
  };

  const imageUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

  console.log(data);

  return (
    <Wrapper>
      <BsBackspaceFill
        style={{ color: "white" }}
        onClick={() => {
          history.push("/my-pokemon");
        }}
      >
        back
      </BsBackspaceFill>
      <Title></Title>
      <br />
      {data && (
        <InnerWrapper>
          {idx > 0 ? (
            <NavButton
              onClick={() => {
                history.push(handleNav("prev", page));
              }}
            >
              &#171; {othersData.prevData && othersData.prevData.name}
            </NavButton>
          ) : (
            <div></div>
          )}

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
                      removePokemon(
                        data,
                        idx,
                        myPokemon[idx].nickname,
                        history
                      );
                    }}
                  >
                    RELEASE
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
          {myPokemon.length - 1 === parseInt(idx) ? (
            <div></div>
          ) : (
            <NavButton
              onClick={() => {
                history.push(handleNav("next", page));
              }}
            >
              {othersData.nextData && othersData.nextData.name} &#187;
            </NavButton>
          )}
        </InnerWrapper>
      )}
    </Wrapper>
  );
}
