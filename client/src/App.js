import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";
const User = React.lazy(() => import("./pages/User"));
const CreateEvent = React.lazy(() => import("./pages/CreateEvent"));
const About = React.lazy(() => import("./pages/About"));

class App extends Component {
  render() {
    return (
      <Router>
        <React.Suspense fallback={<Loading />}>
          <Switch>
            {" "}
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user" component={User} />
            <Route exact path="/create" component={CreateEvent} />
            <Route render={() => <h1>404 Page not found.</h1>} />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
