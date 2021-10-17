import './Css/SignUp.css';
import React, { Component } from 'react';
import Nav from './Nav.js';

class SignUp extends Component {

  componentDidMount() {
    sessionStorage.setItem("SessionName","-");
  }

  render() {
    return(
      <div className="SignUp">
        <header className="SignUp-header">
        </header>
        <div className="SignUp-form">
          <h2 className="SignUp-text">
            Login
          </h2>
          <form onSubmit= {this.formSumbit} className="Login-form-sub">
            <label for="fname">Username:</label><br />
            <input type="text" id="username" name="username" placeholder= "Username"/><br /><br />
            <label for="lname">Password:</label><br />
            <input type="password" id="password1" name="passwordmain" placeholder = "Password" /><br /><br />
            <label for="lname">Confirm Password:</label><br />
            <input type="password" id="password2" name="passwordcomparison" placeholder = "Confirm Password" /><br /><br />
            <input type="submit" value="Submit" className="SignUp-submit"/>
          </form>
        </div>
      </div>
    );
  }

  formSumbit = async e =>
  {
      e.preventDefault();
      this.verifyPassword();
  }

  verifyPassword() {
    var pw = document.getElementById("password1");
    var pw2 = document.getElementById("password2");
    //Check to see password field is empty.
    if(pw.value == ""){
        pw.value = "";
        pw2.value = "";
        pw.placeholder = "Please enter a password."
    }else if(pw.value.length<8 || pw.length>15){
      pw.value = "";
      pw2.value = "";
      pw.placeholder = "Please enter a password with more than 8 characters."
    }else{
      if(pw.value != pw2.value)
      {
          alert("Passwords did not match");
      }else{
          alert("Password created successfully");
      }
    }
  }
}

export default SignUp;
