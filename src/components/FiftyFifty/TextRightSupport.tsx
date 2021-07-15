import React from "react"
import {Image, Text} from "./StyledComponents";

type TextSupportProps = {
    textRight?: boolean,
    textWidth?: string,
    src?: string,
    children: React.ReactNode
    background?: string
    color?: string
};

type TextFunctionProps =  {
    width?: string,
    background?: string,
    color?: string,
    children?: React.ReactNode,
};

type ImgFunctionProps = {
    textWidth?: string,
    src?: any
};

const ImageContainer = ({ textWidth, src }: ImgFunctionProps) => {
    return <Image width={textWidth} src = {src}/>;
}

const TextContainer = ({width, color, background, children}: TextFunctionProps) => {
    return <Text color={color} background={background} width={width}>
        {children}
    </Text>
}

const TextRightSupport = ({textRight, textWidth, src, color, background, children} : TextSupportProps) => {
    return textRight ? <>
        <ImageContainer textWidth = {textWidth} src = {src}/>
        <TextContainer width = {textWidth} background={background} color={color} children={children}/>
    </> : <>
        <TextContainer width = {textWidth} background={background} color={color} children={children}/>
        <ImageContainer textWidth = {textWidth} src = {src}/>{' '}
    </>;
};
export default TextRightSupport;