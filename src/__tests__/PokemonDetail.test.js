import mockAxios from "axios";
import { getPokemonById } from "../api/restApi";
import { render, screen, waitFor } from "@testing-library/react";
import PokemonDetail from "../pages/PokemonDetail";
import { AppProvider } from "../context/AppContext";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

describe("Pokemon detail page test", () => {
  test("1st-render pokemon detail shows loading skeleton", () => {
    render(
      <Router>
        <AppProvider>
          <PokemonDetail pokeId={1} />
        </AppProvider>
      </Router>
    );
    const skeletonLoading = screen.getByTestId("detail-loader");
    expect(skeletonLoading).toBeInTheDocument;
  });

  test("render pokemon detail data after get", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          name: "bulbasaur",
        },
      })
    );

    const pokemon1 = await waitFor(() => screen.getAllByTestId("detail-infos"));
    expect(pokemon1).toHaveTextContent("bulbasaur");
  });
});
