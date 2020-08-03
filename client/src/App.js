import React from 'react';
import Header from './components/Header';
import Weather from './components/Weather';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Weather />
    </div>
  );
}

export default App;