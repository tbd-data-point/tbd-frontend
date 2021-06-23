import { device } from '../../assets/styles/breakpoints'
import styled from 'styled-components'

const OpenNavbarButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column: openButton;
  height: 23px;
  width: 30px;
  @media ${device.laptop} {
    display: none;
  }
`

type Test = {
  readonly transformTop?: boolean
  readonly transformMiddle?: boolean
  readonly transformBottom?: boolean
}

const Line = styled.div<Test>`
  width: 100%;
  height: 3px;
  background: black;
  transition: ${(props) =>
      props.transformMiddle ? '100ms' : '250ms'}
    ease-out;
  transform: ${(props) =>
    props.transformTop
      ? 'translate3d(0px, 10px, 0) rotate(45deg)'
      : props.transformBottom
      ? 'translate3d(0px, -10px, 0) rotate(-45deg)'
      : 'none'};
  opacity: ${(props) =>
    props.transformMiddle ? '0' : '1'};
`

type RespOpeningBtn = {
  openCallback: () => void
  isOpen: boolean
}

const RespOpeningBtn = ({
  openCallback,
  isOpen,
}: RespOpeningBtn) => {
  return (
    <OpenNavbarButton role="button" onClick={openCallback}>
      <Line transformTop={isOpen} />
      <Line transformMiddle={isOpen} />
      <Line transformBottom={isOpen} />
    </OpenNavbarButton>
  )
}

export default RespOpeningBtn
