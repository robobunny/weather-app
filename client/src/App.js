import React from 'react';
import Header from './components/Header';
import Weather from './components/Weather';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Weather />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;