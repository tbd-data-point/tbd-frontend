import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { navbarElements } from './NavbarElements'
import GradientButton from './GradientButton'

const LinkElement = styled(Link)`
  font-size: 32px;
  margin: 12px 0px;
`

const MobileLinkWrapper = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

type MobileLinksProps = {
  signupCallback: () => void
  loginCallback: () => void
}

const MobileLinks = ({
  signupCallback,
  loginCallback,
}: MobileLinksProps) => {
  return (
    <MobileLinkWrapper>
      {navbarElements.map((v, i) => {
        return (
          <LinkElement key={`link_${i}`} to={v.url}>
            {v.label}
          </LinkElement>
        )
      })}
      <GradientButton onClick={loginCallback}>
        Login
      </GradientButton>
      <GradientButton onClick={signupCallback}>
        Signup
      </GradientButton>
    </MobileLinkWrapper>
  )
}

export default MobileLinks
