import React from "react";
import { render, screen, act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "../context/AppContext";
import Pokedex from "../pages/Pokedex";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        name: "bulbasaur",
      }),
  })
);

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

  test("card renders copy test", async () => {
    await act(async () =>
      render(
        <AppProvider>
          <Router>
            <Pokedex />
          </Router>
        </AppProvider>
      )
    );
    expect(screen.getByText("bulbasaur"));
  });
});
