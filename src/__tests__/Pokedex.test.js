import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { AppProvider } from "../context/AppContext";
import Pokedex from "../pages/Pokedex";

jest.mock("axios");

describe("Pokedex page test", () => {
  test("1st-load pokedex page renders pokeball loader ", async () => {

    const { getByTestId } = render(
      <AppProvider>
        <Router>
          <Pokedex />
        </Router>
      </AppProvider>
    );
    expect(getByTestId("loader")).toBeInTheDocument();
  });

  test("card renders", async () => {
    const mockPokemons = [
      {
        name: "bulbasaur",
      },
      { name: "ivysaur" },
    ];

    axios.get.mockImplementation(() =>
      Promise.resolve({ data: mockPokemons })
    );

    render(
      <AppProvider>
        <Router>
          <Pokedex />
        </Router>
      </AppProvider>
    );

    await waitFor(() =>
      expect(screen.getAllByTestId("pokemons-card")).toHaveLength(
        mockPokemons.length
      )
    );
  });
});
