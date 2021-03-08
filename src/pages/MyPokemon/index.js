import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BsBackspaceFill } from "react-icons/bs";

import { AppContext } from "../../context/AppContext";
import { globalUrl } from "../../api/restApi";
import { CardMyPokemon } from "../../components";
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

  return (
    <Wrapper>
      <br />
      <NavLink style={{ textAlign: "left" }} to="/">
        <BsBackspaceFill style={{ color: "white" }} />
      </NavLink>
      {getMyPokemon ? (
        <CatchPokemon>
          My Pokemon <br /> You have {getMyPokemon.length} pokemon
          {getMyPokemon.length > 1 && "s"}
        </CatchPokemon>
      ) : (
        <Title>You dont't have any pokemon</Title>
      )}
      <br />
      <ListWrapper>
        {getMyPokemon ? (
          getMyPokemon.map((item, idx) => (
            <CardMyPokemon
              url={`${globalUrl}/${item.id}`}
              passData={getMyPokemon[idx]}
              index={idx}
            />
          ))
        ) : (
          <NavLink to="/pokedex">
            <CatchPokemon>Go Catch Pokemon!</CatchPokemon>
          </NavLink>
        )}
      </ListWrapper>
    </Wrapper>
  );
}
