import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// pages
import Home from './pages/Home/index';
import Result from './pages/Result/index';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/result' component={Result}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
