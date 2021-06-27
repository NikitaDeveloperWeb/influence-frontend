// libries
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './layout/Layout';

const isAuth = false;
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Layout />
        </Route>
        <Route exact path="/signin">
          {(isAuth && <Layout />) || <Layout />}
        </Route>
        <Route exact path="/cart">
          {(isAuth && <Layout />) || <Layout />}
        </Route>
        <Route exact path="/bookmarks">
          {(isAuth && <Layout />) || <Layout />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
