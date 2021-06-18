import styled from 'styled-components'
import { colors } from '../../assets/styles/colors'
import React from 'react'

const ButtonBackground = styled.div`
  background: ${colors.gradientBtn};
  border-radius: 25px;
  padding: 1px;
  float: right;
  margin-right: 20px;
`

const Button = styled.div`
  background: white;
  border-radius: 25px;
  padding: 2px 16px;
  cursor: pointer;

  @media (max-width: 923px){
    font-size: 0.8em;
  }

  @media (max-width: 823px){
    font-size: 0.6em;
  }
`

type PropsTypes = {
  children: React.ReactNode | string
  onClick?: () => void
  role?: string
}

const GradientButton = ({
  children,
  onClick,
  role = 'button',
}: PropsTypes) => {
  return (
    <ButtonBackground
      role={role}
      onClick={onClick ? onClick : () => {}}
    >
      <Button>{children}</Button>
    </ButtonBackground>
  )
}

export default GradientButton
