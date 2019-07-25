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
}

export default App;
