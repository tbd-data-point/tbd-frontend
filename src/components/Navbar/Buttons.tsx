import React from "react";
import NavbarStyledComponents from "./NavbarStyledComponents";
import GradientButton from './GradientButton';

const ButtonWrapper = NavbarStyledComponents.ButtonWrapper;

type ButtonsProps = {
    loginCallback: () => void,
    signupCallback: () => void,
    isResp: boolean
};

const Buttons = ({loginCallback, signupCallback, isResp}: ButtonsProps) => {
    return <ButtonWrapper isResp={isResp}>
      <GradientButton
        onClick={loginCallback}
        role="button" topPos = "55vh"
      >
        Login
      </GradientButton>
      <GradientButton onClick={signupCallback} topPos = "62vh">
        Signup
      </GradientButton>
    </ButtonWrapper>;
}

export default Buttons;