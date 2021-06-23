import { Navbar, Footer } from '../components'
import styled from 'styled-components'

import company_start from "../assets/img/company_start.png";
import company_photo from "../assets/img/company_photo.svg";
import company_photo_reversed from "../assets/img/company_photo_reversed.svg";
import PhoneWrapper from '../components/PhoneWrapper';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const HeaderSection = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${company_start});
  background-size: cover;
  background-position-y: center;
  @media (max-width: 710px){
    background-position-y: center;
  }
`;

const Header = styled.header`
  width: 80%;
  font-size: 4.1em;
  color: white;
  position: relative;
  left: 5%;
  @media (max-width: 1004px){
    font-size: 3.6em;
    left: 1%;
  }
  @media (max-width: 778px){
    left: 0%;
    width: 90%;
    font-size: 3em;
  }
  @media (max-width: 582px){
    width: 95%;
    font-size: 2.6em;
    left: 2%;
  }
`;

const Title = styled.div`
  width: 100%;
  height: 30vh;
  padding: 10vh 0 0 0;
  text-indent: 15%;
  color: black;
  font-size: 3.3em;
  letter-spacing: 0.02em;
`;

const Company = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <HeaderSection className="company-header-section">
          <Header>
            Enhancing equality in the artificial intelligence revolution
          </Header>
        </HeaderSection>
        <Title>
          Our team
        </Title>
        <PhoneWrapper
          header = "Lorem ipsum"
          description = "Lorem Ipsum është një tekst shabllon i industrisë së printimit dhe shtypshkronjave"
          isButtonHidden={true} isCompanySection={true}
          imageSource={company_photo}/>
        <PhoneWrapper
          header = "Lorem ipsum"
          description = "Lorem Ipsum është një tekst shabllon i industrisë së printimit dhe shtypshkronjave"
          isButtonHidden={true} isCompanySection={true}
          imageSource={company_photo_reversed} isBackground={true}
          isReversed={true}/>
        <PhoneWrapper
          header = "Lorem ipsum"
          description = "Lorem Ipsum është një tekst shabllon i industrisë së printimit dhe shtypshkronjave"
          isButtonHidden={true} isCompanySection={true}
          imageSource={company_photo}/>
        <PhoneWrapper
          header = "Lorem ipsum"
          description = "Lorem Ipsum është një tekst shabllon i industrisë së printimit dhe shtypshkronjave"
          isButtonHidden={true} isCompanySection={true}
          imageSource={company_photo_reversed} isBackground={true}
          isReversed={true}/>
      </Wrapper>
      <Footer />
    </>
  )
}
export default Company
