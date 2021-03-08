/*jshint esversion: 10 */
import React, { useState, useEffect, useContext, lazy, Suspense } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { BsBackspaceFill } from "react-icons/bs";
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
  console.log("page", page);
  console.log("limit", limit);
  console.log("offset", offset);
  console.log("listItem", listItem);

  return (
    <Wrapper>
      <br />
      <NavLink to="/">
        <BsBackspaceFill style={{ color: "white" }} />
      </NavLink>
      <TitleSection>
        <h2>Pokédex</h2>
        <br/>
        {myPokemon && (
          <NavLink to="/my-pokemon">
            <h4>you have {myPokemon.length} pokemon{myPokemon.length>1 && "s"}</h4>
          </NavLink>
        )}
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
