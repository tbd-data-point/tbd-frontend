import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'
import logo from '../assets/img/logo.svg'

import '../assets/scss/Navbar.scss'

const Navbar = () => {
  const [isOpen, setOpen] = useState(true)
  const closeInfo = () => {
    setOpen(false)
  }
  const [login, setLogin] = useState(false)
    const [signup, setSignup] = useState(false)
  
    const openLogin = () => {
      setLogin(!login)
    }
  
    const openSignup = () => {
      setSignup(!signup)
    }

    const enableScroll = () => {
      document.body.style.overflow = 'auto'
    }
  
    useEffect(() => {
      if (login || signup)
        document.body.style.overflow = 'hidden'
      if (!login && !signup)
        document.body.style.overflow = 'auto'
  
    })

  return (
    
    <>
    <div className={login ? 'login-section' : 'login-section close'}>
        <div onClick={openLogin} className='close-btn-wrapper'><div className='close-btn'/></div>
        <div className='btn-wrapper'>
          
            <Link to='/login'><div className='btn filled' onClick={enableScroll} >Worker Login</div></Link>
            <Link to='/login'><div className='btn not-filled' onClick={enableScroll}>Buyer Login</div></Link>
          
        </div>
      </div>
      <div className={signup ? 'signup-section' : 'signup-section close'}>
        <div onClick={openSignup} className='close-btn-wrapper'><div className='close-btn'/></div>
        <div className='btn-wrapper'>
       
            <Link to='/signup'><div className='btn filled' onClick={enableScroll}>Worker Signup</div></Link>
            <Link to='/signup'><div className='btn not-filled' onClick={enableScroll}>Buyer Signup</div></Link>
       
        </div>
      </div>
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
              <Link to='/'>
              <img alt="" className="navbar-logo" src={logo}></img>
              </Link>
              <nav>
                <Link to="/solutions">
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
                <Link to="/resources">
                  <div className="navbar-element">
                    <div className="navbar-icon" />
                    Resources
                  </div>
                </Link>
              </nav>
              <div className="navbar-right-section">
            
                  <div className="navbar-btn-border-wrap" id="signup" onClick={openSignup}>
                    <div className="navbar-btn">Signup</div>
                  </div>
               
                <div
                  className="navbar-btn-border-wrap"
                  onClick={openLogin}
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
