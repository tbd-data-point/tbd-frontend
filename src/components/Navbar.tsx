import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import logo from '../assets/img/logo.svg'

import '../assets/scss/Navbar.scss'

type NavbarProps = {
  loginFunction: () => void;
  signupFunction: () => void;
}

const Navbar = ({loginFunction, signupFunction}:NavbarProps) => {
  const [isOpen, setOpen] = useState(true)
  const closeInfo = () => {
    setOpen(false)
  }
  return (
    <>
      <div className="upper-section-wrapper">
        <div className={`upper-info ${!isOpen && 'close'}`}>
          <div className="upper-info-prompt">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="close-wrapper" onClick={closeInfo}>
            <div className="close-btn" />
          </div>
        </div>
        <Router>
          <div className="navbar-background">
            <div className="navbar-wrapper">
              <img alt="" className="navbar-logo" src={logo}></img>
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
            
                  <div className="navbar-btn-border-wrap" id="signup" onClick={signupFunction}>
                    <div className="navbar-btn">Signup</div>
                  </div>
               
                <div
                  className="navbar-btn-border-wrap"
                  onClick={loginFunction}
                >
                  <div className="navbar-btn">Login</div>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </div>
    </>
  )
}

export default Navbar
