import React from "react";
import { render, screen, waitFor, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import axiosMock from "axios";
import { AppProvider } from "../context/AppContext";
import Pokedex from "../pages/Pokedex";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

// jest.mock("axios");

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

    axiosMock.get.mockResolvedValueOnce({
      data: [{ name: "bulbasaur" }, { name: "ivysaur" }],
    });

    // axios.get.mockImplementation(() =>
    //   Promise.resolve({ data: mockPokemons })
    // );

    const { getAllByTestId } = render(
      <AppProvider>
        <Router>
          <Pokedex />
        </Router>
      </AppProvider>
    );

    const resolveCard = await waitFor(() => getAllByTestId("pokemons-card"));

    expect(resolveCard).toHaveTextContent("bulbasaur");

    // await waitFor(() =>
    //   expect(screen.getAllByTestId("pokemons-card")).toHaveLength(
    //     mockPokemons.length
    //   )
    // );
  });

  // test("scroll top show on scroll", () => {
  //   const { getByTestId } = render(
  //     <AppProvider>
  //       <Router>
  //         <Pokedex />
  //       </Router>
  //     </AppProvider>
  //   );

  //   fireEvent.scroll
  // })
});
