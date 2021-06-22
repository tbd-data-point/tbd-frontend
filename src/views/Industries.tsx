import styled from 'styled-components'

import { Navbar, Footer } from '../components';
import PhoneWrapper from '../components/PhoneWrapper';
import SolutionsContentWrapper from "../components/SolutionsContentWrapper";

import machines from "../assets/img/machines.svg";
import man_with_charts from "../assets/img/man_with_charts.svg";
import computer_vision from "../assets/img/computer_vision.svg";
import scientist from "../assets/img/scientist.svg";

import IndustriesData from "../assets/data/Industries.json";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Industries = () => {

  const FirstSectionData = IndustriesData["firstSectionContent"];

  return (
    <>
      <Navbar />
      <Wrapper>
        <SolutionsContentWrapper 
        photoSrc = {scientist}
        data = {FirstSectionData}
        backgroundColor = "#002D2F"
        fontColor="#fff" isWhiteGradient={true}/> 
      <PhoneWrapper
        header={"Lorem Ipsum është një tekst shabllon"}
        description={"Lorem Ipsum është një tekst shabllon i industrisë së printimit dhe shtypshkronjave lorem "}
        imageSource={machines} isButtonHidden={true}/>
      <PhoneWrapper
        header={"Lorem Ipsum është një tekst shabllon"}
        description={"Lorem Ipsum është një tekst shabllon i industrisë së printimit dhe shtypshkronjave lorem "}
        imageSource={man_with_charts}
        isBackground={true} buttonText={"Order your data set"}/>
      <PhoneWrapper
        header={"Lorem Ipsum është një tekst shabllon"}
        description={"Lorem Ipsum është një tekst shabllon i industrisë së printimit dhe shtypshkronjave lorem "}
        imageSource={computer_vision} isButtonHidden={true}/>
      </Wrapper>
      <Footer />
    </>
  )
}
export default Industries
