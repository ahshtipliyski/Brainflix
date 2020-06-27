import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import UploadPage from './components/UploadPage/UploadPage';
import './App.scss';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/upload" exact component={UploadPage} />
          <Route path="/:id" exact component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
