import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navbar,
  Footer,
  FiftyFifty,
} from '../components'  
import styled from 'styled-components'
import a from '../assets/img/a2.jpg';

import SolutionsContentWrapper from '../components/SolutionsContentWrapper';
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

const Solutions = () => {

  const topContent = SolutionsData["topContent"];

  const PhoneWrapperContent = SolutionsData["PhoneWrapperContents"];

  const TilesContent = SolutionsData["SolutionsTilesContents"];

  return (
    <>
      <Navbar />
      <main>
      <SolutionsContentWrapper 
        photoSrc = {a}
        data = {topContent}/> 
        <PhoneWrapper
        header={PhoneWrapperContent[0]["header"]}
        description={PhoneWrapperContent[0]["description"]}
        imageSource={PhoneWrapperContent[0]["imageSource"]}
        isBackground={true}/>
        <ContentWrapper height = "110vh">
          {TilesContent.map((elem,index) => <SolutionsTile
              tileKey = {"solutionsTile"+index}
              classes = "solutions-tiles-non-rwd"
              header = {elem["header"]}
              desc = {elem["desc"]}
              imgSrc = {elem["imgSrc"]}/>)}
          <Swiper className = "solutions-tiles-swiper"
          spaceBetween = {2} slidesPerView = {1} loop = {true}>
          {TilesContent.map((elem,index) => <SwiperSlide className = "swiper-slide-container"><SolutionsTile
                tileKey = {"solutionsTileResp"+index}
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
        imageSource={PhoneWrapperContent[1]["imageSource"]}
        isBackground={true}/>
        <ContentWrapper height = "10vh"/>
      </main>
      <Footer />
    </>
  )
}

export default Solutions