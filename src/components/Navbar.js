import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import logo from '../assets/img/logo.svg'

import '../assets/scss/Navbar.scss'

const Navbar = () => {
  return (
    <>
      <div className="upper-section-wrapper">
        <Router>
          <div className="upper-info">
            <div className="upper-info-prompt">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="close" />
          </div>
          <div className="navbar-background">
            <div className="navbar-wrapper">
              <img alt="" class="navbar-logo" src={logo}></img>
              <nav className="navbar">
                <Link id="home" to="/">
                  <div className="navbar-element">
                    <div className="navbar-icon" />
                    Solutions
                  </div>
                </Link>
                <Link to="/about">
                  <div className="navbar-element">
                    <div className="navbar-icon" />
                    Company
                  </div>
                </Link>
                <Link to="/users">
                  <div className="navbar-element">
                    <div className="navbar-icon" />
                    Industries
                  </div>
                </Link>
                <Link to="/users">
                  <div className="navbar-element">
                    <div className="navbar-icon" />
                    Resources
                  </div>
                </Link>
              </nav>
              <div className="navbar-right-section">
                <Link>
                  <div className="navbar-btn-border-wrap" id="signup">
                    <div className="navbar-btn">Signup</div>
                  </div>
                </Link>
                <Link>
                  <div className="navbar-btn-border-wrap">
                    <div className="navbar-btn">Login</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Router>
        <div className="line" />
      </div>
    </>
  )
}

export default Navbar
