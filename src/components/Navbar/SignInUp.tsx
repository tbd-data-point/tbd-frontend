import { useSpring } from 'react-spring'

import {
  Wrapper,
  CloseButton,
  ButtonWrapper,
  Button,
} from './SignInUpStyledComponents'

type SignInUpProps = {
  isOpen: boolean
  changeOpen: () => void
  mode: string
}

const SignInUp = ({
  isOpen,
  changeOpen,
  mode,
}: SignInUpProps) => {
  const modeForLinks = '/' + mode.toLocaleLowerCase()
  return (
    <>
      <Wrapper isOpen={isOpen}>
        <div
          style={{
            cursor: 'pointer',
            position: 'absolute',
            top: '12%',
            right: '10%',
          }}
          onClick={changeOpen}
          role="button"
        >
          <CloseButton />
        </div>
        <ButtonWrapper to={modeForLinks} respTop={'120px'}>
          <Button>Buyer {mode}</Button>
        </ButtonWrapper>
        <ButtonWrapper to={modeForLinks}>
          <Button inverted>Worker {mode}</Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  )
}

export default SignInUp
