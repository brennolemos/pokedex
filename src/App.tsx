import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Header from './components/Header';
import PokeList from './components/PokeList';
import PokeInfos from './components/PokeInfos';

const App = () => {
  return (
    <HashRouter basename="/">
      <div className="App">
        <GlobalStyles />
        <Header />
        <main className="container">
          <Route path={'/'} exact>
            <PokeList />
          </Route>
          <Route path={'/:id'} component={PokeInfos} />
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
