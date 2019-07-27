import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";
import Navigation from "./components/Navigation";
const About = React.lazy(() => import("./pages/About"));
const User = React.lazy(() => import("./pages/User"));
const CreateEvent = React.lazy(() => import("./pages/CreateEvent"));
const UserReview = React.lazy(() => import("./pages/UserReview"));
const SearchEvent = React.lazy(() => import("./pages/SearchEvent"));

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <React.Suspense fallback={<Loading />}>
          <Switch>
            {" "}
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user" component={User} />
            <Route exact path="/create" component={CreateEvent} />
            <Route exact path="/review" component={UserReview} />
            <Route exact path="/search" component={SearchEvent} />
            <Route render={() => <h1>404 Page not found.</h1>} />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
