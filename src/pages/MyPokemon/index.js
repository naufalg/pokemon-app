import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AppContext } from "../../context/AppContext";
import { globalUrl } from "../../api/restApi";
import { CardMyPokemon } from "../../components";
import { Wrapper, ListWrapper } from "./myPokemon.style";

export default function MyPokemon() {
  const getMyPokemon = JSON.parse(localStorage.getItem("myPokemon"));
  console.log(getMyPokemon);

  return (
    <Wrapper>
      <NavLink to="/">
        <button>Back</button>
      </NavLink>
      <p>My Pokemon</p>
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
          <div>You dont't have any pokemon</div>
        )}
      </ListWrapper>
    </Wrapper>
  );
}
