import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './styles/App.scss';
import "./styles/common.scss";

import LandingPage from './containers/LandingPage/LandingPage'
import ImageDetails from './containers/ImageDetails/ImageDetails'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/search">
            <LandingPage />
          </Route>
          <Route path="/images/:id">
            <ImageDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
