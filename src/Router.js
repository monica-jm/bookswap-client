import { BrowserRouter, Switch, Route } from "react-router-dom";
import {LayoutApp, PrivateRoute, LoggedOutRoute} from "./components";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Bookmarks from "./pages/Bookmarks"
import Explore from "./pages/Explore"
import AddBook from "./pages/AddBook"

function Router() {
  return (
    <BrowserRouter>
      <LayoutApp>
        <Switch>
        <Route exact path="/" component={Home} />

        <LoggedOutRoute path="/auth" component={Login} />
        <LoggedOutRoute path="/signup" component={Signup} />
        <PrivateRoute path="/profile" component={Profile} />

        <Route path = "/book/create" component={AddBook}/>
        <Route path="/book/explore" component={Explore} />
        <Route path="/book/bookmarks" component={Bookmarks} />
        {/* <Route path="/book/swaps" component={Swaps} /> */}

        </Switch>
      </LayoutApp>
    </BrowserRouter>
  )
}

export default Router
