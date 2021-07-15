import React from "react"
import styled from 'styled-components'

interface ImgProps {
    readonly width?: string
    readonly src?: any
}

interface TextProps {
    readonly width?: string
    readonly background?: string
    readonly color?: string
    readonly children?: React.ReactNode
}

export const Image = styled.img<ImgProps>`
  height: 100%;
  width: calc(100% - ${(props) => props.width});
`

export const Text = styled.div<TextProps>`
    width: ${(props) => props.width};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    padding: 8%;
`