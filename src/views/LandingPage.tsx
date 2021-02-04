import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

import leaders from '../assets/img/leaders.jpg'
import '../assets/scss/LandingPage.scss'
import '../assets/scss/BottomTile.scss'

const LandingPage = () => {
  const [login, setLogin] = useState(false)
  const [signup, setSignup] = useState(false)

  const openLogin = () => {
    setLogin(!login)
  }

  const openSignup = () => {
    setSignup(!signup)
  }

  useEffect(() => {
    if (login || signup)
      document.body.style.overflow = 'hidden'
    if (!login && !signup)
      document.body.style.overflow = 'auto'

  })

  return (
    <>
      <Navbar loginFunction={openLogin} signupFunction={openSignup}/>
      <div className={login ? 'login-section' : 'login-section close'}>
        <div onClick={openLogin} className='close-btn-wrapper'><div className='close-btn'/></div>
        <div className='btn-wrapper'>
          
            <Link to='/login'><div className='btn filled'>Worker Login</div></Link>
            <Link to='/login'><div className='btn not-filled'>Buyer Login</div></Link>
          
        </div>
      </div>
      <div className={signup ? 'signup-section' : 'signup-section close'}>
        <div onClick={openSignup} className='close-btn-wrapper'><div className='close-btn'/></div>
        <div className='btn-wrapper'>
       
            <Link to='/signup'><div className='btn filled'>Worker Signup</div></Link>
            <Link to='/signup'><div className='btn not-filled'>Buyer Signup</div></Link>
       
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
      
              <Link to='/'>
                <div className="button button-filled" id="black-button">
                  Get started
                </div>
              </Link>
              <Link to='/'>
                <div className="button button-not-filled right-button">
                  See solutions
                </div>
              </Link>
     
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
    
              <Link to='/'>
                <div
                  className="button button-not-filled"
                  id="white-button-not-filled"
                >
                  Learn more
                </div>
              </Link>
              <Link to='/'>
                <div
                  className="button button-filled right-button"
                  id="white-button-filled"
                  onClick={openSignup}
                >
                  Signup
                </div>
              </Link>
         
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
        
            bg="linear-gradient(90deg, rgba(0,243,255,1) 0%, rgba(175,255,49,1) 100%)"
          />
          <BottomTile
            headline="Lorem Ipsum"
            description="Phasellus sit amet, sodales eu, purus. Phasellus aliquet quis, justo. Nulla porta sapien eleifend mauris sit amet, nonummy commodo magna, sollicitudin eget, dignissim a, hendrerit "
            link="/test1"
      
            bg="radial-gradient(circle, rgba(0,243,255,1) 0%, rgba(175,255,49,1) 100%)"
          />
          <BottomTile
            headline="Lorem Ipsum"
            description="Phasellus sit amet, sodales eu, purus. Phasellus aliquet quis, justo. Nulla porta sapien eleifend mauris sit amet, nonummy commodo magna, sollicitudin eget, dignissim a, hendrerit "
            link="/test3"
         
            bg="linear-gradient(-90deg, rgba(0,243,255,1) 0%, rgba(175,255,49,1) 100%)"
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

type BottomTileProps = {
  bg: string;
  headline: string;
  description: string;
  link: string;
}

const BottomTile = ({bg, headline, description, link}:BottomTileProps) => {
  return (
    <div className="tile-wrapper">
      <div className="thumbnail" style={{ background: bg }} />
      <h2 className="headline">{headline}</h2>
      <p className="description">{description}</p>
        <Link to={link}>
          <div className="link-wrapper">
            <div className="link-text">See more</div>
            <div className="link-icon" />
          </div>
        </Link>
    </div>
  )
}

export default LandingPage
