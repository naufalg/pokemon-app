import React, { useEffect, useState, useContext } from "react";
import { useParams, NavLink, useHistory } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { BsBackspaceFill } from "react-icons/bs";

import { AppContext } from "../../context/AppContext";
import TypeLabel from "../../components/TypeLabel";
import { getPokemonById } from "../../api/restApi";
import { removePokemon, capitalize } from "../../utils";
import {
  ReleaseButton,
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
  ULists,
  TypeWrapper,
  Spacer,
} from "./myPokemonDetail.style";

export default function MyPokemonDetail() {
  const history = useHistory();
  const myPokemon = JSON.parse(localStorage.getItem("myPokemon"));
  const { isMediumSize } = useContext(AppContext);
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
      <br />
      <BsBackspaceFill
        style={{ color: "white" }}
        onClick={() => {
          history.push("/my-pokemon");
        }}
      />
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
              &#171;{" "}
              {othersData.prevData && !isMediumSize && othersData.prevData.name}
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
                  <ReleaseButton
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
                  </ReleaseButton>
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
                    <ULists style={{ color: "white" }}>
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
                  <TypeWrapper style={{ display: "inline" }}>
                    {data.types &&
                      data.types.map((type, index) => (
                        <Desc style={{ maxWidth: "26%" }}>
                          <TypeLabel typeName={type.type.name} />
                        </Desc>
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
          {myPokemon.length - 1 === parseInt(idx) ? (
            <div></div>
          ) : (
            <NavButton
              onClick={() => {
                history.push(handleNav("next", page));
              }}
            >
              {othersData.nextData && !isMediumSize && othersData.nextData.name}{" "}
              &#187;
            </NavButton>
          )}
        </InnerWrapper>
      )}
      <Spacer />
    </Wrapper>
  );
}
