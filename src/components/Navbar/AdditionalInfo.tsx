import styled from 'styled-components'
import React from 'react'
import CloseButton from '../CloseButton'
import { useSpring, animated as a } from 'react-spring'
import { useState } from 'react'

const Wrapper = styled(a.section)`
  height: 6vh;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0px 80px;

  @media (max-width: 1020px){
    font-size: 0.8em;
  }
  @media (max-width: 836px){
    font-size: 0.6em;
  }
  @media (max-width: 740px){
    display: none;
    height: 0;
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
