import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navbar,
  Footer,
  Accordion,
  FiftyFifty,
} from '../components'
import styled from 'styled-components'
import a from '../assets/img/a2.jpg';

import PhoneWrapper from "../components/PhoneWrapper";
import SolutionsTile from "../components/SolutionsTile";
import SolutionsData from "../assets/data/Solutions.js";

import "swiper/swiper.min.css";
import "../assets/scss/Solutions.scss";

interface WrapperProps {
  readonly shadow?: boolean
  readonly height?: string
  readonly background?: string
}

interface TopImageProps {
  readonly ifResp?: boolean
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
        props.height ? props.height : '105vh'};
    }
    @media (max-width: 618px){
      height: ${(props) =>
        props.height ? props.height : '95vh'};
    }
    @media (max-width: 454px){
      height: ${(props) =>
        props.height ? props.height : '110vh'};
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
  @media (max-width: 1037px){
    width: 55%;
    padding: 10px;
  }  
  @media (max-width: 896px){
    position: relative;
    width: 100%;
  }
  @media (max-width: 454px){
    font-size: 0.4em;
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
  @media (max-width: 896px){
    height: 40vh;
    margin-top: 46%;
  }
  @media (max-width: 594px){
    margin-top: 50%;
  }
  @media (max-width: 454px){
    margin-top: 70%;
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

  @media (max-width: 787px){
    position: relative;
    width: 100%;
  }
`

const TopImage = styled.img<TopImageProps>`
  width: 35%;
  position: relative;
  left: 15%;

  display: ${(props) => 
  props.ifResp ? "none" : "block"};
  
  @media (max-width: 1598px){
    left: 7%;
    width: 30%;
  }
  @media (max-width: 1037px){
    width: 25%;
    left: 2%;
  }
  @media (max-width: 896px){
    display: ${(props) => 
      props.ifResp ? "block" : "none"};
    width: 30%;
    left: 35%;
  }
  @media (max-width: 454px){
    width: 50%;
    left: 25%;
  }
`

const Solutions = () => {

  const topContent = SolutionsData["topContent"];

  const PhoneWrapperContent = SolutionsData["PhoneWrapperContents"];

  const TilesContent = SolutionsData["SolutionsTilesContents"];

  const [openIdx, setOpen] = useState(0)

  return (
    <>
      <Navbar />
      <main>
        <ContentWrapper>
          <AccorditionsBorder/>
          <LeftTop>
            <Title>How we work</Title>
            <TopImage src={a} ifResp={true}></TopImage>
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
          <TopImage src={a} ifResp={false}></TopImage>
        </ContentWrapper>
        <PhoneWrapper
        header={PhoneWrapperContent[0]["header"]}
        description={PhoneWrapperContent[0]["description"]}
        imageSource={PhoneWrapperContent[0]["imageSource"]}/>
        <ContentWrapper height = "110vh">
          {TilesContent.map((elem,index) => <SolutionsTile
              key = {"solutionsTile"+index}
              classes = "solutions-tiles-non-rwd"
              header = {elem["header"]}
              desc = {elem["desc"]}
              imgSrc = {elem["imgSrc"]}/>)}
          <Swiper className = "solutions-tiles-swiper"
          spaceBetween = {2} slidesPerView = {1} loop = {true}>
          {TilesContent.map((elem,index) => <SwiperSlide className = "swiper-slide-container"><SolutionsTile
                key = {"solutionsTileResp"+index}
                classes = "solutions-tiles-rwd"
                header = {elem["header"]}
                desc = {elem["desc"]}
                imgSrc = {elem["imgSrc"]}/>
              </SwiperSlide>)}
          </Swiper>
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