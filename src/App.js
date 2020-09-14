import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ReactQueryDevtools } from 'react-query-devtools'

import './styles/App.scss';
import "./styles/common.scss";

import Header from './components/Header/Header'

// import LandingPage from './containers/LandingPage/LandingPage'
// import SearchPage from './containers/SearchPage/SearchPage'
// import ImageDetails from './containers/ImageDetails/ImageDetails'

const LandingPage = lazy(() => import('./containers/LandingPage/LandingPage'));
const SearchPage = lazy(() => import('./containers/SearchPage/SearchPage'));
const ImageDetails = lazy(() => import('./containers/ImageDetails/ImageDetails'));

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <main>
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
          </main>
        </Suspense>
      </Router>
      <ReactQueryDevtools />
    </div>
  );
}

export default App;
