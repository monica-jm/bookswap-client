import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import WishList from "./pages/WishList";
import Swaps from "./pages/Swaps";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/auth" component={Auth} />
    <Route exact path="/explore" component={Explore} />
    <Route exact path="/wish-list" component={WishList} />
    <Route exact path="/swaps" component={Swaps} />
    <Route exact path="/profile" component={Profile} />

  </Switch>
);

export default Routes;
