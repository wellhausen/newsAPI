import React from "react";
import News from "./components/news";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={News} />
      </Switch>
    </div>
  );
}

export default App;
