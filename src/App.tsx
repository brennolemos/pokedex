import React from 'react';

import GlobalStyles from './styles/global';

import Header from './components/Header';
import PokeList from './components/PokeList';

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <main className="container">
        <PokeList />
      </main>
    </div>
  );
};

export default App;
