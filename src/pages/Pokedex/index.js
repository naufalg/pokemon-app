/*jshint esversion: 10 */
import React, { useEffect, useContext, lazy, Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import { getPokemonsByPage } from "../../api/restApi";

import ScrollTop from "../../components/ScrollTop";
import { AppContext } from "../../context/AppContext";
import { Wrapper, TitleSection, ListWrapper } from "./pokedex.style";
import Navbar from "../../components/Navbar";
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

  const navbarData = [
    { tabName: "HOME", link: "/" },
    { tabName: "POKéDEX", link: "/pokedex" },
    {
      tabName: "MY POKé",
      link: "/my-pokemon",
      badge: myPokemon ? myPokemon.length : null,
    },
  ];

  return (
    <Wrapper>
      <Navbar tabs={navbarData} activeTab="POKEDEX" />
      <TitleSection>
        <h2>Pokédex</h2>
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
      <ScrollTop />
      {isFetching && <Skeleton />}
      {/* <Pagination /> */}
    </Wrapper>
  );
}

export default Pokedex;
