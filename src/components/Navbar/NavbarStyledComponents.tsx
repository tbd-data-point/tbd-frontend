import styled from 'styled-components'
import { colors } from '../../assets/styles/colors'
import { Link } from 'react-router-dom'

import { device } from '../../assets/styles/breakpoints'

interface ResponsiveWrapperProps {
  readonly isOpen?: boolean
}
interface ButtonWrapperProps {
  readonly isResp?: boolean
}
interface LinkElementProps {
  readonly topPosition?: string
}

export const Wrapper = styled.nav`
  width: 100%;
  height: 70px;
  display: grid;
  border-bottom: 0.03em solid black;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
  align-items: center;
  grid-template-columns: 8% [logo] auto 1fr [openButton] auto 8%;
  @media ${device.laptop} {
    grid-template-columns: 80px [logo] auto [links] auto [buttons] 1fr 80px;
  }
`

export const ResponsiveWrapper = styled.section<ResponsiveWrapperProps>`
  width: 100%;
  height: calc(100vh - 70px);
  position: fixed;
  top: 70px;
  background: white;
  z-index: 10;
  transform: translateX(
    ${(props) => (props.isOpen ? '0' : '100%')}
  );
  transition: 250ms ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15%;
  font-size: 24px;
  @media ${device.mobileL} {
    font-size: 26px;
  }
  @media ${device.tablet} {
    font-size: 32px;
  }
  @media ${device.laptop} {
    display: none;
  }
`

export const LinkWrapper = styled.ul<ButtonWrapperProps>`
  overflow: hidden;
  display: none;
  list-style-type: none;
  grid-column: links;

  @media ${device.laptop} {
    display: flex;
  }
`

export const Flex = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  @media (max-width: 738px) {
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`

export const LinkElement = styled.li<LinkElementProps>`
  transition: 0.2s ease-out;
  border-radius: 4px;
  padding: 5px;

  @media ${device.laptop} {
    &:hover {
      background: ${colors.grey8};
    }
    margin-left: 13px;
  }
`

export const Logo = styled.img`
  height: 40px;
`

export const LogoLink = styled(Link)`
  grid-column: logo;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Decoration = styled.div`
  clip-path: polygon(50% 0%, 90% 50%, 50% 100%, 10% 50%);
  background: ${colors.gradientLight};
  width: 8px;
  height: 8px;
  position: relative;
  top: 6px;
  margin-right: 8px;
`

export const ButtonWrapper = styled.div`
  grid-column: buttons;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  display: none;

  @media ${device.laptop} {
    display: flex;
  }
`
