import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Aside from './components/Aside/Aside';
import './App.scss';
import CommentsSection from './components/CommentsSection/CommentsSection';

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <About />
        <CommentsSection />
        <Aside />
    </div>
  );
}

export default App;
