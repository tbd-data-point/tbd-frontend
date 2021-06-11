import styled from 'styled-components'
import React from 'react'
import { useSpring, animated as a } from 'react-spring'
import { useMeasure } from '../components/helpers/hooks'

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
  color: #ffffff;
  font-size: 38px;
  cursor: pointer;
  margin: 15px 0 0 0;
`

const Content = styled(a.div)`
  cursor: pointer;
  color: #fdfdfd;
  font-size: 26px;
`

type TreeType = {
  label: string
  children: React.ReactNode
  open: boolean
  id: number
  clickHandler: (i: number) => void
}

const Accordion = React.memo(
  ({
    label = '',
    open = false,
    children,
    id,
    clickHandler,
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
