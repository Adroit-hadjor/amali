import './App.scss';
import Homepage from './pages/homepage';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import MyRouter from './components/Router';
import React, {useState} from "react";
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';



function App() {
  return (
    <Router >
   
      <Switch>
              
              <MyRouter 
              path="/"
              page={<Homepage />}
              exact={true}
              />
             <MyRouter 
              path="/cart"
              page={<Cart />}
              exact={true}
              />
                           <MyRouter 
              path="/checkout"
              page={<Checkout />}
              exact={true}
              />
              </Switch>
        
              </Router>
             
 
  );
}

export default App;
