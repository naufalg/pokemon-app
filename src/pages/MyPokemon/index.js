import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  BsBackspaceFill,
  BsChevronDoubleRight,
  BsChevronDoubleLeft,
} from "react-icons/bs";

import { AppContext } from "../../context/AppContext";
import { globalUrl } from "../../api/restApi";
import { CardMyPokemon } from "../../components";
import Navbar from "../../components/Navbar";
import {
  Wrapper,
  ListWrapper,
  CatchPokemon,
  Title,
  CatchWrapper,
} from "./myPokemon.style";

export default function MyPokemon() {
  const getMyPokemon = JSON.parse(localStorage.getItem("myPokemon"));
  console.log(getMyPokemon);

  const navbarData = [
    { tabName: "HOME", link: "/" },
    { tabName: "POKéDEX", link: "/pokedex" },
    { tabName: "MY POKé", link: "/my-pokemon" },
  ];

  return (
    <Wrapper>
      <Navbar
        tabs={navbarData}
        activeTab="MY POKEMON"
        textColor="white"
      />
      <br />
      {getMyPokemon ? (
        <Title>
          My Pokemon <br /> You have {getMyPokemon.length} pokemon
          {getMyPokemon.length > 1 && "s"}
        </Title>
      ) : (
        <Title>You dont't have any pokemon</Title>
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
