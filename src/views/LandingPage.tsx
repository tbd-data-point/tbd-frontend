import { Navbar, Footer } from '../components'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";

import leaders from '../assets/img/leaders.jpg'
import '../assets/scss/LandingPage.scss'
import '../assets/scss/BottomTile.scss'
import "swiper/swiper.min.css";

import LandingPageData from "../assets/data/LandingPage.json";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="landing-wrapper">
        <div className="left-gradient" />
        <div className="landing-text-section">
          <div className="headline-wrapper">
            <h1 id="headline-no-color">
              Lorem ipsum dolor sit amet consectetur
              adipiscing
            </h1>
            <h1 id="headline-color">
              elit sed do eiusmod tempor
            </h1>
          </div>
          <h2 id="text-under-headline">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.{' '}
          </h2>

          <div className="text-button-section">
            <Link to="/">
              <div
                className="button button-filled"
                id="black-button"
              >
                Get started
              </div>
            </Link>
            <Link to="/">
              <div className="button button-not-filled right-button">
                See solutions
              </div>
            </Link>
            <Link to="/">
              <div
                className="button button-filled hidden-button"
                id="black-button"
              >
                Sign up
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
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
            Aliquet sagittis id consectetur purus ut
            faucibus pulvinar elementum.
          </h2>
          <div className="text-button-section">
            <Link to="/">
              <div
                className="button button-not-filled staying-button"
                id="white-button-not-filled"
              >
                Learn more
              </div>
            </Link>
            <Link to="/">
              <div
                className="button button-filled right-button staying-button"
                id="white-button-filled"
              >
                Signup
              </div>
            </Link>
          </div>
        </div>
        <img
          id="middle-section-image"
          alt=""
          src={leaders}
        />
      </div>
      <div className="bottom-section-wrapper">
        <div className="bottom-headline-wrapper">
          <div className="bottom-headline-section">
            <h1 id="headline-no-color">Lorem</h1>
            <h1 id="headline-gradient">
              &nbsp;ipsum dolor sit
            </h1>
          </div>
          <h2 id="bottom-subtitle">
            Lorem ipsum dolor sit amet enim. Etiam
            ullamcorper. Suspendisse a pellentesque dui, non
            felis. Maecenas malesuada elit lectus felis,
            malesuada ultricies
          </h2>
        </div>
        <div className="bottom-tiles-wrapper">
          {LandingPageData["sliders"].map((tile, index) => <BottomTile
              key = {"tile"+index}
              classes = "tile-wrapper tiles-non-rwd"
              headline={tile["headline"]}
              description={tile["description"]}
              link={tile["link"]}
              bg={tile["bg"]}
            />)}
            <Swiper className="tiles-rwd" spaceBetween={2}
                    slidesPerView={1}
                    loop = {true}>
            {LandingPageData["sliders"].map((tile, index) => <SwiperSlide className = "swiper-slide-container"><BottomTile
              key = {"tileRWD"+index}
              classes = "tile-wrapper tiles-rwd"
              headline={tile["headline"]}
              description={tile["description"]}
              link={tile["link"]}
              bg={tile["bg"]}
            /></SwiperSlide>)}
            </Swiper>
        </div>
      </div>
      <Footer />
    </>
  )
}

type BottomTileProps = {
  bg: string
  headline: string
  description: string
  link: string
  classes: string
}

const BottomTile = ({
  bg,
  headline,
  description,
  link,
  classes
}: BottomTileProps) => {
  return (
    <div className={classes}>
      <div
        className="thumbnail"
        style={{ background: bg }}
      />
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
