import styled from 'styled-components'
import { colors } from '../../assets/styles/colors'
import React from 'react'
import { device } from '../../assets/styles/breakpoints'

const ButtonBackground = styled.div`
  background: ${colors.gradientBtn};
  border-radius: 50px;
  padding: 1px;
  margin: 12px 0px;
  text-align: center;
  @media ${device.laptop} {
    float: right;
    margin: 0px 20px 0px 0px;
    border-radius: 25px;
  }
`

const Button = styled.div`
  background: white;
  border-radius: 50px;
  padding: 6px 40px;
  cursor: pointer;
  font-size: 32px;

  @media ${device.laptop} {
    padding: 2px 16px;
    font-size: 16px;
    border-radius: 25px;
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
