import styled from 'styled-components'
import { animated as a, useSpring } from 'react-spring'
import { Link } from 'react-router-dom'

const Wrapper = styled(a.section)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-overflow: ellipsis;
  overflow-x: hidden;
  font-size: 40px;
  z-index: 100;
`

const CloseButton = styled.div`
  width: 30px;
  height: 30px;
  background: black;
  clip-path: polygon(
    12% 0,
    0 12%,
    38% 50%,
    0 88%,
    12% 100%,
    50% 63%,
    88% 100%,
    100% 88%,
    65% 50%,
    100% 12%,
    88% 0,
    50% 38%
  );
`

interface ButtonType {
  readonly inverted?: boolean
}

const Button = styled.span<ButtonType>`
  font-size: 30px;
  border: 0.03em solid black;
  width: 100%;
  height: 100%;
  color: ${(props) => (props.inverted ? 'white' : 'black')};
  background: ${(props) =>
    props.inverted ? 'black' : 'white'};
  transition: 0.2s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
`

interface ButtonWrapperProps {
  readonly margin?: string
}

const ButtonWrapper = styled(Link)<ButtonWrapperProps>`
  width: 300px;
  height: 100px;
  margin: ${(props) =>
    props.margin ? props.margin : 'none'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  background: transparent;
  &:hover span {
    transform: translateY(-6px) scale(1.05);
  }
`

type SignInUpProps = {
  isOpen: boolean
  changeOpen: () => void
  mode: string
}

const SignInUp = ({ isOpen, changeOpen, mode }: SignInUpProps) => {
  const style = useSpring({
    top: isOpen ? '0vh' : '-100vh',
  })
  const modeForLinks = "/"+mode.toLocaleLowerCase();
  return (
    <>
      <Wrapper style={style}>
        <div
          style={{
            cursor: 'pointer',
            position: 'absolute',
            top: '12%',
            right: '10%',
          }}
          onClick={changeOpen}
        >
          <CloseButton />
        </div>
        <ButtonWrapper to={modeForLinks}>
          <Button>Buyer {mode}</Button>
        </ButtonWrapper>
        <ButtonWrapper to={modeForLinks} margin="0 0 0 80px">
          <Button inverted>Worker {mode}</Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  )
}

export default SignInUp
