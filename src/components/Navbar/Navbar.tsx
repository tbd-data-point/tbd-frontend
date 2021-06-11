import Login from './Login'
import Signup from './Signup'
import styled from 'styled-components'
import logo from '../../assets/img/logo.svg'
import { useState, useEffect } from 'react'
import { navbarElements } from './NavbarElements'
import { colors } from '../../assets/styles/colors'
import { Link } from 'react-router-dom'
import AdditionalInfo from './AdditionalInfo'
import GradientButton from './GradientButton'

const Wrapper = styled.nav`
  width: 100%;
  height: 70px;
  display: grid;
  grid-template-columns: 80px [logo] auto [links] auto [buttons] 1fr 80px;
  border-bottom: 0.03em solid black;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
`

const LinkWrapper = styled.ul`
  overflow: hidden;
  list-style-type: none;
  grid-column: links;
  display: flex;
  align-items: center;
`

const Flex = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
`

const LinkElement = styled.li`
  float: left;
  margin-left: 13px;
  transition: 0.2s ease-out;
  border-radius: 4px;
  padding: 5px;
  &:hover {
    background: ${colors.grey8};
  }
`

const Logo = styled.img`
  height: 40px;
`

const LogoLink = styled(Link)`
  grid-column: logo;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Decoration = styled.div`
  clip-path: polygon(50% 0%, 90% 50%, 50% 100%, 10% 50%);
  background: ${colors.gradientLight};
  width: 8px;
  height: 8px;
  position: relative;
  top: 6px;
  margin-right: 8px;
`

const ButtonWrapper = styled.div`
  grid-column: buttons;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

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
      <Login isOpen={login} changeOpen={changeLogin} />
      <Signup isOpen={signup} changeOpen={changeSignup} />
      <AdditionalInfo>
        Lorem Ipsum klasdjf;lkasjf lfkjdsa;lk
        dsakjfhdlkjashfldkjahlfkdjhalfkdjhlkjdfhslkjdslaujhfkdsjhaflkjdshlfkjdhlafdjhldksj
      </AdditionalInfo>
      <Wrapper>
        <LogoLink to={'/'}>
          <Logo alt="Logo" src={logo} />
        </LogoLink>
        <LinkWrapper>
          {navbarElements.map((v, i) => {
            return (
              <Link to={v.url}>
                <LinkElement key={i}>
                  <Flex>
                    <Decoration />
                    {v.label}
                  </Flex>
                </LinkElement>
              </Link>
            )
          })}
        </LinkWrapper>
        <ButtonWrapper>
          <GradientButton
            onClick={changeLogin}
            role="button"
          >
            Login
          </GradientButton>
          <GradientButton onClick={changeSignup}>
            Signup
          </GradientButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  )
}

export default Navbar
