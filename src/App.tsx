// libries
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';

function App() {
  const isAuth = false;
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Layout page={<Home />} />
        </Route>
        <Route exact path="/signin">
          {(!isAuth && <Layout />) || <Redirect to="/profile" />}
        </Route>
        <Route exact path="/cart">
          {(isAuth && <Layout />) || <Layout />}
        </Route>
        <Route exact path="/bookmarks">
          {(isAuth && <Layout />) || <Layout />}
        </Route>
        <Route exact path="/catalog/man/sneakers">
          <Layout />
        </Route>
        <Route exact path="/catalog/man/clothes">
          <Layout />
        </Route>
        <Route exact path="/catalog/man/accessories">
          <Layout />
        </Route>
        <Route exact path="/catalog/woman/sneakers">
          <Layout />
        </Route>
        <Route exact path="/catalog/woman/clothes">
          <Layout />
        </Route>
        <Route exact path="/catalog/woman/accessories">
          <Layout />
        </Route>
        <Route exact path="/catalog/answer/book">
          <Layout />
        </Route>
        <Route exact path="/profile">
          <Layout />
        </Route>
        <Route exact path="/catalog">
          <Layout />
        </Route>
        <Route exact path="/product/:id">
          <Layout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
