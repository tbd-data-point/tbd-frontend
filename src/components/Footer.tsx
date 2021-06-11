import '../assets/scss/Footer.scss'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import logo from '../assets/img/logo.svg'

type FooterTileProps = {
  className: string
  headline: string
  lines: { link?: string; line: string }[]
}

const FooterTile = ({ className, headline, lines }: FooterTileProps) => {
  return (
    <div className={`bottom-tile-wrapper ${className}`}>
      <Router>
        <Link to="/">
          <h4>{headline}</h4>
        </Link>
        {lines.map((l, i) => {
          return (
            <>
              {l.link && (
                <Link key={i} to={l.link}>
                  <p key={i + 100} className="bottom-tile-adress-line">
                    {l.line}
                  </p>
                </Link>
              )}
              {!l.link && (
                <p key={i} className="bottom-tile-adress-line">
                  {l.line}
                </p>
              )}
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
              <Link to="/" className="twitter"></Link>
              <Link to="/" className="linkedin">
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
                { line: 'Lorem ipsum', link: '/' },
              ]}
            />
            <FooterTile
              className="footer-contact"
              headline="Contact"
              lines={[
                {
                  line: '19833 Silicon Valley Avenue',
                },
                {
                  line: 'Palo Alto',
                },
                {
                  line: 'USA',
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
