import { useState, useEffect } from 'react'

import AdditionalInfo from './AdditionalInfo'
import Buttons from "./Buttons";
import NavbarStyledComponents from "./NavbarStyledComponents";
import SignInUp from './SignInUp';
import LinkWrapperComponent from "./LinkWrapperComponent";

import logo from '../../assets/img/logo.svg'

const Wrapper = NavbarStyledComponents.Wrapper;
const LogoLink = NavbarStyledComponents.LogoLink;
const Logo = NavbarStyledComponents.Logo;

const Navbar = () => {
  const [login, cL] = useState<boolean>(false)
  const [signup, cS] = useState<boolean>(false)
  const changeLogin = () => {
    cL(!login)
  }
  const changeSignup = () => {
    cS(!signup)
  }

  useEffect(() => {
    document.body.style.overflow =
      login || signup ? 'hidden' : 'auto'
  }, [login, signup])

  return (
    <>
      <SignInUp isOpen = {login} changeOpen={changeLogin} mode = "Login"/>
      <SignInUp isOpen = {signup} changeOpen={changeSignup} mode = "Signup"/>
      <AdditionalInfo>
        Lorem Ipsum klasdjf;lkasjf lfkjdsa;lk
        dsakjfhdlkjashfldkjahlfkdjhalfkdjhlkjdfhslkjdslaujhfkdsjhaflkjdshlfkjdhlafdjhldksj
      </AdditionalInfo>
      <Wrapper>
        <LogoLink to={'/'}>
          <Logo alt="Logo" src={logo} />
        </LogoLink>
        <LinkWrapperComponent/>
        <Buttons loginCallback = {changeLogin} signupCallback={changeSignup}/>
      </Wrapper>
    </>
  )
}

export default Navbar
