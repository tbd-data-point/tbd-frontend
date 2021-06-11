import React, { useState } from 'react'
import {
  Navbar,
  Footer,
  Accordion,
  FiftyFifty,
} from '../components'
import styled from 'styled-components'
import logo from '../assets/img/logo.svg'
import a from '../assets/img/a.jpg'

interface WrapperProps {
  readonly shadow?: boolean
  readonly height?: string
}

const ContentWrapper = styled.section<WrapperProps>`
  height: ${(props) =>
    props.height ? props.height : '85vh'};
  width: 100%;
  display: flex;
  flex-direction: row;
  ${(props) =>
    props.shadow ? 'box-shadow: 0px 0px 10px;' : ''}
`

const LeftTop = styled.div`
  background: #002d2f;
  padding: 4%;
  width: 35%;
`

const Title = styled.h1`
  font-size: 48px;
  color: #ffffff;
`

const TopImage = styled.img`
  width: 65%;
`

const TileWrapper = styled.div`
  margin: 10% 7%;
  display: grid;
  grid-template-columns: 40vw 40vw;
  grid-template-rows: 40vw 40vw;
  column-gap: 60px;
  row-gap: 60px;
`

type GradientProps = {
  children: React.ReactNode
  i: number
}

const getCords = (i: number) => {
  if (i === 0) return [1, 1]
  if (i === 1) return [1, 2]
  if (i === 2) return [2, 2]
  if (i === 3) return [2, 1]
  return []
}

interface BackgroundProps {
  readonly i: number
}

const Background = styled.div<BackgroundProps>`
  background: linear-gradient(
    ${(props) => -45 + props.i * 90}deg,
    rgba(0, 243, 255, 1) 0%,
    rgba(175, 255, 49, 1) 100%
  );
  padding: 3px;
  grid-row: ${(props) => getCords(props.i)[0]};
  grid-column: ${(props) => getCords(props.i)[1]};
  width: 100%;
  height: 100%;
`

const InsideGradient = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`

const GradientTile = ({ children, i }: GradientProps) => {
  return (
    <>
      <Background i={i}>
        <InsideGradient>{children}</InsideGradient>
      </Background>
    </>
  )
}

interface HProps {
  readonly fSize?: string
  readonly color?: string
  readonly align?: boolean
}

const H = styled.h1<HProps>`
  font-size: ${(props) => '30px' && props.fSize};
  ${(props) => props.align && 'text-align: center;'}
`

interface PProps {
  readonly fSize?: string
  readonly color?: string
  readonly align?: boolean
}

const P = styled.p<PProps>`
  font-size: ${(props) => '18px' && props.fSize};
  color: ${(props) => 'white' && props.color};
  margin-top: 0px;
  ${(props) => props.align && 'text-align: center;'}
`

const I = styled.img`
  height: auto;
  align-self: center;
  object-fit: fill;
`

const Solutions = () => {
  const topContent = [
    {
      title: 'Order',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      title: 'Realization',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      title: 'Delivery',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      title: 'Review',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
  ]

  const tilesContent = [
    {
      title: 'Comprehensive customer service',
      text: 'Lorem Ipsum është një tekst shabllon i industrisë së printimit dhe shtypshkronjave.',
      graphic: logo,
    },
    {
      title: 'Comprehensive customer service',
      text: 'Lorem Ipsum është një tekst shabllon i industrisë së printimit dhe shtypshkronjave.',
      graphic: logo,
    },
    {
      title: 'Comprehensive customer service',
      text: 'Lorem Ipsum është një tekst shabllon i industrisë së printimit dhe shtypshkronjave.',
      graphic: logo,
    },
    {
      title: 'Comprehensive customer service',
      text: 'Lorem Ipsum është një tekst shabllon i industrisë së printimit dhe shtypshkronjave.',
      graphic: logo,
    },
  ]

  const bottomContent = [0, 1, 2]

  const [openIdx, setOpen] = useState(0)

  return (
    <>
      <Navbar />
      <main>
        <ContentWrapper>
          <LeftTop>
            <Title>How we work</Title>
            {topContent.map((v, i) => {
              return (
                <Accordion
                  key={`${v.title}`}
                  id={i}
                  clickHandler={setOpen}
                  open={i === openIdx}
                  label={v.title}
                >
                  {v.content}
                </Accordion>
              )
            })}
          </LeftTop>
          <TopImage src={a}></TopImage>
        </ContentWrapper>
        <TileWrapper>
          {tilesContent.map((v, i) => {
            return (
              <GradientTile key={`${v.title}_${i}`} i={i}>
                <div
                  style={{
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                  }}
                >
                  <H align>{v.title}</H>
                  <P align fSize="24px">
                    {v.text}
                  </P>
                  <I src={v.graphic} alt=""></I>
                </div>
              </GradientTile>
            )
          })}
        </TileWrapper>

        {bottomContent.map((v, i) => {
          return (
            <FiftyFifty
              textRight={v === 1 ? true : false}
              color={v % 2 === 1 ? 'white' : 'black'}
              height="100vh"
              src={a}
              background={v % 2 === 0 ? 'white' : '#002D2F'}
            >
              <H fSize="48px">
                Lorem ipsum dolor sit amet, consectetur
              </H>
              <P
                fSize="36px"
                color={v % 2 === 1 ? '#D7D7D7;' : '#393939'}
              >
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </P>
            </FiftyFifty>
          )
        })}
      </main>
      <Footer />
    </>
  )
}

export default Solutions
