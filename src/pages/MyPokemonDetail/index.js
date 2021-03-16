// library
import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import {
  BsBackspaceFill,
  BsChevronDoubleRight,
  BsChevronDoubleLeft,
} from "react-icons/bs";

// api
import { getPokemonById } from "../../api/restApi";

// components
import { AppContext } from "../../context/AppContext";
import TypeLabel from "../../components/TypeLabel";
import { removePokemon, capitalize } from "../../utils";
import {
  ReleaseButton,
  Desc,
  Image,
  ImageWrapper,
  DetailWrapper,
  NavButton,
  InnerWrapper,
  BackButton,
  Wrapper,
  DescWrapper,
  Name,
  ULists,
  TypeWrapper,
  Spacer,
} from "./myPokemonDetail.style";

export default function MyPokemonDetail() {
  // prep
  const history = useHistory();
  const imageUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
  const myPokemon = JSON.parse(localStorage.getItem("myPokemon"));
  const { idx } = useParams();
  
  // states
  const { isMediumSize } = useContext(AppContext);
  const [page, setPage] = useState(idx);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [othersData, setOthersData] = useState({});

  // functions
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

  // navigation handler
  const handleNav = (type, num) => {
    if (type === "prev") {
      setPage(parseInt(num) - 1);
      return `/my-pokemon/${parseInt(num) - 1}`;
    } else {
      setPage(parseInt(num) + 1);
      return `/my-pokemon/${parseInt(num) + 1}`;
    }
  };

  return (
    <Wrapper>
      <br />
      <BackButton>
        <BsBackspaceFill
          onClick={() => {
            history.push("/my-pokemon");
          }}
        />
      </BackButton>
      <br />
      {data && (
        <InnerWrapper>
          {idx > 0 ? (
            <NavButton
              className="left"
              onClick={() => {
                history.push(handleNav("prev", page));
              }}
            >
              <span>
                <BsChevronDoubleLeft />{" "}
              </span>
              {othersData.prevData && !isMediumSize && othersData.prevData.name}
            </NavButton>
          ) : (
            <div style={{ minWidth: "50px", backgroundColor: "transparent" }} />
          )}

          <DetailWrapper>
            <ImageWrapper>
              {!isLoading ? (
                <Name>
                  {`#${data.id} ${capitalize(data.name)}`}
                  {myPokemon[idx].nickname && ` "${myPokemon[idx].nickname}"`}
                </Name>
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
            {!isLoading ? (
              <DescWrapper>
                <>
                  <Desc>
                    <b>Height:</b>
                    {data.height} m
                  </Desc>
                  <Desc>
                    <b>Weight:</b>
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
                  <TypeWrapper style={{ display: "inline" }}>
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
          {myPokemon.length - 1 === parseInt(idx) ? (
            <div style={{ minWidth: "50px", backgroundColor: "transparent" }} />
          ) : (
            <NavButton
              onClick={() => {
                history.push(handleNav("next", page));
              }}
            >
              {othersData.nextData && !isMediumSize && othersData.nextData.name}{" "}
              <span>
                <BsChevronDoubleRight />
              </span>
            </NavButton>
          )}
        </InnerWrapper>
      )}
      <Spacer />
    </Wrapper>
  );
}
