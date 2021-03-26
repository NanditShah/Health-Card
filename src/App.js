import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Register from './Components/Register'
import Login from './Components/Login';
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from './Components/Footer'
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  return (
    <>
      <Navbar />
      <div >
        <Switch>
          <Route exact path='/HealthCard/' component={Home}></Route>
          <Route exact path='/HealthCard/Home' component={Home}></Route>
          <Route exact path='/HealthCard/Register' component={Register}></Route>
          <Route exact path='/HealthCard/Login' component={Login}></Route>
          <Route exact path='/HealthCard/Contact' component={Contact}></Route>
          <Route exact path='/HealthCard/About' component={About}></Route>
          <Redirect to="/HealthCard/"></Redirect>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
