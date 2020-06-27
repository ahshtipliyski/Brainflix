import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import UploadPage from './Components/UploadPage/UploadPage';
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
