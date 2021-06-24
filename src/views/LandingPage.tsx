import { Navbar, Footer } from '../components'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import styled from 'styled-components'

import leaders from '../assets/img/leaders.jpg'
import '../assets/scss/LandingPage.scss'
import '../assets/scss/BottomTile.scss'
import 'swiper/swiper.min.css'

import { device } from '../assets/styles/breakpoints'
import { colors } from '../assets/styles/colors'

import LandingPageData from '../assets/data/LandingPage.json'

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

const TopTextWrapper = styled.div`
  width: 100%;
  padding: 50px 60px;
  font-size: 14px;
  @media ${device.tablet} {
    max-width: 58%;
  }
  @media ${device.laptop} {
    max-width: 44%;
  }
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

const MiddleTextWrapper = styled(TopTextWrapper)`
  display: flex;
  flex-direction: column;
  padding: 6em 3em;
  align-items: flex-start;
  justify-content: center;
  @media ${device.tablet} {
    order: 0;
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
  align-items: center;
  padding: 20% 15%;
`

const Gradient = styled.span`
  background: ${colors.textGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
        <Section style={{ background: colors.blue1 }}>
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
        </Section>

        <BottomSection>
          <Header style={{ width: '100%' }}>
            Lorem<Gradient>&nbsp;ipsum dolor sit</Gradient>
          </Header>
          <Header2>
            Lorem ipsum dolor sit amet enim. Etiam
            ullamcorper. Suspendisse a pellentesque dui, non
            felis. Maecenas malesuada elit lectus felis,
            malesuada ultricies
          </Header2>

          <div className="bottom-tiles-wrapper">
            {LandingPageData['sliders'].map(
              (tile, index) => (
                <BottomTile
                  key={'tile' + index}
                  classes="tile-wrapper tiles-non-rwd"
                  headline={tile['headline']}
                  description={tile['description']}
                  link={tile['link']}
                  bg={tile['bg']}
                />
              ),
            )}
            <Swiper
              className="tiles-rwd"
              spaceBetween={2}
              slidesPerView={1}
              loop={false}
            >
              {LandingPageData['sliders'].map(
                (tile, index) => (
                  <SwiperSlide className="swiper-slide-container">
                    <BottomTile
                      key={'tileRWD' + index}
                      classes="tile-wrapper tiles-rwd"
                      headline={tile['headline']}
                      description={tile['description']}
                      link={tile['link']}
                      bg={tile['bg']}
                    />
                  </SwiperSlide>
                ),
              )}
            </Swiper>
          </div>
        </BottomSection>
      </Wrapper>
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
  classes,
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
