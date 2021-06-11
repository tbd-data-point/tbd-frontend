import styled from 'styled-components'
import { Navbar, Footer } from '../components/'
import PlaceholderImg from '../assets/img/a.jpg'
import { Link } from 'react-router-dom'

const blue_1 = '#002d2f'
const gray_7 = '#d7d7d7'
const gray_2 = '#393939'

const BlogWrapper = styled.div`
  margin: 60px 0;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  row-gap: 60px;
`

const Tile = styled.div`
  grid-column: 2;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.h1`
  font-size: 42px;
`

const Image = styled.img`
  object-fit: contain;
  height: 500px;
  width: 100%;
  object-fit: cover;
`

const Author = styled.div`
  padding: 0.5em 0.7em;
  background-color: ${blue_1};
  color: white;
  font-weight: 300;
  font-size: 18px;
  width: fit-content;
`

const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 300;
  color: ${gray_2};
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
`

const EntryDivider = styled.div`
  grid-column: 2;
  width: 100%;
  height: 2px;
  background: ${gray_7};
`

const Resources = () => {
  const entries = [
    {
      id: 1,
      image: PlaceholderImg,
      header: 'Lorem Ipsum Title',
      author: 'Jan Kowalski | 21/03/2021',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget commodo nulla, ac rutrum nunc. Aenean quam lectus, congue vitae arcu eget, ultrices scelerisque purus.',
      divid: true,
      link: '/',
    },
    {
      id: 2,
      image: PlaceholderImg,
      header: 'Lorem Ipsum Title',
      author: 'Jan Kowalski | 21/03/2021',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget commodo nulla, ac rutrum nunc. Aenean quam lectus, congue vitae arcu eget, ultrices scelerisque purus.',
      divid: true,
      link: '/',
    },
    {
      id: 3,
      image: PlaceholderImg,
      header: 'Lorem Ipsum Title',
      author: 'Jan Kowalski | 21/03/2021',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget commodo nulla, ac rutrum nunc. Aenean quam lectus, congue vitae arcu eget, ultrices scelerisque purus.',
      divid: true,
      link: '/',
    },
    {
      id: 4,
      image: PlaceholderImg,
      header: 'Lorem Ipsum Title',
      author: 'Jan Kowalski | 21/03/2021',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget commodo nulla, ac rutrum nunc. Aenean quam lectus, congue vitae arcu eget, ultrices scelerisque purus.',
      divid: false,
      link: '/',
    },
  ]

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
