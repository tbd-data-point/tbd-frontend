import React, {useState} from "react";
import {useSpring} from "react-spring";
import {UpperInfo, Prompt, CloseBtn} from "./AppSearchStyledComponents";

type UpperInfoProps = {
    dynamicStyles?: any,
    closeCallback?: () => void
};

const UpperInfoComponent = ({
    dynamicStyles,
    closeCallback
} : UpperInfoProps) => {
    return <UpperInfo style = {dynamicStyles}>
        <Prompt>
        Lorem Ipsum is simply dummy text of the printing
        and typesetting industry.
        </Prompt>
        <CloseBtn onClick = {closeCallback}/>
    </UpperInfo>;
};

export default UpperInfoComponent;