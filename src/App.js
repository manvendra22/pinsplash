import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './styles/App.scss';
import "./styles/common.scss";

import Landing from './containers/Landing/Landing'
import Search from './containers/Search/Search'
import Images from './containers/Images/Images'

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
