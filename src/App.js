import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from './components/navBar';
import Prices from './components/prices';
import ProductCart from './components/productCart';

import './App.css';
import './index.css';
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar/>
      <main className="container">
        <Switch>
          <Route path="/prices" component={Prices} />
          <Route path="/calculate" component={ProductCart} />
          <Redirect from="/" exact to="/prices" />
          <Redirect to="not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
