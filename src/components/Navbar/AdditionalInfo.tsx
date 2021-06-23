import styled from 'styled-components'
import React, { useState } from 'react'
import CloseButton from '../CloseButton'
import { useSpring, animated as a } from 'react-spring'
import { device } from '../../assets/styles/breakpoints'

const Wrapper = styled(a.section)`
  height: 20px;
  background: black;
  color: white;
  align-items: center;
  overflow: hidden;
  padding: 0px 80px;
  display: none;

  @media ${device.laptop} {
    display: flex;
  }
`

type PropsTypes = {
  children: React.ReactNode
}

const AdditionalInfo = ({ children }: PropsTypes) => {
  const [toggle, setToggle] = useState(false)
  const style = useSpring({
    height: toggle ? '0px' : '6vh',
  })
  return (
    <Wrapper style={style}>
      {children}
      <CloseButton
        color="white"
        onClick={() => setToggle(true)}
        style={{
          margin: '0px 0px 0px auto',
          width: '1.5vh',
          height: '1.5vh',
        }}
      />
    </Wrapper>
  )
}

export default AdditionalInfo
