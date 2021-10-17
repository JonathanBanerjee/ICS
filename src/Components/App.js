import React from 'react';
import './Css/App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import Us from './About.js';
import Login from './Login.js';
import Upload from './Upload.js';
import SignUp from './SignUp.js';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={ AppDisplay }/>
          <Route path="/home"  component={Home}/>
          <Route path="/about"  component={Us}/>
          <Route path="/login"  component={Login}/>
          <Route path="/upload"  component={Upload}/>
          <Route path="/signup"  component={SignUp}/>
        </Switch>
      </div>
    </Router>
  );
}

const AppDisplay = () => {
  return(
    <div>
      <h1> app page </h1>
    </div>
  )
}

export default App;
