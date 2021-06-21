import React, { useState } from 'react'
import {
  Navbar,
  Footer,
  Accordion,
  FiftyFifty,
} from '../components'
import {Link} from "react-router-dom";
import styled from 'styled-components'
import a from '../assets/img/a2.jpg';
import solutions_column from "../assets/img/solutions_column.svg";
import phone_man from "../assets/img/phone_man.svg";
import phone_woman from "../assets/img/phone_woman.svg";

import SolutionsData from "../assets/data/Solutions.js";

interface WrapperProps {
  readonly shadow?: boolean
  readonly height?: string
  readonly background?: string
}

const ContentWrapper = styled.section<WrapperProps>`
  height: ${(props) =>
    props.height ? props.height : '95vh'};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${(props) =>
    props.shadow ? 'box-shadow: 0px 0px 10px;' : ''}
  ${(props) => 
    props.background ? "background: "+props.background+";" : ""}
`

const LeftTop = styled.div`
  padding: 4%;
  width: 35%;
`

const AccorditionsBorder = styled.div`
  background: linear-gradient(to bottom, #008389, #80CC08);
  width: 4px;
  height: 60vh;
  margin-left: 5%;
  margin-top: 10%;
`

const Title = styled.h1`
  font-size: 48px;
  color: #000;
  text-align: center;
  letter-spacing: 2px;
`

const TopImage = styled.img`
  width: 35%;
  position: relative;
  left: 15%;
`

const PhoneSection = styled.div`
  width: 100%;
  height: 50vh;
  background: #F5F5F5;
  flex-direction: row;
`;

const PhoneHeader = styled.div`
  width: 30%;
  margin-left: 7%;
  position: relative;
  top: 7%;
  font-size: 2em;
  letter-spacing: 0.06em;
`;

const PhoneDescription = styled.div`
  width: 25%;
  margin-left: 7%;
  position: relative;
  top: 14%;
  font-size: 1em;
  letter-spacing: 0.06em;
`;

const PhoneButtonWrapper = styled.div`
  width: 10%;
  margin-left: 7%;
  position: relative;
  top: 28%;
  text-align: center;
`;

const PhoneImg = styled.img`
  width: 20%;
  height: auto;
  float: right;
  margin-right: 10%;
  margin-top: -16vh;
`;

const Tile = styled.div`
  width: 20%;
  margin: 0 2%;
  height: 90%;
  position: relative;
  top: 1%;
  left: 12%;
`;

const TileHeader = styled.header`
  width: 100%;
  text-align: center;
  font-size: 1.7em;
  letter-spacing: 0.05em;
  margin-bottom: 12vh;
`;

const TileDesc = styled.div`
  width: 70%;
  font-size: 1.3em;
  margin-left: 10%;
  margin-bottom: 9vh;
`;

const TileImg = styled.img`
    width: 80%;
    height: auto;
    margin-left: 10%;
`;

const Solutions = () => {

  const topContent = SolutionsData["topContent"];

  const tilesContent = SolutionsData["tilesContent"];

  const bottomContent = [0, 1, 2]

  const [openIdx, setOpen] = useState(0)

  return (
    <>
      <Navbar />
      <main>
        <ContentWrapper>
          <AccorditionsBorder/>
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
        <PhoneSection>
            <PhoneHeader>
              Lorem ipsum dolor sit amet
            </PhoneHeader>
            <PhoneDescription>
            Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis.
            </PhoneDescription>
            <Link to="/">
              <PhoneButtonWrapper>
                <div
                  className="button button-filled"
                  id="black-button"
                >
                  Sign up
                </div>
              </PhoneButtonWrapper>
            </Link>
            <PhoneImg src = {phone_man}/>
        </PhoneSection>
        <ContentWrapper height = "110vh">
            <Tile>
              <TileHeader>Test</TileHeader>
              <TileDesc>Lorem Ipsum është një tekst shabllon i industrisë së printimit dhe shtypshkronjave.</TileDesc>
              <TileImg src={solutions_column}/>
            </Tile>
            <Tile>
              <TileHeader>Test</TileHeader>
              <TileDesc>Lorem Ipsum është një tekst shabllon i industrisë së printimit dhe shtypshkronjave.</TileDesc>
              <TileImg src={solutions_column}/>
            </Tile>
            <Tile>
              <TileHeader>Test</TileHeader>
              <TileDesc>Lorem Ipsum është një tekst shabllon i industrisë së printimit dhe shtypshkronjave.</TileDesc>
              <TileImg src={solutions_column}/>
            </Tile>
        </ContentWrapper>
        <PhoneSection>
            <PhoneHeader>
              Lorem ipsum dolor sit amet
            </PhoneHeader>
            <PhoneDescription>
              Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis.
            </PhoneDescription>
            <Link to="/">
              <PhoneButtonWrapper>
                <div
                  className="button button-filled"
                  id="black-button"
                >
                  Sign up
                </div>
              </PhoneButtonWrapper>
            </Link>
            <PhoneImg src = {phone_woman}/>
        </PhoneSection>
        <ContentWrapper height = "10vh"/>
      </main>
      <Footer />
    </>
  )
}

export default Solutions