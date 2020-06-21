import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import './App.scss';


function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <Main />
    </div>
  );
}

export default App;
