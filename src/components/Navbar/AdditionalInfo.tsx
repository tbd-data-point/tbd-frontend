import styled from 'styled-components'
import React from 'react'
import CloseButton from '../CloseButton'
import { useSpring, animated as a } from 'react-spring'
import { useState } from 'react'

const Wrapper = styled(a.section)`
  height: 40px;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0px 80px;
`

type PropsTypes = {
  children: React.ReactNode
}

const AdditionalInfo = ({ children }: PropsTypes) => {
  const [toggle, setToggle] = useState(false)
  const style = useSpring({
    height: toggle ? '0px' : '40px',
  })
  return (
    <Wrapper style={style}>
      {children}
      <CloseButton
        color="white"
        onClick={() => setToggle(true)}
        style={{
          margin: '0px 0px 0px auto',
          width: '0.7em',
          height: '0.7em',
        }}
      />
    </Wrapper>
  )
}

export default AdditionalInfo
