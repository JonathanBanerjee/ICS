import React from 'react';
import './Css/Nav.css';
import logo from './Images/HobLogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div class="container">
        <div class="row">
          <div class="col-1">
            <img src={logo} className="logo" alt="Oh Huw" />
          </div>
          <div class="col-11">
            <ul className="nav-links">
              <Link to="/home" style={{textDecoration: "none", color: "white"}}>
                 <li>Home</li>
                 </Link>
              <Link to="/About" style={{textDecoration: "none", color: "white"}}>
                <li>About Us</li>
              </Link>
              <Link to="/Login" style={{textDecoration: "none", color: "white"}}>
                <li>Login</li>
              </Link>
              <Link to="/Upload" style={{textDecoration: "none", color: "white"}}>
                <li>Upload</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
