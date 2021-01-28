import React from 'react'
import '../assets/scss/Footer.scss'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import logo from '../assets/img/logo.svg'

const FooterTile = (props) => {
  return (
    <div className={`bottom-tile-wrapper ${props.className}`}>
      <Router>
        <Link>
          <h4>{props.headline}</h4>
        </Link>
        {props.lines.map((l) => {
          return (
            <>
              {l.link && (
                <Link to={l.link}>
                  <p className="bottom-tile-adress-line">{l.line}</p>
                </Link>
              )}
              {!l.link && <p className="bottom-tile-adress-line">{l.line}</p>}
            </>
          )
        })}
      </Router>
    </div>
  )
}

const Footer = () => {
  return (
    <>
      <footer>
        <div className="line-footer" />
        <div className="footer-wrapper">
          <div className="logos">
            <Router>
              <Link to="/" className="tbd">
                <img alt="" src={logo} className="tbd-logo" />
              </Link>
              <Link to="/" className="facebook">
                <IconContext.Provider
                  value={{
                    color: '#fff',
                    size: '2.3em',
                  }}
                >
                  <FaFacebookF />
                </IconContext.Provider>
              </Link>
              <Link className="twitter">
                <IconContext.Provider value={{ color: '#fff', size: '2.3em' }}>
                  <FaTwitter />
                </IconContext.Provider>
              </Link>
              <Link className="linkedin">
                <IconContext.Provider
                  value={{
                    color: '#fff',
                    size: '2.3em',
                  }}
                >
                  <FaLinkedinIn />
                </IconContext.Provider>
              </Link>
            </Router>
          </div>
          <div className="links">
            <FooterTile
              className="footer-solutions"
              headline="Solutions"
              lines={[
                {
                  line: 'Lorem ipsum dolor imit',
                  link: '/',
                },
                { line: 'Lorem ipsum', link: '/' },
                { line: 'Lorem ipsum', link: '/' },
              ]}
            />

            <FooterTile
              className="footer-resources"
              headline="Resources"
              lines={[
                { line: 'FAQ', link: '/' },
                { line: 'Lorem ipsum', link: '/' },
                { line: 'Lorem ipsum dolor imit', link: '/' },
              ]}
            />
            <FooterTile
              className="footer-company"
              headline="Lorem Ipsum"
              lines={[
                { line: 'Lorem ipsum', link: '/' },
                { line: 'Lorem ipsum', link: '/' },
                { line: 'Lorem ipsum', link: '/' },
              ]}
            />
            <FooterTile
              className="footer-industries"
              headline="Lorem Ipsum"
              lines={[
                { line: 'Lorem ipsum', link: '/' },
                { line: 'Lorem ipsum', link: '/' },
                { line: 'Lorem ipsum', link: '/' },
              ]}
            />
            <FooterTile
              className="footer-contact"
              headline="Adress 1"
              lines={[
                {
                  line: '19833 Silicon Valley Avenue',
                  link: null,
                },
                {
                  line: 'Palo Alto',
                  link: null,
                },
                {
                  line: 'USA',
                  link: null,
                },
                { line: '+1 (252) 23 328', link: '/' },
              ]}
            />
          </div>
          <div className="line" />
          <div className="copyright">
            <p>© 2021 TBD</p>
            <p>Lorem Ipsum</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
