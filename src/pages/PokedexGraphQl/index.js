import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";

import { GET_POKEMONS_BY_PAGE } from "../../api/graphQl";
import ScrollTop from "../../components/ScrollTop";
import { AppContext } from "../../context/AppContext";
import {
  Wrapper,
  TitleSection,
  ListWrapper,
  APILogo,
  PaginationWrapper,
  PageButton,
} from "./pokedexGraphQl.style";
import { Navbar, Card, PokeballLoad } from "../../components";
import restApiLogo from "../../assets/rest-api-logo.png";

function PokedexGraphQl() {
  const history = useHistory();
  const { limit, graphState, setGraphState } = useContext(AppContext);
  const myPokemon = JSON.parse(localStorage.getItem("myPokemon"));

  const { loading, error, data, fetchMore } = useQuery(GET_POKEMONS_BY_PAGE, {
    variables: { limit: limit, offset: graphState.offset },
  });

  useEffect(() => {}, [limit, data]);

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
        <h2>GraphQL Pokédex</h2>
        <APILogo
          onClick={() => {
            history.push("/pokedex");
          }}
          src={restApiLogo}
        />
      </TitleSection>
      {!loading ? (
        <>
          <ListWrapper>
            {data.pokemons.results.map((item, idx) => (
              <Card data-testid="graphql-card" key={idx} url={item.url} isGraph={true} />
            ))}
          </ListWrapper>
          <PaginationWrapper>
            {data.pokemons.previous && (
              <PageButton
                onClick={() => {
                  setGraphState({
                    ...graphState,
                    page: graphState.page - 1,
                    offset: graphState.offset - limit,
                  });
                  fetchMore(GET_POKEMONS_BY_PAGE, {
                    variables: {
                      limit: limit,
                      offset: graphState.offset,
                    },
                  });
                }}
              >
                <span>
                  <BsChevronDoubleLeft />{" "}
                </span>
                Prev
              </PageButton>
            )}
            <PageButton
              onClick={() => {
                setGraphState({
                  ...graphState,
                  page: graphState.page + 1,
                  offset: graphState.offset + limit,
                });
                fetchMore(GET_POKEMONS_BY_PAGE, {
                  variables: {
                    limit: limit,
                    offset: graphState.offset,
                  },
                });
              }}
            >
              Next
              <span>
                <BsChevronDoubleRight />
              </span>
            </PageButton>
          </PaginationWrapper>
        </>
      ) : (
        <PokeballLoad data-testid="graphql-loader" />
      )}
      {error && <TitleSection>{error}</TitleSection>}
      <ScrollTop />
    </Wrapper>
  );
}

export default PokedexGraphQl;
