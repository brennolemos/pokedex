import React from 'react';

import GlobalStyles from './styles/global';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <main className="container"></main>
    </div>
  );
};

export default App;
