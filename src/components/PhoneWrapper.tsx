import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

type PhoneWrapperProps = {
    header?: string,
    description?: string,
    buttonText?: string,
    imageSource?: any,
    isBackground?: boolean,
    isButtonHidden?: boolean,
    isCompanySection?: boolean,
    isReversed?: boolean
};

interface SectionProps{
  readonly isBackground?: boolean
}

interface HeaderProps{
  readonly isReversed?: boolean
}

interface DescProps{
  readonly isReversed?: boolean
}

interface ButtonProps{
  readonly isButtonHidden?: boolean
}

interface ImageProps{
  readonly isButtonHidden?: boolean
  readonly isCompanySection?: boolean
  readonly isReversed?: boolean
}

const PhoneSection = styled.div<SectionProps>`
  width: 100%;
  height: 55vh;
  ${(props) => 
  props.isBackground ? "background: #F5F5F5;" : ""}
  flex-direction: row;
  @media (min-width: 772px){
    height: 50vh;
  }
  @media (min-width: 252px){
    height: 60vh;
  }
`;

const PhoneHeader = styled.div<HeaderProps>`
  width: 30%;
  position: relative;
  left: ${(props) => 
    props.isReversed? "47%" : "7%"};
  top: 7%;
  font-size: 2em;
  letter-spacing: 0.06em;
  
  @media (max-width: 1214px){
    width: 50%;
  }
  @media (max-width: 955px){
    font-size: 1.5em;
  }
  @media (max-width: 772px){
    float: none;
    font-size: 1.7em;
    text-align: center;
    width: 80%;
    left: 10%;
  }
  @media (max-width: 475px){
    width: 90%;
    left: 5%;
    font-size: 1.5em;
  }
  @media (max-width: 258px){
    width: 100%;
    left: 0;
    font-size: 1.2em;
  }
`;

const PhoneDescription = styled.div<DescProps>`
  width: ${(props) => 
    props.isReversed? "35%" : "25%"};
  position: relative;
  left: ${(props) => 
    props.isReversed? "47%" : "7%"};
  top: 14%;
  font-size: 1em;
  letter-spacing: 0.06em;
    
  @media (max-width: 1214px){
    width: ${(props) => 
      props.isReversed? "40%" : "45%"};
  }
  @media (max-width: 772px){
    float: none;
    font-size: 0.9em;
    text-align: center;
    width: 60%;
    left: 20%;
  }
  @media (max-width: 475px){
    width: 80%;
    left: 10%;
    font-size: 0.8em;
  }
  @media (max-width: 258px){
    width: 90%;
    left: 5%;
    font-size: 0.7em;
  }
`;

const PhoneButtonWrapper = styled.div<ButtonProps>`
  width: 10%;
  position: relative;
  top: 28%;
  left: 7%;
  text-align: center;
  ${(props) => 
  props.isButtonHidden ? "display: none;" : ""}
    
  @media (max-width: 1214px){
    width: 15%;
  }
  @media (max-width: 772px){
    float: none;
    width: 20%;
    top: 58%;
    left: 40%;
    text-align: center !important;
  }
  @media (max-width: 636px){
    width: 30%;
    left: 35%;
    top: 50%;
  }
  @media (max-width: 332px){
    width: 40%;
    left: 30%;
  }
  @media (max-width: 258px){
    width: 80%;
    left: 10%;
  }
`;

const PhoneImg = styled.img<ImageProps>`
  width: 20%;
  height: auto;
  float: ${(props) => 
    props.isReversed ? "left" : "right"};
  ${(props) => 
      props.isReversed ? "margin-left" : "margin-right"} : 10%;
  position: relative;
  top: ${(props) => 
    props.isCompanySection ? props.isReversed ? "-9vh" : "-13vh" : "-16vh"};
    
  @media (max-width: 1214px){
    top: -10vh;
  }
  @media (max-width: 955px){
    width: ${(props) => 
      props.isCompanySection ? "25%" : "20%"};
    top: ${(props) => 
      props.isCompanySection ? props.isReversed ? "-10vh" : "-11vh" : "-10vh"};
  }
  @media (max-width: 772px){
    float: none;
    top: ${(props) => 
    props.isButtonHidden ? "10vh" : "7vh"};
    left: ${(props) => 
      props.isButtonHidden ? "36%" : "43%"};
    width: ${(props) => 
      props.isButtonHidden ? "28%" : "14%"};
    margin: 0;
  }

  @media (max-width: 650px){
    left: ${(props) => 
      props.isButtonHidden ? "33%" : "40%"};
    width: ${(props) => 
      props.isButtonHidden ? "34%" : "20%"};
  }
  
  @media (max-width: 475px){
    left: ${(props) => 
      props.isButtonHidden ? props.isCompanySection ? "25%" : "20%" : "33%"};
    width: ${(props) => 
      props.isButtonHidden ? props.isCompanySection ? "50%" : "60%" : "34%"};
  }

  @media (max-width: 252px){
    left: ${(props) => 
      props.isButtonHidden ? props.isCompanySection ? "25%" : "15%" : "25%"};
    width: ${(props) => 
      props.isButtonHidden ? props.isCompanySection ? "50%" : "70%" : "50%"};
  }
  @media (max-width: 194px){
    left: ${(props) => 
      props.isButtonHidden ? props.isCompanySection ? "25%" : "10%" : "25%"};
    width: ${(props) => 
      props.isButtonHidden ? props.isCompanySection ? "50%" : "70%" : "50%"};
  }
`;

const PhoneWrapper = ({header,description, buttonText="Sign up", imageSource, isBackground, isButtonHidden, isCompanySection, isReversed} : PhoneWrapperProps ) => {
    return <PhoneSection isBackground = {isBackground}>
        <PhoneHeader isReversed={isReversed}>
            {header}
        </PhoneHeader>
        <PhoneDescription isReversed={isReversed}>
            {description}
        </PhoneDescription>
        <Link to="/">
            <PhoneButtonWrapper isButtonHidden = {isButtonHidden} className={buttonText.length > 10 ? "large-phone-button" : ""}>
            <div
                className="button button-filled staying-button phone-wrapper-button"
                id="black-button"
            >
                {buttonText}
            </div>
            </PhoneButtonWrapper>
        </Link>
        <PhoneImg src = {imageSource} isButtonHidden = {isButtonHidden} isCompanySection={isCompanySection}
        isReversed={isReversed}/>
    </PhoneSection>;
};

export default PhoneWrapper;