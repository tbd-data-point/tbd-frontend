import React from 'react'
import Navbar from '../components/Navbar.js'
import '../assets/scss/LandingPage.scss'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import leaders from '../assets/img/leaders.jpg'

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="landing-wrapper">
        <div className="left-gradient" />
        <div className="landing-text-section">
          <div className="headline-wrapper">
            <h1 id="headline-no-color">
              Lorem ipsum dolor sit amet consectetur adipiscing
            </h1>
            <h1 id="headline-color">elit sed do eiusmod tempor</h1>
          </div>
          <h2 id="text-under-headline">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </h2>

          <div className="text-button-section">
            <Router>
              <Link>
                <div className="button button-filled" id="black-button">
                  Get started
                </div>
              </Link>
              <Link>
                <div className="button button-not-filled right-button">
                  See solutions
                </div>
              </Link>
            </Router>
          </div>
        </div>
        <div className="right-gradient" />
      </div>
      <div className="middle-section">
        <div className="middle-text-section">
          <h1 id="middle-section-headline">
            Why are we leaders in the industry?
          </h1>

          <h2 id="middle-section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet
            sagittis id consectetur purus ut faucibus pulvinar elementum.
          </h2>
          <div className="text-button-section">
            <Router>
              <Link>
                <div
                  className="button button-not-filled"
                  id="white-button-not-filled"
                >
                  Learn more
                </div>
              </Link>
              <Link>
                <div
                  className="button button-filled right-button"
                  id="white-button-filled"
                >
                  Signup
                </div>
              </Link>
            </Router>
          </div>
        </div>
        <img id="middle-section-image" alt="" src={leaders} />
      </div>
      <div className="content">TEST</div>
    </>
  )
}

export default LandingPage
