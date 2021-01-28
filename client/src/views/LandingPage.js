import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, BrowserRouter as Router } from 'react-router-dom'

import leaders from '../assets/img/leaders.jpg'
import '../assets/scss/LandingPage.scss'
import '../assets/scss/BottomTile.scss'

const LandingPage = () => {
  const [isLoginOpen, setLoginOpen] = useState(false)

  const openLogin = () => {
    setLoginOpen(true)
  }

  return (
    <>
      <Navbar loginFunction={openLogin} />
      <div
        className={`login-section-wrapper ${
          !isLoginOpen && 'login-section-wrapper-close'
        }`}
      >
        <div
          className={`login-section ${!isLoginOpen && 'login-section-close'}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
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
      <div className="bottom-section-wrapper">
        <div className="bottom-headline-wrapper">
          <div className="bottom-headline-section">
            <h1 id="headline-no-color">Lorem</h1>
            <h1 id="headline-gradient">&nbsp;ipsum dolor sit</h1>
          </div>
          <h2 id="bottom-subtitle">
            Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
            pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
            malesuada ultricies
          </h2>
        </div>
        <div className="bottom-tiles-wrapper">
          <BottomTile
            headline="Lorem Ipsum"
            description="Phasellus sit amet, sodales eu, purus. Phasellus aliquet quis, justo. Nulla porta sapien eleifend mauris sit amet, nonummy commodo magna, sollicitudin eget, dignissim a, hendrerit "
            link="/test2"
            source={leaders}
            bg="linear-gradient(90deg, rgba(0,243,255,1) 0%, rgba(175,255,49,1) 100%)"
          />
          <BottomTile
            headline="Lorem Ipsum"
            description="Phasellus sit amet, sodales eu, purus. Phasellus aliquet quis, justo. Nulla porta sapien eleifend mauris sit amet, nonummy commodo magna, sollicitudin eget, dignissim a, hendrerit "
            link="/test1"
            source={leaders}
            bg="radial-gradient(circle, rgba(0,243,255,1) 0%, rgba(175,255,49,1) 100%)"
          />
          <BottomTile
            headline="Lorem Ipsum"
            description="Phasellus sit amet, sodales eu, purus. Phasellus aliquet quis, justo. Nulla porta sapien eleifend mauris sit amet, nonummy commodo magna, sollicitudin eget, dignissim a, hendrerit "
            link="/test3"
            source={leaders}
            bg="linear-gradient(-90deg, rgba(0,243,255,1) 0%, rgba(175,255,49,1) 100%)"
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

const BottomTile = (props) => {
  return (
    <div className="tile-wrapper">
      <div className="thumbnail" style={{ background: props.bg }} />
      <h2 className="headline">{props.headline}</h2>
      <p className="description">{props.description}</p>

      <Router>
        <Link to={props.link}>
          <div className="link-wrapper">
            <div className="link-text">See more</div>
            <div className="link-icon" />
          </div>
        </Link>
      </Router>
    </div>
  )
}

export default LandingPage
