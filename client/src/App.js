import React from "react";
import Home from "../src/screens/Home/Home";
import PostCreate from "../src/screens/PostCreate/PostCreate";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/announcements/create" component={PostCreate} />
      </Switch>
    </div>
  );
}

export default App;
