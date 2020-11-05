import React, { useState } from "react";
import Construction from "../src/screens/Construction/Construction";
import LandingScreen from "../src/screens/LandingScreen/LandingScreen";
import LocalBusinesses from "../src/screens/LocalBusinesses/LocalBusinesses";
import Home from "../src/screens/Home/Home";
import Hotline from "../src/screens/Hotline/Hotline"
import LocalGov from "../src/screens/LocalGov/LocalGov";
import PostCreate from "../src/screens/PostCreate/PostCreate";
import PostDetail from "../src/screens/PostDetail/PostDetail";
import PostEdit from "../src/screens/PostEdit/PostEdit";
import CreateAccount from "../src/screens/CreateAccount/CreateAccount";
import Login from "../src/screens/Login/Login";
import Layout from "../src/components/Shared/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import "./App.css";


function App() {
  const [signIn, setSignIn] = useState(false);

  return (
    <Layout signIn={signIn} setSignIn={setSignIn}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingScreen />
          </Route>
          <Route exact path="/create-account">
            <CreateAccount signIn={signIn} setSignIn={setSignIn} />
          </Route>
          <Route exact path="/login">
            <Login signIn={signIn} setSignIn={setSignIn} />
          </Route>
          <Route exact path="/home">
            <Home signIn={signIn} setSignIn={setSignIn} />
          </Route>
          <Route exact path="/construction" component={Construction} />
          <Route exact path="/businesses" component={LocalBusinesses} />
          <Route exact path="/announcements/create" component={PostCreate} />
          <Route exact path="/announcements/:id" component={PostDetail} />
          <Route exact path="/announcements/:id/edit" component={PostEdit} />
          <Route exact path="/localgov" component={LocalGov} />
          <Route exact path="/hotline" component={Hotline} />
        </Switch>
      </div>
    </Layout>
  );
}

export default App;
