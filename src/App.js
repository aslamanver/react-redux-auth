import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "components/Dashboard"
import withAuth from "components/withAuth"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={withAuth(Dashboard)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App
