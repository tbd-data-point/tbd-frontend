import { Navbar, Footer } from '../components'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import leaders from '../assets/img/leaders.jpg'
import '../assets/scss/LandingPage.scss'
import '../assets/scss/BottomTile.scss'

import { device } from '../assets/styles/breakpoints'
import { colors } from '../assets/styles/colors'

import { slider } from '../assets/data/slider'

const Wrapper = styled.main`
  width: 100%;
  postiton: relative;
`

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media ${device.tablet} {
    flex-direction: row;
    height: 100vh;
    min-height: 600px;
  }
`

const GreenGradient = styled.div`
  width 100%;
  height: 100px;
  transform: rotate(180deg);
  background: ${colors.greenGradientLight};
  @media ${device.tablet} {
    height: 100%;
    width: 12%;
    background: ${colors.greenGradientLightRotated};
  }
`

const BlueGradient = styled.div`
  width: 100%;
  height: 150px;
  background: ${colors.blueGradientLight};
  @media ${device.tablet} {
    height: 100%;
    width: 30%;
    background: ${colors.blueGradientLightRotated};
  }
  @media ${device.laptop} {
    width: 44%;
  }
`

const TextWrapper = styled.div`
  font-size: 14px;
  @media ${device.mobileM} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.laptopL} {
    font-size: 24px;
  }
`

const TopTextWrapper = styled(TextWrapper)`
  width: 100%;
  padding: 50px 60px;
  @media ${device.tablet} {
    max-width: 58%;
  }
  @media ${device.laptop} {
    max-width: 44%;
  }
`

const Header = styled.h1`
  margin: 0;
  font-size: 24px;
  @media ${device.mobileM} {
    font-size: 32px;
  }
  @media ${device.laptop} {
    font-size: 34px;
  }
  @media ${device.laptopL} {
    font-size: 42px;
  }
`

const Colored = styled.span`
  color: ${colors.blue1};
`

const Header2 = styled.h2`
  color: ${colors.grey3};
  font-size: inherit;
  margin: 3em 0;
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.mobileL} {
    flex-direction: row;
  }
`

const MiddleSection = styled(Section)`
  background: ${colors.blue1};
`

interface ButtonProps {
  readonly background?: string
  readonly margin?: string
  readonly fontSize?: string
  readonly border?: string
  readonly padding?: string
  readonly color?: string
}

const Button = styled.div<ButtonProps>`
  float: left;
  padding: ${(props) =>
    props.padding ? props.padding : '10px'};
  background: ${(props) =>
    props.background ? props.background : 'white'};
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : 'inherit'};
  border: ${(props) =>
    props.border ? props.border : 'none'};
  color: ${(props) =>
    props.color ? props.color : 'black'};
  margin: 10px 0px;

  @media ${device.mobileL} {
    margin: ${(props) =>
      props.margin ? props.margin : '0'};
  }
`

const MiddleTextWrapper = styled(TextWrapper)`
  display: flex;
  flex-direction: column;
  padding: 6em 3em;
  align-items: flex-start;
  justify-content: center;
  @media ${device.tablet} {
    order: 0;
    max-width: 50%;
  }
`

const Image = styled.img`
  width: 100%;
  @media ${device.tablet} {
    height: 100%;
    width: auto;
    order: 1;
    width: 50%;
  }
`

const BottomSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20% 15%;
  @media ${device.laptop} {
    padding: 15% 10%;
  }
`

const BottomTextWrapper = styled(TextWrapper)`
  @media ${device.laptop} {
    max-width: 60%;
    margin-bottom: 3.2em;
  }
`

const Gradient = styled.span`
  // background: ${colors.textGradient};
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  color: ${colors.green1};
`

const TilesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex: none;
  flex-flow: row nowrap;
  overflow: scroll;
  scroll-snap-type: x mandatory;

  & > div {
    margin: 0 50px 10px 50px;
    flex: none;
    scroll-snap-align: center;
  }

  @media ${device.laptop} {
    overflow: hidden;
    flex-flow: row wrap;
    justify-content: space-between;
    & > div {
      flex: 0 1 auto;
      margin: 0;
    }
  }
`

const Tile = styled(TextWrapper)`
  display: block;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media ${device.laptop} {
    width: 27%;
  }
`

const TileHeader = styled(Header2)`
  font-size: 1.4em;
  width: 100%;
  margin-bottom: 0;
  color: black;
`

const TileDecoration = styled.div`
  width: 200px;
  height: 200px;
`

const TileDescription = styled.p`
  font-size: inherit;
  color: ${colors.grey3};
`

const TileLink = styled(Link)`
  text-decoration: underline;
  font-size: 1.1em;
  display: inline-block;
  margin: 0 auto 0 0;
`

const TileLinkDecoration = styled.div`
  background: ${colors.gradientLight};
  width: 0.5em;
  height: 0.5em;
  display: inline-block;
  margin-left: 10px;
  clip-path: polygon(100% 50%, 0 0, 0 100%);
`

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <Wrapper>
        <Section>
          <GreenGradient />
          <TopTextWrapper>
            <Header>
              Lorem ipsum dolor sit amet consectetur
              adipiscing elit&nbsp;
              <Colored>sed do eiusmod tempor</Colored>
            </Header>
            <Header2>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Header2>
            <ButtonsWrapper>
              <Link to="/">
                <Button
                  padding="8px 12px"
                  border="black 0.03em solid"
                >
                  Get started
                </Button>
              </Link>
              <Link to="/">
                <Button
                  padding="9px 12px"
                  background={colors.grey1}
                  color="white"
                  margin="0 0 0 20px"
                >
                  See solutions
                </Button>
              </Link>
            </ButtonsWrapper>
          </TopTextWrapper>
          <BlueGradient />
        </Section>

        <MiddleSection>
          <Image alt="leaders" src={leaders} />
          <MiddleTextWrapper>
            <Header style={{ margin: '0', color: 'white' }}>
              Why are we the leaders in the industry?
            </Header>
            <Header2 style={{ color: colors.grey7 }}>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Aliquet sagittis id consectetur purus ut
              faucibus pulvinar elementum.
            </Header2>

            <ButtonsWrapper>
              <Link to="/">
                <Button>Learn more</Button>
              </Link>
              <Link to="/">
                <Button
                  background={colors.blue1}
                  border="white 0.03em solid"
                  margin="0 0 0 15px"
                  color="white"
                >
                  Sign up
                </Button>
              </Link>
            </ButtonsWrapper>
          </MiddleTextWrapper>
        </MiddleSection>

        <BottomSection>
          <BottomTextWrapper>
            <Header style={{ width: '100%' }}>
              Lorem
              <Gradient>&nbsp;ipsum dolor sit</Gradient>
            </Header>
            <Header2
              style={{ marginTop: '1.5em', width: '100%' }}
            >
              Lorem ipsum dolor sit amet enim. Etiam
              ullamcorper. Suspendisse a pellentesque dui,
              non felis labore et dolore magna aliqua.
              Aliquet sagittis id consectetur purus
            </Header2>
          </BottomTextWrapper>
          <TilesWrapper>
            {slider.map((tile, index) => (
              <Tile key={`tile_${index}`}>
                <TileDecoration
                  style={{ background: tile.background }}
                />
                <TileHeader>{tile.header}</TileHeader>
                <TileDescription>
                  {tile.description}
                </TileDescription>
                <TileLink to={tile.url}>
                  See more
                  <TileLinkDecoration />
                </TileLink>
              </Tile>
            ))}
          </TilesWrapper>
        </BottomSection>
      </Wrapper>

      <Footer />
    </>
  )
}

export default LandingPage
