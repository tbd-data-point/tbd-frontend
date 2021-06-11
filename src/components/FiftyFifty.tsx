import styled from 'styled-components'

interface WrapperProps {
  readonly height: string
}

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: ${(props) => props.height};
  display: flex;
`

interface TextProps {
  readonly width: string
  readonly background: string
  readonly color: string
}

const Text = styled.div<TextProps>`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  padding: 8%;
`

interface ImgProps {
  readonly width: string
}

const Image = styled.img<ImgProps>`
  height: 100%;
  width: calc(100% - ${(props) => props.width});
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
      {textRight ? (
        <>
          <Image width={textWidth} src={src} />
          <Text color={color} background={background} width={textWidth}>
            {children}
          </Text>
        </>
      ) : (
        <>
          <Text color={color} background={background} width={textWidth}>
            {children}
          </Text>
          <Image width={textWidth} src={src} />{' '}
        </>
      )}
    </Wrapper>
  )
}

export default FiftyFifty
