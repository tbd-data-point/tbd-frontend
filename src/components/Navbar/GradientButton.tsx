import styled from 'styled-components'
import { colors } from '../../assets/styles/colors'
import React from 'react'

interface ButtonBackgroundProps {
  readonly topPosition?: string
}

const ButtonBackground = styled.div<ButtonBackgroundProps>`
  background: ${colors.gradientBtn};
  border-radius: 25px;
  padding: 1px;
  float: right;
  margin-right: 20px;

  @media (max-width: 738px) {
    width: 40%;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 30%;
    top: ${(props) => props.topPosition};
  }
`

const Button = styled.div`
  background: white;
  border-radius: 25px;
  padding: 2px 16px;
  cursor: pointer;

  @media (max-width: 923px) {
    font-size: 0.8em;
  }

  @media (max-width: 823px) {
    font-size: 0.6em;
  }

  @media (max-width: 738px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 1em;
    padding: 6px 16px;
  }
`

type PropsTypes = {
  children: React.ReactNode | string
  onClick?: () => void
  role?: string
  topPos?: string
}

const GradientButton = ({
  children,
  onClick,
  role = 'button',
  topPos = 'auto',
}: PropsTypes) => {
  return (
    <ButtonBackground
      role={role}
      onClick={onClick ? onClick : () => {}}
      topPosition={topPos}
    >
      <Button>{children}</Button>
    </ButtonBackground>
  )
}

export default GradientButton
