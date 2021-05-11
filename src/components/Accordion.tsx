import styled from 'styled-components'
import React, { useState } from 'react'
import { Spring, animated as a } from 'react-spring/renderprops'

interface WrapperProps  {
    readonly fontSize?: string
}

const Wrapper = styled(a.div)<WrapperProps>`
    font-size: ${props => props.fontSize || '32px'};
    overflow: hidden;
    text-overflow: ellipsis;
    color: black;
`

interface LabelProps {
    readonly fontSize?: string
}

const Label = styled.h1<LabelProps>`
    font-size: ${props => props.fontSize || '34px'};
    cursor: pointer;
`

type propsType = {
    labelFontSize?: string,
    label: string,
    fontSize?: string,
    children: React.ReactNode,
    defaultOpen?: boolean
}

const Accordion = ({labelFontSize, label, fontSize, children, defaultOpen=false}: propsType) => {
    const [isOpen, setOpen] = useState(defaultOpen)
    const changeOpen = () => {
        setOpen(!isOpen)
    }

    return <>
    <Label onClick={changeOpen} fontSize={labelFontSize}>
        {label}
    </Label>
    <Spring
        native
        from={{
             height: 0,
        }}
        to={{
            height: isOpen ? 'auto' : 0
        }}>
            {props => <Wrapper fontSize={fontSize} onClick={changeOpen} style={props}>{children}</Wrapper>}
    </Spring>
    </>
}

export default Accordion