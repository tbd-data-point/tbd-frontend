import React from "react";
import FooterTile from "./FooterTile";

const FooterTiles = () => {
    const tilesData = [
      {
        className: "footer-solutions",
        headlineContent: "Solutions",
        linesContent: [
          { line: 'Lorem ipsum dolor imit', link: '/' },
          { line: 'Lorem ipsum', link: '/' },
          { line: 'Lorem ipsum', link: '/' },
        ]
      },
      {
        className: "footer-resources",
        headlineContent: "Resources",
        linesContent: [
          { line: 'FAQ', link: '/' },
          { line: 'Lorem ipsum', link: '/' },
          { line: 'Lorem ipsum dolor imit', link: '/' },
        ]
      },
      {
        className: "footer-company",
        headlineContent: "Lorem Ipsum",
        linesContent: [
          { line: 'Lorem ipsum', link: '/' },
          { line: 'Lorem ipsum', link: '/' },
          { line: 'Lorem ipsum', link: '/' },
        ]
      },
      {
        className: "footer-industries",
        headlineContent: "Lorem Ipsum",
        linesContent: [
          { line: 'Lorem ipsum', link: '/' },
          { line: 'Lorem ipsum', link: '/' },
          { line: 'Lorem ipsum', link: '/' },
        ]
      },
      {
        className: "footer-contact",
        headlineContent: "Contact",
        linesContent: [
          { line: '19833 Silicon Valley Avenue' },
          { line: 'Palo Alto' },
          { line: 'USA' },
          { line: '+1 (252) 23 328', link: '/' },
        ]
      }
    ];

    return <div className="links">
      {tilesData.map(elem => <FooterTile
      key = {elem["headlineContent"]}
      className={elem["className"]}
      headline={elem["headlineContent"]}
      lines={elem["linesContent"]}/>)}
  </div>
};
export default FooterTiles;