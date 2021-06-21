import styled from 'styled-components'
import { device } from '../assets/styles/breakpoints'

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Caption = styled.h1`
  color: black;
  font-size: 36px;
  @media ${device.tablet} {
    font-size: 48px;
  }
  @media ${device.laptop} {
    font-size: 64px;
  }
`

const Loading = () => {
  return (
    <Wrapper>
      <Caption>Loading...</Caption>
    </Wrapper>
  )
}

export default Loading
