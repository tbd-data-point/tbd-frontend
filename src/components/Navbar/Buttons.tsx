import React from 'react'
import { ButtonWrapper } from './NavbarStyledComponents'
import GradientButton from './GradientButton'

type ButtonsProps = {
  loginCallback: () => void
  signupCallback: () => void
}

const Buttons = ({
  loginCallback,
  signupCallback,
}: ButtonsProps) => {
  return (
    <ButtonWrapper>
      <GradientButton onClick={loginCallback} role="button">
        Login
      </GradientButton>
      <GradientButton onClick={signupCallback}>
        Signup
      </GradientButton>
    </ButtonWrapper>
  )
}

export default Buttons
