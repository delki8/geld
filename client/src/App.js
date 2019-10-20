import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './App/pages/Home';
import { List } from './App/pages/List';

function App() {
  return (
    <Switch>
      <>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/list' component={List} />
        </Switch>
      </>
    </Switch>
  );
}

export default App;
