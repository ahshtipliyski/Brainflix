import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './App.scss';
//import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Header />
        <Main />
    </div>
  );
}

export default App;
