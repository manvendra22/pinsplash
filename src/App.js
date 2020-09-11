import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ReactQueryDevtools } from 'react-query-devtools'

import './styles/App.scss';
import "./styles/common.scss";

import LandingPage from './containers/LandingPage/LandingPage'
import SearchPage from './containers/SearchPage/SearchPage'
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
            <SearchPage />
          </Route>
          <Route path="/images/:id">
            <ImageDetails />
          </Route>
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}

export default App;
