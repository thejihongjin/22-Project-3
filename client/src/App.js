import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";
import { UserProvider } from "./utils/userContext";
import setAuthToken from "./utils/setAuthToken";
import history from "./utils/history";
import PrivateRoute from "./components/routing/PrivateRoute";
import AuthState from "./context/auth/AuthState";
import EventState from "./context/event/EventState";
import Home from "./pages/Home"; 
import User from "./pages/User";
import CreateEvent from "./pages/CreateEvent";
import UserReview from "./pages/UserReview";
import SearchEvent from "./pages/SearchEvent";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <EventState>
        <Router history={history}>
          <UserProvider>
            <React.Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute exact path="/user" component={User} />
                <PrivateRoute exact path="/create" component={CreateEvent} />
                <PrivateRoute exact path="/review" component={UserReview} />
                <PrivateRoute exact path="/search" component={SearchEvent} />
                <Route render={() => <h1>404 Page not found.</h1>} />
              </Switch>
            </React.Suspense>
          </UserProvider>
        </Router>
      </EventState>
    </AuthState>
  );
}

export default App;
