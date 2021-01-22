import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import logo from '../assets/img/logo.svg'

import './scss/Navbar.scss'

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
          <div className="navbar-wrapper">
            <img alt="" class="navbar-logo" src={logo}></img>
            <nav className="navbar">
              <div className="navbar-element">
                <Link id="home" to="/">
                  Solutions
                </Link>
                <div className="drop-down-icon" />
              </div>

              <div className="navbar-element">
                <Link to="/about">Company</Link>
                <div className="drop-down-icon" />
              </div>

              <div className="navbar-element">
                <Link to="/users">Industries</Link>
                <div className="drop-down-icon" />
              </div>
              <div className="navbar-element">
                <Link to="/users">Resources</Link>
                <div className="drop-down-icon" />
              </div>
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
          {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
        </Router>
        <div className="line" />
        <div className="drop-down-content-wrapper">
          <div className="drop-down-content">
            <p>TEST</p>
          </div>
        </div>
      </div>

      <div className="content">TEST</div>
    </>
  )
}

export default Navbar
