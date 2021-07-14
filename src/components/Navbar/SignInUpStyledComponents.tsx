import styled from 'styled-components'
import { animated as a } from 'react-spring'
import { Link } from 'react-router-dom'
import { device } from '../../assets/styles/breakpoints'

interface ButtonWrapperProps {
  readonly margin?: string
  readonly respTop?: string
}

interface ButtonType {
  readonly inverted?: boolean
}

type WrapperType = {
  readonly isOpen: boolean
}

export const Wrapper = styled.section<WrapperType>`
  position: fixed;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-overflow: ellipsis;
  overflow-x: hidden;
  font-size: 40px;
  z-index: 100;
  flex-direction: column;
  transition: 300ms ease-out;
  transform: translateY(
    ${(props) => (props.isOpen ? '0' : '-100vh')}
  );
  @media ${device.laptop} {
    flex-direction: row;
  }
`

export const CloseButton = styled.div`
  width: 30px;
  height: 30px;
  background: black;
  clip-path: polygon(
    12% 0,
    0 12%,
    38% 50%,
    0 88%,
    12% 100%,
    50% 63%,
    88% 100%,
    100% 88%,
    65% 50%,
    100% 12%,
    88% 0,
    50% 38%
  );
  @media (max-width: 492px) {
    width: 20px;
    height: 20px;
  }
`

export const Button = styled.span<ButtonType>`
  font-size: 0.8em;
  border: 0.03em solid black;
  width: 100%;
  height: 100%;
  padding: 30px 40px;
  color: ${(props) => (props.inverted ? 'white' : 'black')};
  background: ${(props) =>
    props.inverted ? 'black' : 'white'};
  transition: 0.2s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonWrapper = styled(
  Link,
)<ButtonWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  background: transparent;
  &:hover span {
    transform: translateY(-6px) scale(1.05);
  }
  margin: 40px 0px;

  @media ${device.laptop} {
    margin: ${(props) =>
      props.margin ? props.margin : '0 50px'};
  }
`
