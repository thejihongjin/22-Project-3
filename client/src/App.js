import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";
import Navigation from "./components/Navigation";
import { UserProvider } from "./utils/userContext";
import setAuthToken from "./utils/setAuthToken";
import history from "./utils/history";
import PrivateRoute from "./components/routing/PrivateRoute";
import AuthState from "./context/auth/AuthState";
const About = React.lazy(() => import("./pages/About")); // change to Home
const User = React.lazy(() => import("./pages/User"));
const CreateEvent = React.lazy(() => import("./pages/CreateEvent"));
const UserReview = React.lazy(() => import("./pages/UserReview"));
const SearchEvent = React.lazy(() => import("./pages/SearchEvent"));

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <Router history={history}>
        <UserProvider>
          <React.Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" component={About} />
              <PrivateRoute exact path="/user" component={User} />
              <Route exact path="/create" component={CreateEvent} />
              <Route exact path="/review" component={UserReview} />
              <Route exact path="/search" component={SearchEvent} />
              <Route render={() => <h1>404 Page not found.</h1>} />
            </Switch>
          </React.Suspense>
        </UserProvider>
      </Router>
    </AuthState>
  );
}

export default App;
