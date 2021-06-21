import React, { useState } from 'react'
import {
  Navbar,
  Footer,
  Accordion,
  FiftyFifty,
} from '../components'
import styled from 'styled-components'
import a from '../assets/img/a2.jpg';
import solutions_column from "../assets/img/solutions_column.svg";

import PhoneWrapper from "../components/PhoneWrapper";
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

    @media (max-width: 1294px){
      height: ${(props) =>
        props.height ? props.height : '85vh'};
    }
`

const LeftTop = styled.div`
  padding: 4%;
  width: 35%;

  @media (max-width: 1598px){
    width: 45%;
    font-size: 0.8em;
  }
  @media (max-width: 1294px){
    font-size: 0.6em;
  }
`

const AccorditionsBorder = styled.div`
  background: linear-gradient(to bottom, #008389, #80CC08);
  width: 4px;
  height: 60vh;
  margin-left: 5%;
  margin-top: 10%;
  @media (max-width: 1316px){
    height: 50vh;
  }
`

const Title = styled.h1`
  font-size: 48px;
  color: #000;
  text-align: center;
  letter-spacing: 2px;

  @media (max-width: 879px){
    font-size: 3.7em;
  }
`

const TopImage = styled.img`
  width: 35%;
  position: relative;
  left: 15%;
  
  @media (max-width: 1598px){
    left: 7%;
    width: 30%;
  }
  @media (max-width: 1009px){
    width: 30%;
    left: 5%;
  }
`

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

  const PhoneWrapperContent = SolutionsData["PhoneWrapperContents"];

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
        <PhoneWrapper
        header={PhoneWrapperContent[0]["header"]}
        description={PhoneWrapperContent[0]["description"]}
        imageSource={PhoneWrapperContent[0]["imageSource"]}/>
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
        <PhoneWrapper
        header={PhoneWrapperContent[1]["header"]}
        description={PhoneWrapperContent[1]["description"]}
        imageSource={PhoneWrapperContent[1]["imageSource"]}/>
        <ContentWrapper height = "10vh"/>
      </main>
      <Footer />
    </>
  )
}

export default Solutions