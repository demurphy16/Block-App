import React from "react";
import Construction from "../src/screens/Construction/Construction";
import LandingScreen from "../src/screens/LandingScreen/LandingScreen";
import LocalBusinesses from "../src/screens/LocalBusinesses/LocalBusinesses";
import Home from "../src/screens/Home/Home";
import LocalGov from "../src/screens/LocalGov/LocalGov"
import PostCreate from "../src/screens/PostCreate/PostCreate";
import PostDetail from "../src/screens/PostDetail/PostDetail";
import PostEdit from "../src/screens/PostEdit/PostEdit";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingScreen} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/construction" component={Construction} />
        <Route exact path="/businesses" component={LocalBusinesses} />
        <Route exact path="/announcements/create" component={PostCreate} />
        <Route exact path="/announcements/:id" component={PostDetail} />
        <Route exact path="/announcements/:id/edit" component={PostEdit} />
        <Route exact path="/localgov" component={LocalGov} />
      </Switch>
    </div>
  );
}

export default App;
