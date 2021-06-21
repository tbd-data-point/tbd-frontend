import styled from 'styled-components'
import { Navbar, Footer } from '../components/'
import { Link } from 'react-router-dom'
import resourcesData from "../assets/data/Resources.js";

const blue_1 = '#002d2f'
const gray_7 = '#d7d7d7'
const gray_2 = '#393939'

const BlogWrapper = styled.div`
  margin: 60px 0;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  row-gap: 60px;

  @media (max-width: 1060px){
    grid-template-columns: 10% 80% 10%;
  }

  @media (max-width: 702px){
    grid-template-columns: 5% 90% 5%;
    font-size: 0.8em;
  }

  @media (max-width: 434px){
    font-size: 0.6em;
  }
`

const Tile = styled.div`
  grid-column: 2;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.h1`
  font-size: 42px;

  @media (max-width: 1060px){
    font-size: 2.3em;
  }
`

const Image = styled.img`
  object-fit: contain;
  height: auto;
  width: 100%;
  object-fit: cover;
  
  @media (max-width: 320px){
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`

const Author = styled.div`
  padding: 0.5em 0.7em;
  background-color: ${blue_1};
  color: white;
  font-weight: 300;
  font-size: 18px;
  width: fit-content;
  
  @media (max-width: 1060px){
    font-size: 1em;
  }
`

const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 300;
  color: ${gray_2};
    
  @media (max-width: 1060px){
    font-size: 1.3em;
  }
`

const ReadMore = styled.div`
  font-size: 26px;
  font-weight: 300;
  margin: 0;
  cursor: pointer;
  border-style: solid;
  padding: 0.25em 0.6em;
  border-width: 0.03em;
  width: fit-content;
  transition-duration: 0.3s;
  &:hover {
    transform: translateX(8px);
  }
      
  @media (max-width: 1060px){
    font-size: 1.3em;
  }
`

const EntryDivider = styled.div`
  grid-column: 2;
  width: 100%;
  height: 2px;
  background: ${gray_7};
`

const Resources = () => {
  const entries = resourcesData["entries"];

  return (
    <>
      <Navbar />
      <BlogWrapper>
        {entries.map((v) => {
          return (
            <>
              <Tile key={v.id.toString()}>
                <Image src={v.image} />
                <Header>{v.header}</Header>
                <Author>{v.author}</Author>
                <Subtitle>{v.subtitle}</Subtitle>
                <ReadMore>
                  <Link to={v.link}>Read more</Link>
                </ReadMore>
              </Tile>
              {v.divid ? <EntryDivider /> : null}
            </>
          )
        })}
      </BlogWrapper>
      <Footer />
    </>
  )
}

export default Resources
