// library
import React from "react";
import { Link } from "react-router-dom";

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
        <Link to="/pokedex">
          <NavButton data-testid="pokedex-nav">Pokédex</NavButton>
        </Link>
        <Link to="/my-pokemon">
          <NavButton data-testid="mypokemon-nav">My Pokémon</NavButton>
        </Link>
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
