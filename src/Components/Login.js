import './Css/Login.css';
import React, { Component } from 'react';
import Nav from './Nav.js';

class Login extends Component {

  componentDidMount() {
    sessionStorage.setItem("SessionName","-");
  }

  signup() {
    window.location.replace("/signup");
  }

  formSumbit = async e => {
    e.preventDefault();
    var username = e.target[0].value;
    var password = e.target[1].value;
    const response = await fetch('http://localhost:8000/logincheck', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: [username, password] }),
    });
    const body = await response.json();
    if(body === false){
      alert("INVALID");
    }
    if(body === true){
      sessionStorage.setItem('SessionName', username)
      window.location.replace("/home");
    }
  }

  render() {
    return(
      <div className="Login">
        <header className="Login-header">
        </header>
        <div className="Login-form">
          <h2 className="Login-text">
            Login
          </h2>
          <form onSubmit= {this.formSumbit} className="Login-form-sub">
            <label for="fname">Username:</label><br />
            <input type="text" id="username" name="username" /><br /><br />
            <label for="lname">Password:</label><br />
            <input type="password" id="password" name="password" /><br /><br />
            <input type="submit" value="Submit" className="Login-submit"/>
          </form>
          <button type="submit" onClick={ this.signup } className="signup-button">Sign up</button>
        </div>
      </div>
    );
  }
}

export default Login;
