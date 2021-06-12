import React from "react";
import NavbarStyledComponents from "./NavbarStyledComponents";
import GradientButton from './GradientButton';

const ButtonWrapper = NavbarStyledComponents.ButtonWrapper;

type ButtonsProps = {
    loginCallback: () => void,
    signupCallback: () => void
};

const Buttons = ({loginCallback, signupCallback}: ButtonsProps) => {
    return         <ButtonWrapper>
    <GradientButton
      onClick={loginCallback}
      role="button"
    >
      Login
    </GradientButton>
    <GradientButton onClick={signupCallback}>
      Signup
    </GradientButton>
  </ButtonWrapper>;
}

export default Buttons;