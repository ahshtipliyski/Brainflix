import React from 'react';
import Header from './Comps/Header/Header';
import Main from './Comps/Main/Main';
import UploadPage from './Comps/UploadPage/UploadPage';
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
