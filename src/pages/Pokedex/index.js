// library
import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

// api
import { getPokemonsByPage } from "../../api/restApi";

// components
import ScrollTop from "../../components/ScrollTop";
import { AppContext } from "../../context/AppContext";
import { Wrapper, TitleSection, ListWrapper, APILogo } from "./pokedex.style";
import { Navbar, Card, PokeballLoad } from "../../components";
import graphqlLogo from "../../assets/graphql-logo.png";

function Pokedex() {
  // prep
  const history = useHistory();
  const myPokemon = JSON.parse(localStorage.getItem("myPokemon"));
  const {
    listItem,
    setListItem,
    page,
    setPage,
    limit,
    offset,
    setOffset,
  } = useContext(AppContext);

  useEffect(() => {
    getData();
  }, []);

  // functions
  const getData = async () => {
    setTimeout(async () => {
      let pokemonsData = await getPokemonsByPage(page, limit);
      setPage(page + 1);
      setOffset(offset + limit);
      setListItem(() => [...listItem, ...pokemonsData.results]);
    }, 1500);
  };

  // navbar handler
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
      {/* grid data */}
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
        // loader
        <PokeballLoad />
      )}
      <ScrollTop />
    </Wrapper>
  );
}

export default Pokedex;
