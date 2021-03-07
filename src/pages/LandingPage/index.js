import React from "react";
import { NavLink } from "react-router-dom";

import { Wrapper, NavButton, InnerWrapper } from "./landingPage.style";

export default function LandingPage() {
  return (
    <Wrapper>
      <InnerWrapper>
        <NavLink to="/pokedex">
          <NavButton>Pokedex</NavButton>
        </NavLink>
        <NavLink to="/my-pokemon">
          <NavButton>MyPokemon</NavButton>
        </NavLink>
      </InnerWrapper>
    </Wrapper>
  );
}
