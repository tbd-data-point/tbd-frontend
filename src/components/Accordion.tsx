import styled from 'styled-components'
import React from 'react'
import { useSpring, animated as a } from 'react-spring'
import { useMeasure } from '../components/helpers/hooks'

interface ContentProps{
  readonly color?: string
}

const TreeView = styled.div`
  position: relative;
  padding: 0 0 16px 8px;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Label = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-overflow: ellipsis;
  overflow-x: hidden;
  color: #000000;
  font-size: 38px;
  cursor: pointer;
  margin: 15px 0 0 0;
    
  @media (max-width: 1316px){
    font-size: 28px;
  }
  
  @media (max-width: 1037px){
    font-size: 22px;
  }  

  @media (max-width: 664px){
    font-size: 18px;
  }

  @media (max-width: 454px){
    font-size: 16px;
  }
`

const Content = styled(a.div)<ContentProps>`
  cursor: pointer;
  color: ${(props) => 
    props.color ? props.color : "#000000"};
  font-size: 26px;
  
  @media (max-width: 1316px){
    font-size: 20px;
  }
  @media (max-width: 664px){
    font-size: 16px;
  }
  @media (max-width: 454px){
    font-size: 14px;
  }
`

type TreeType = {
  label: string
  children: React.ReactNode
  open: boolean
  id: number
  clickHandler: (i: number) => void,
  color?: string
}

const Accordion = React.memo(
  ({
    label = '',
    open = false,
    children,
    id,
    clickHandler,
    color = "#000"
  }: TreeType) => {
    const [
      bind,
      {
        //@ts-expect-error
        height: viewHeight,
      },
    ] = useMeasure()
    const { height, opacity, transform } = useSpring({
      from: {
        height: 0,
        opacity: 0,
        transform: 'translate3d(0px, 0, 0)',
      },
      to: {
        height: open ? viewHeight : 0,
        opacity: open ? 1 : 0,
        transform: open
          ? 'translate3d(10px, 0px, 0px)'
          : 'translate3d(0px, 0px, 0px)',
      },
    })
    return (
      <>
        <TreeView>
          <Label
            onClick={() => clickHandler(id)}
            style={
              open
                ? { color: '#FFFFFF', cursor: 'default' }
                : { color: '#C7C7C7', cursor: 'pointer' }
            }
          >
            {label}
          </Label>

          <Content
            onClick={() => clickHandler(id)}
            style={{ height, opacity }}
            color={color}
          >
            <a.div {...bind} style={{ transform }}>
              {children}
            </a.div>
          </Content>
        </TreeView>
      </>
    )
  },
)

export default Accordion
