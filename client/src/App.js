import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";
import setAuthToken from "./utils/setAuthToken";
import history from "./utils/history";
import PrivateRoute from "./components/routing/PrivateRoute";
import AuthState from "./context/auth/AuthState";
import EventState from "./context/event/EventState";
import About from "./pages/About"; //change to home
import User from "./pages/User";
import CreateEvent from "./pages/CreateEvent";
import UserReview from "./pages/UserReview";
import SearchEvent from "./pages/SearchEvent";
import ViewEvent from "./components/events/ViewEvent";
import Navigation from "./components/Navigation"

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <EventState>
        <Router history={history}>
          <Navigation />
          <div id="content">
            <React.Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/" component={About} />
                <PrivateRoute exact path="/create" component={CreateEvent} />
                <PrivateRoute exact path="/user" component={User} />
                <PrivateRoute exact path="/review" component={UserReview} />
                <PrivateRoute exact path="/view" component={ViewEvent} />
                <Route exact path="/search" component={SearchEvent} />
                <Route render={() => <h1>404 Page not found.</h1>} />
              </Switch>
            </React.Suspense>
         </div>
        </Router>
      </EventState>
    </AuthState>
  );
}

export default App;
