// library
import React from "react";
import { NavLink, useHistory } from "react-router-dom";

// api
import { globalUrl } from "../../api/restApi";

// components
import { CardMyPokemon } from "../../components";
import { clearPokemon } from "../../utils";
import Navbar from "../../components/Navbar";
import {
  Wrapper,
  ListWrapper,
  CatchPokemon,
  Title,
  ClearButton,
} from "./myPokemon.style";

export default function MyPokemon() {
  // prep
  const history = useHistory();
  const getMyPokemon = JSON.parse(localStorage.getItem("myPokemon"));

  // navbar
  const navbarData = [
    { tabName: "HOME", link: "/" },
    { tabName: "POKéDEX", link: "/pokedex" },
    {
      tabName: "MY POKé",
      link: "/my-pokemon",
      badge: getMyPokemon ? getMyPokemon.length : null,
    },
  ];

  return (
    <Wrapper>
      <Navbar tabs={navbarData} activeTab="MY POKEMON" textColor="white" />
      {getMyPokemon ? (
        <Title>
          My Pokemon <br /> You have {getMyPokemon.length} pokemon
          {getMyPokemon.length > 1 && "s"}
        </Title>
      ) : (
        <Title>You dont't have any pokemon</Title>
      )}

      {getMyPokemon && (
        <div style={{ textAlign: "center" }}>
          <ClearButton
            onClick={() => {
              clearPokemon(history);
            }}
          >
            Release All
          </ClearButton>
        </div>
      )}
      <br />
      {getMyPokemon ? (
        <ListWrapper>
          {getMyPokemon.map((item, idx) => (
            <CardMyPokemon
              url={`${globalUrl}/${item.id}`}
              passData={getMyPokemon[idx]}
              index={idx}
            />
          ))}
        </ListWrapper>
      ) : (
        <NavLink to="/pokedex">
          <CatchPokemon>Go Catch Pokemon!</CatchPokemon>
        </NavLink>
      )}
    </Wrapper>
  );
}
