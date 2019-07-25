<<<<<<< HEAD
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from "./pages/About"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={About}/>
      </Switch>
    </Router>
  );
=======
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";
const User = React.lazy(() => import("./pages/User"));
const CreateEvent = React.lazy(() => import("./pages/CreateEvent"));
const About = React.lazy(() => import("./pages/About"));
const Register = React.lazy(() => import("./pages/Register"));
const SignIn = React.lazy(() => import("./pages/SignIn"));
class App extends Component {
  render() {
    return (
      <Router>
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/user" component={User} />
            <Route exact path="/create" component={CreateEvent} />
            <Route exact path="/about" component={About} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/signin" component={SignIn} />
            <Route render={() => <h1>404 Page not found.</h1>} />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
>>>>>>> master
}

export default App;
