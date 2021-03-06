import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
//----------Books----------
import AddBook from "./pages/AddBook";
import BookDetail from "./pages/BookDetail";
import Explore from "./pages/Explore";
import Bookmarks from "./pages/Bookmarks";
import Swaps from "./pages/Swaps";
//----------User----------
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Suscribe from "./pages/Suscribe";
//----------Place----------
const CreatePlace =()=> <h1>Create Place</h1>
const PlaceDetail =()=> <h1>Place Detail</h1>

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path = "/book/create" component={AddBook}/>
      <Route path = "/book/:bookId" component={BookDetail}/>
      <Route path="/book/explore" component={Explore} />
      <Route path="/book/bookmarks" component={Bookmarks} />
      <Route path="/book/swaps" component={Swaps} />

      <Route path="/auth" component={Login} />
      <Route path="/auth/profile" component={Profile} />
      <Route path="/signup" component={Signup} />
      <Route path="/suscribe" component={Suscribe} />

      <Route path="/place/new" component={CreatePlace} />
      <Route path="/place/:placeId" component={PlaceDetail} />
  </Switch>
  </BrowserRouter>
);

export default Router;
