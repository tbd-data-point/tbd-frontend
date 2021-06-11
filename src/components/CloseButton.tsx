import styled from 'styled-components'
import React from 'react'

interface ButtonProps {
  readonly color: string
}

const Button = styled.div<ButtonProps>`
  width: 100%;
  height: 100%;
  background: ${(props) => props.color};
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

type PropsTypes = {
  onClick?: () => void
  style?: React.CSSProperties
  color?: string
}

const CloseButton = ({
  color = 'black',
  onClick,
  style,
}: PropsTypes) => {
  return (
    <div
      style={{ ...style, cursor: 'pointer' }}
      onClick={onClick ? onClick : () => {}}
      role="button"
    >
      <Button color={color} />
    </div>
  )
}

export default CloseButton
