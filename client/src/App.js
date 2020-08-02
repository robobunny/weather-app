import React from 'react';
import Header from './components/Header';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Weather />
      </header>
    </div>
  );
}

export default App;