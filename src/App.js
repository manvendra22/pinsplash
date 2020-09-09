import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

import Landing from './containers/Landing'
import Search from './containers/Search'
import Images from './containers/Images'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Landing />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/images">
            <Images />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
