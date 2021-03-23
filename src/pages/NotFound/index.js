import React from "react";
import { Link } from "react-router-dom";

import Pokeball404 from "../../assets/404-pokeball.png";
import { Wrapper, Picture, Caption, BackButton } from "./notFound.style";

export default function NotFound() {
  return (
    <Wrapper>
      <Picture src={Pokeball404} alt="pokeball404" />
      <Caption>Whoopsie! Nothing to see here.</Caption>
      <Link style={{height:"100px"}} to="/">
        <BackButton>Back to Home</BackButton>
      </Link>
    </Wrapper>
  );
}
