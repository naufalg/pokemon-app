import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BsBackspaceFill } from "react-icons/bs";

import { AppContext } from "../../context/AppContext";
import { globalUrl } from "../../api/restApi";
import { CardMyPokemon } from "../../components";
import { Wrapper, ListWrapper, Title } from "./myPokemon.style";

export default function MyPokemon() {
  const getMyPokemon = JSON.parse(localStorage.getItem("myPokemon"));
  console.log(getMyPokemon);

  return (
    <Wrapper>
      <br />
      <NavLink style={{ textAlign: "left" }} to="/">
        <BsBackspaceFill style={{ color: "white"}} />
      </NavLink>
      <Title>
        My Pokemon <br /> You have {getMyPokemon.length} pokemon(s)
      </Title>
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
          <div>You dont't have any pokemon</div>
        )}
      </ListWrapper>
    </Wrapper>
  );
}
