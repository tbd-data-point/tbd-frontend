import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom'

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

export default FooterTile;