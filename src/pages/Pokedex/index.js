import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPokemonsByPage } from "../../api/restApi";

import ScrollTop from "../../components/ScrollTop";
import { AppContext } from "../../context/AppContext";
import { Wrapper, TitleSection, ListWrapper, APILogo } from "./pokedex.style";
import { Navbar, Card, PokeballLoad } from "../../components";
import graphqlLogo from "../../assets/graphql-logo.png";

function Pokedex() {
  const history = useHistory()
  const {
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
  }, []);

  const getData = async () => {
    setTimeout(async () => {
      let pokemonsData = await getPokemonsByPage(page, limit);
      setPage(page + 1);
      setOffset(offset + limit);
      setListItem(() => [...listItem, ...pokemonsData.results]);
    }, 1500);
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
        <APILogo
          onClick={() => {
            history.push("/graphql-pokedex");
          }}
          src={graphqlLogo}
        />
      </TitleSection>
      {listItem.length > 0 ? (
        <InfiniteScroll
          dataLength={listItem.length}
          next={getData}
          hasMore={true}
          loader={<PokeballLoad />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <ListWrapper>
            {listItem.map((item, idx) => (
              <Card key={idx} url={item.url} />
            ))}
          </ListWrapper>
        </InfiniteScroll>
      ) : (
        <PokeballLoad />
      )}
      <ScrollTop />
    </Wrapper>
  );
}

export default Pokedex;
