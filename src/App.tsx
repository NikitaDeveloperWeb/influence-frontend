// libries
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './layout/Layout';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Layout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
