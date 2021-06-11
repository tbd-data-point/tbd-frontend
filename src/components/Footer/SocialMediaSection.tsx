import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import logo from '../../assets/img/logo.svg'

const SocialMedia = () => {

    const iconStyle = { color: '#fff', size: '2.3em'};

    const SocialMediaLinks = [
        {
            href: "/",
            className: "facebook",
            icon: <FaFacebookF />
        },
        {
            href: "/",
            className: "twitter",
            icon: <FaTwitter />
        },
        {
            href: "/",
            className: "linkedin",
            icon: <FaLinkedinIn />
        },
    ];

    return   <div className="logos">
        <Router>
        <Link to="/" className="tbd">
            <img alt="" src={logo} className="tbd-logo" />
        </Link>
        {SocialMediaLinks.map(elem => <Link to={elem["href"]} className={elem["className"]}>
            <IconContext.Provider
            value={iconStyle}>
            {elem["icon"]}
            </IconContext.Provider>
        </Link>)}
        </Router>
    </div>
};

export default SocialMedia;