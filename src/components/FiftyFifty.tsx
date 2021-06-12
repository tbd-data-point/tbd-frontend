import styled from 'styled-components'
import TextRightSupport from "./FiftyFifty/TextRightSupport";

interface WrapperProps {
  readonly height: string
}

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: ${(props) => props.height};
  display: flex;
`

type Props = {
  textWidth?: string
  src: string
  height?: string
  children: React.ReactNode
  background?: string
  color?: string
  textRight?: boolean
}

const FiftyFifty = ({
  textWidth = '50%',
  src,
  height = '85vh',
  background = 'white',
  color = 'black',
  textRight = false,
  children,
}: Props) => {
  return (
    <Wrapper height={height}>
      <TextRightSupport textRight = {textRight} textWidth = {textWidth} src={src}
      color={color} background={background} children = {children}/>
    </Wrapper>
  )
}

export default FiftyFifty
