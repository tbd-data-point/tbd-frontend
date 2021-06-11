import '../assets/scss/Footer.scss'

import SocialMedia from './Footer/SocialMediaSection'
import FooterTiles from './Footer/FooterTilesSection'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="line-footer" />
        <div className="footer-wrapper">
          <SocialMedia/>
          <FooterTiles/>
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
