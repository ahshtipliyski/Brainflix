import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Comments from './components/Comments/Comments';
import './App.scss';

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <About />
        <Comments />
    </div>
  );
}

export default App;
