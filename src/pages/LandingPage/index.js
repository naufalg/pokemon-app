// library
import React from "react";
import { NavLink } from "react-router-dom";

// components
import { FaGithub } from "react-icons/fa";
import {
  Wrapper,
  NavButton,
  InnerWrapper,
  WM,
  SocialIcon,
} from "./landingPage.style";

export default function LandingPage() {
  return (
    <Wrapper>
      <InnerWrapper>
        <NavLink to="/pokedex">
          <NavButton>Pokédex</NavButton>
        </NavLink>
        <NavLink to="/my-pokemon">
          <NavButton>My Pokémon</NavButton>
        </NavLink>
        <SocialIcon
          onClick={() => {
            window.location.href = "https://github.com/naufalg/pokemon-app";
          }}
        >
          <FaGithub />
        </SocialIcon>
        <WM>By:Naufal Ghifari</WM>
      </InnerWrapper>
    </Wrapper>
  );
}
