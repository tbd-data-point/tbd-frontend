import { useSpring } from 'react-spring'

import SignInUpStyledComponents from "./SignInUpStyledComponents";

const Wrapper = SignInUpStyledComponents.Wrapper;
const CloseButton = SignInUpStyledComponents.CloseButton;
const Button = SignInUpStyledComponents.Button;
const ButtonWrapper = SignInUpStyledComponents.ButtonWrapper;

type SignInUpProps = {
  isOpen: boolean
  changeOpen: () => void
  mode: string
}

const SignInUp = ({ isOpen, changeOpen, mode }: SignInUpProps) => {
  const style = useSpring({
    top: isOpen ? '0vh' : '-100%',
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
        <ButtonWrapper to={modeForLinks} respTop={"120px"}>
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
