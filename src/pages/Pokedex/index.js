import React, { useState, useEffect, useContext, lazy, Suspense } from "react";
import { NavLink } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getPokemonsByPage, globalUrl } from "../../api/restApi";

import { AppContext } from "../../context/AppContext";
import { Wrapper, NavButton, TitleSection, ListWrapper } from "./pokedex.style";
import Pagination from "./Pagination";
const Card = lazy(() => import("../../components/Card"));

function Pokedex() {
  const {
    isFetching,
    setIsFetching,
    listItem,
    setListItem,
    page,
    setPage,
    limit,
    setLimit,
    offset,
    setOffset,
  } = useContext(AppContext);
  const myPokemon = JSON.parse(localStorage.getItem("myPokemon"));

  useEffect(() => {
    getData();
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
    console.log(isFetching);
  };

  const getData = async () => {
    setTimeout(async () => {
      let pokemonsData = await getPokemonsByPage(page, limit);
      setPage(page + 1);
      setOffset(offset + limit);
      setLimit(20);
      setListItem(() => [...listItem, ...pokemonsData.results]);
    }, 500);
  };

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  const fetchMoreListItems = () => {
    getData();
    setIsFetching(false);
  };

  // console.log("isFetching", isFetching);
  // console.log("page", page);
  // console.log("limit", limit);
  // console.log("offset", offset);
  // console.log("listItem", listItem);

  return (
    <Wrapper>
      <NavLink to="/">
        <NavButton>Back</NavButton>
      </NavLink>
      <TitleSection>
        <h2>Pokédex</h2>
        {myPokemon && <h4>you have {myPokemon.length} pokemon</h4>}
      </TitleSection>
      <ListWrapper>
        {listItem ? (
          listItem.map((item, idx) => (
            <Suspense fallback={<Skeleton height={100} />}>
              <Card key={idx} url={item.url} />
            </Suspense>
          ))
        ) : (
          <Skeleton />
        )}
      </ListWrapper>
      {isFetching && <Skeleton />}
      {/* <Pagination /> */}
    </Wrapper>
  );
}

export default Pokedex;
