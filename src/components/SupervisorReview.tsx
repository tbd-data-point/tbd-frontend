import React from 'react'
import { animated as a } from 'react-spring'
import { Spring } from 'react-spring/renderprops'
import { useDrag } from 'react-use-gesture'
import styled from 'styled-components'

const Wrapper = styled(a.div)`
    height: 500px;
    width: 300px;
    background: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
`

const SupervisorReview = ({children}: {children?: React.ReactNode}) => {
  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {

  })
  
  return (
    <Wrapper
      {...bind()}
      style={{
        // @ts-ignore
        transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`),
      }}
    >
        {children}
        </Wrapper>
  )
}

export default SupervisorReview