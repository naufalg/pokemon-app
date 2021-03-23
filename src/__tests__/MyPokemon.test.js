import React from "react";
import { render, screen } from "@testing-library/react";
import MyPokemon from "../pages/MyPokemon";
import { BrowserRouter as Router } from "react-router-dom";

describe("My Pokemon page test", () => {
  test("1st-render My Pokemon page shows no pokemon warning", () => {
    render(
      <Router>
        <MyPokemon />
      </Router>
    );
    const notYetCaughtPokemon = screen.getByText("You dont't have any pokemon");
    expect(notYetCaughtPokemon).toBeInTheDocument;
  });
});
