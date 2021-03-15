import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { forGlobal } from "./globalStyles";
import { Global, css } from "@emotion/react";
import { IconContext } from "react-icons";

import { ApolloProvider } from "@apollo/client";
import { client } from "./api/graphQl";
import { AppProvider } from "./context/AppContext";
import {
  Pokedex,
  PokemonDetail,
  LandingPage,
  MyPokemon,
  MyPokemonDetail,
  NotFound,
  PokedexGraphQl,
} from "./pages";

function App() {
  return (
    <AppProvider>
      <ApolloProvider client={client}>
        <IconContext.Provider value={{ className: "react-icons" }}>
          <Router>
            <Global
              styles={css`
                ${forGlobal}
              `}
            />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/pokedex" component={Pokedex} />
              <Route exact path="/pokedex/:id" component={PokemonDetail} />
              <Route exact path="/my-pokemon" component={MyPokemon} />
              <Route
                exact
                path="/my-pokemon/:idx"
                component={MyPokemonDetail}
              />
              <Route exact path="/graphql-pokedex" component={PokedexGraphQl} />
              <Route exact path="/graphql-pokedex/:id">
                <PokemonDetail isGraph={true} />
              </Route>
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </IconContext.Provider>
      </ApolloProvider>
    </AppProvider>
  );
}

export default App;
