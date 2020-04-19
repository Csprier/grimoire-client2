import React, { useEffect } from 'react';
import { Router, Switch, Route } from "react-router-dom";

// UTIL
import Util from './utility/util';

// CSS
import './App.css';

// COMPONENTS
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

// History object
import history from './history';

function App() {
  useEffect(() => {
    if (Util.DATA.loadAuthToken()) {
      console.log(Util.DATA.loadAuthToken())
      Util.DATA.startPeriodicRefresh();
    }
  });

  return (
    <Router history={history}>
      <div className="App">
        <header className="App-header">
          Grimoire
        </header>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
