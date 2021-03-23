import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App test", () => {
  test("First time render app shows landing page", () => {
    render(<App />);
    const landingPageButtonPokedex = screen.getByTestId("pokedex-nav");
    const landingPageButtonMyPokemon = screen.getByTestId("mypokemon-nav");
    expect(landingPageButtonPokedex).toBeInTheDocument;
    expect(landingPageButtonMyPokemon).toBeInTheDocument;
  });
});
