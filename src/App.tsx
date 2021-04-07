import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BoundingBox from "./BoundingBox";
import Game from "./Game";
import Home from "./Home";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/bounding-box" exact component={BoundingBox} />
          <Route path="/bubble-burst" exact component={Game} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
