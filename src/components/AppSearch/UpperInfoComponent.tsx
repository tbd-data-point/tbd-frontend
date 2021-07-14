import React, {useState} from "react";
import {useSpring} from "react-spring";
import AppSearchStyledComponents from "./AppSearchStyledComponents";

const UpperInfo = AppSearchStyledComponents.UpperInfo;
const Prompt = AppSearchStyledComponents.Prompt;
const CloseBtn = AppSearchStyledComponents.CloseBtn;

type UpperInfoProps = {
    dynamicStyles?: any,
    closeCallback?: () => void
};

const UpperInfoComponent = ({
    dynamicStyles,
    closeCallback
} : UpperInfoProps) => {

    const [isClosed, closeThePrompt] = useState(false);

    const additionalStyles = useSpring({
        height: isClosed ? "0px" : "6vh"
    });

    return <UpperInfo style = {dynamicStyles}>
        <Prompt>
        Lorem Ipsum is simply dummy text of the printing
        and typesetting industry.
        </Prompt>
        <CloseBtn onClick = {closeCallback}/>
    </UpperInfo>;
};

export default UpperInfoComponent;