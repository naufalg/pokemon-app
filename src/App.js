import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { forGlobal } from "./globalStyles";
import { Global, css } from "@emotion/react";
import { IconContext } from "react-icons";

import { AppProvider } from "./context/AppContext";
import {
  Pokedex,
  PokemonDetail,
  LandingPage,
  MyPokemon,
  MyPokemonDetail,
  NotFound
} from "./pages";

function App() {
  return (
    <AppProvider>
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
            <Route exact path="/my-pokemon/:idx" component={MyPokemonDetail} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </IconContext.Provider>
    </AppProvider>
  );
}

export default App;
