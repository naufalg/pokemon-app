import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import normalize from "normalize.css";

import { LandingPage, PokemonDetail } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/pokemon" component={PokemonDetail} />
      </Switch>
    </Router>
  );
}

export default App;
