import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './App/pages/Home';
import { Transactions } from './App/pages/Transactions';

function App() {
  return (
    <Switch>
      <>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/transactions' component={Transactions} />
        </Switch>
      </>
    </Switch>
  );
}

export default App;
