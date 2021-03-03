import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { forGlobal } from "./globalStyles";
import { Global, css } from "@emotion/react";

import { LandingPage, PokemonDetail } from "./pages";

function App() {
  return (
    <Router>
      <Global
        styles={css`
          ${forGlobal}
        `}
      />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/pokemon/:id" component={PokemonDetail} />
      </Switch>
    </Router>
  );
}

export default App;
