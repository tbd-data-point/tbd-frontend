import { useState, useEffect } from 'react'

import AdditionalInfo from './AdditionalInfo'
import Buttons from './Buttons'
import {
  Wrapper,
  LogoLink,
  Logo,
  ResponsiveWrapper,
} from './NavbarStyledComponents'
import SignInUp from './SignInUp'
import LinkWrapperComponent from './LinkWrapperComponent'
import RespOpeningBtn from './RespOpeningBtn'
import MobileLinks from './MobileLinks'

import logo from '../../assets/img/logo.svg'

const Navbar = () => {
  const [login, cL] = useState<boolean>(false)
  const [signup, cS] = useState<boolean>(false)
  const [resp, cR] = useState<boolean>(false)
  const changeLogin = () => {
    cL(!login)
  }
  const changeSignup = () => {
    cS(!signup)
  }
  const changeResp = () => {
    cR(!resp)
  }

  useEffect(() => {
    document.body.style.overflow =
      login || signup || resp ? 'hidden' : 'auto'
  }, [login, signup, resp])

  return (
    <>
      <SignInUp
        isOpen={login}
        changeOpen={changeLogin}
        mode="Login"
      />
      <SignInUp
        isOpen={signup}
        changeOpen={changeSignup}
        mode="Signup"
      />
      <AdditionalInfo>
        Lorem Ipsum klasdjf;lkasjf lfkjdsa;lk
        dsakjfhdlkjashfldkjahlfkdjhalfkdjhlkjdfhslkjdslaujhfkdsjhaflkjdshlfkjdhlafdjhldksj
      </AdditionalInfo>
      <Wrapper>
        <LogoLink to={'/'}>
          <Logo alt="Logo" src={logo} />
        </LogoLink>
        <LinkWrapperComponent />
        <Buttons
          loginCallback={changeLogin}
          signupCallback={changeSignup}
        />
        <RespOpeningBtn
          isOpen={resp}
          openCallback={changeResp}
        />
      </Wrapper>
      <ResponsiveWrapper isOpen={resp}>
        <MobileLinks
          loginCallback={changeLogin}
          signupCallback={changeSignup}
        />
      </ResponsiveWrapper>
    </>
  )
}

export default Navbar
