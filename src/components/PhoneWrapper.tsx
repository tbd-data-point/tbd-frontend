import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

type PhoneWrapperProps = {
    header?: string,
    description?: string,
    imageSource?: any
};

const PhoneSection = styled.div`
  width: 100%;
  height: 50vh;
  background: #F5F5F5;
  flex-direction: row;
  @media (max-width: 648px){
    height: 60vh;
  }
`;

const PhoneHeader = styled.div`
  width: 30%;
  position: relative;
  left: 7%;
  top: 7%;
  font-size: 2em;
  letter-spacing: 0.06em;
  
  @media (max-width: 1214px){
    width: 50%;
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
`;

const PhoneDescription = styled.div`
  width: 25%;
  position: relative;
  left: 7%;
  top: 14%;
  font-size: 1em;
  letter-spacing: 0.06em;
    
  @media (max-width: 1214px){
    width: 45%;
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
`;

const PhoneButtonWrapper = styled.div`
  width: 10%;
  position: relative;
  top: 28%;
  left: 7%;
  text-align: center;
    
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
`;

const PhoneImg = styled.img`
  width: 20%;
  height: auto;
  float: right;
  margin-right: 10%;
  position: relative;
  top: -16vh;
    
  @media (max-width: 1214px){
    top: -10vh;
  }

  @media (max-width: 772px){
    float: none;
    top: 7vh;
    left: 43%;
    width: 14%;
  }

  @media (max-width: 650px){
    width: 20%;
    left: 40%;
  }
  
  @media (max-width: 475px){
    width: 24%;
    left: 38%;
  }
`;

const PhoneWrapper = ({header,description, imageSource} : PhoneWrapperProps ) => {
    return <PhoneSection>
        <PhoneHeader>
            {header}
        </PhoneHeader>
        <PhoneDescription>
            {description}
        </PhoneDescription>
        <Link to="/">
            <PhoneButtonWrapper>
            <div
                className="button button-filled staying-button phone-wrapper-button"
                id="black-button"
            >
                Sign up
            </div>
            </PhoneButtonWrapper>
        </Link>
        <PhoneImg src = {imageSource}/>
    </PhoneSection>;
};

export default PhoneWrapper;