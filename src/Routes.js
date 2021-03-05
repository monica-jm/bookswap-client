import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Bookmarks from "./pages/Bookmarks";
import Swaps from "./pages/Swaps";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Suscribe from "./pages/Suscribe";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/explore" component={Explore} />
    <Route exact path="/bookmarks" component={Bookmarks} />
    <Route exact path="/swaps" component={Swaps} />
    <Route exact path="/profile/confirmed" component={Profile} />

    <Route exact path="/auth" component={Auth} />
    <Route exact path="/suscribe" component={Suscribe} />

  </Switch>
);

export default Routes;
