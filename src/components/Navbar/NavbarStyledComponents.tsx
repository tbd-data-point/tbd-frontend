import styled from 'styled-components'
import { animated as a } from 'react-spring'
import { colors } from '../../assets/styles/colors'
import { Link } from 'react-router-dom'

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
  grid-template-columns: 80px [logo] auto [links] auto [buttons] 1fr 80px;
  border-bottom: 0.03em solid black;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
`

export const ResponsiveWrapper = styled(
  a.nav,
)<ResponsiveWrapperProps>`
  width: 100%;
  height: 100%;
  display: none;
  position: fixed;
  top: 10vh;
  background: white;
  z-index: 10;
  @media (max-width: 738px) {
    width: 100%;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  }
`

export const LinkWrapper = styled.ul<ButtonWrapperProps>`
  overflow: hidden;
  list-style-type: none;
  grid-column: links;
  display: flex;
  align-items: center;
  @media (max-width: 738px) {
    display: ${(props) => (props.isResp ? 'flex' : 'none')};
    grid-column: auto;
    width: 100%;
  }
`

export const Flex = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  @media (max-width: 738px) {
    width: 100%;
    height: 100%;
    display: none;
    position: fixed;
    top: 10vh;
    background: white;
    z-index: 10;
    @media (max-width: 738px){
      display: ${(props) =>
        props.isOpen ? 'flex' : 'none'};
    }
  `

export const LinkWrapper = styled.ul<ButtonWrapperProps>`
  overflow: hidden;
  list-style-type: none;
  grid-column: links;
  display: flex;
  align-items: center;
  @media (max-width: 738px) {
    display: ${(props) => (props.isResp ? 'flex' : 'none')};
    grid-column: auto;
    width: 100%;
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
  float: left;
  margin-left: 13px;
  transition: 0.2s ease-out;
  border-radius: 4px;
  padding: 5px;
  &:hover {
    background: ${colors.grey8};
  }

  @media (max-width: 923px) {
    font-size: 0.8em;
  }

  @media (max-width: 823px) {
    font-size: 0.6em;
  }

  @media (max-width: 738px) {
    display: flex;
    width: 40%;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 27%;
    top: ${(props) => props.topPosition};
    font-size: 1em;
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
  }
`

export const LinkElement = styled.li<LinkElementProps>`
  float: left;
  margin-left: 13px;
  transition: 0.2s ease-out;
  border-radius: 4px;
  padding: 5px;
  &:hover {
    background: ${colors.grey8};
  }

  @media (max-width: 923px) {
    font-size: 0.8em;
  }

  @media (max-width: 823px) {
    font-size: 0.6em;
  }

  @media (max-width: 738px) {
    display: flex;
    width: 40%;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 27%;
    top: ${(props) => props.topPosition};
    font-size: 1em;
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

  @media (max-width: 738px) {
    grid-column: auto;
  }
`

export const Decoration = styled.div`
  clip-path: polygon(50% 0%, 90% 50%, 50% 100%, 10% 50%);
  background: ${colors.gradientLight};
  width: 8px;
  height: 8px;
  position: relative;
  top: 6px;
  margin-right: 8px;

  @media (max-width: 923px) {
    top: 4px;
  }

  @media (max-width: 823px) {
    top: 2px;
  }

  @media (max-width: 738px) {
    display: none;
  }
`

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  grid-column: buttons;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 738px) {
    display: ${(props) => (props.isResp ? 'flex' : 'none')};
    grid-column: auto;
    width: 100%;
    justify-content: center;
  }
`
