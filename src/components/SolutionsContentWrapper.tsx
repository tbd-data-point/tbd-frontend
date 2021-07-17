import React, {useState} from "react";
import styled from "styled-components";

import Accordion from "./Accordion";

interface WrapperProps {
    readonly shadow?: boolean
    readonly height?: string
    readonly background?: string
}
  
interface TopImageProps {
    readonly ifResp?: boolean
}

interface TitleProps{
    readonly color?: string
}
  
interface BorderProps{
    readonly isWhiteMode?: boolean
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
        props.height ? props.height : '115vh'};
    }
    @media (max-width: 618px){
      height: ${(props) =>
        props.height ? props.height : '95vh'};
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

const AccorditionsBorder = styled.div<BorderProps>`
  background: ${(props) => 
    props.isWhiteMode ? "#fff" : "linear-gradient(to bottom, #008389, #80CC08)"};
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
  @media (max-width: 664px){
    margin-top: 60%;
  }
  @media (max-width: 454px){
    margin-top: 75%;
  }
  @media (max-width: 356px){
    margin-top: 95%;
    height: 35vh;
  }
  @media (max-width: 356px){
    margin-top: 105%;
    height: 40vh;
  }
`

const Title = styled.h1<TitleProps>`
  font-size: 48px;
  color: ${(props) => 
    props.color ? props.color : "#000"};
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
  @media (max-width: 664px){
    width: 40%;
    left: 30%;
  }
  @media (max-width: 454px){
    width: 50%;
    left: 25%;
  }
  @media (max-width: 356px){
    width: 70%;
    left: 15%;
  }
`

type SolutionsContentProps = {
    photoSrc?: any,
    data?: any,
    backgroundColor?: string,
    fontColor?: string,
    isWhiteGradient?: boolean
}   

const SolutionsContentWrapper = ({photoSrc, data, backgroundColor, fontColor="#000", isWhiteGradient} : SolutionsContentProps) => {
    const [openIdx, setOpen] = useState(0);

    return <ContentWrapper background={backgroundColor}>
    <AccorditionsBorder isWhiteMode={isWhiteGradient}/>
    <LeftTop>
      <Title color={fontColor}>How we work</Title>
      <TopImage src={photoSrc} ifResp={true}></TopImage>
      {data.map((v : any, i : number) => {
        return (
          <Accordion
            key={`${v.title}`}
            id={i}
            clickHandler={setOpen}
            open={i === openIdx}
            label={v.title}
            color={fontColor}
          >
            {v.content}
          </Accordion>
        )
      })}
    </LeftTop>
    <TopImage src={photoSrc} ifResp={false}></TopImage>
  </ContentWrapper>;
}

export default SolutionsContentWrapper;