import React from "react";
import AppSearchStyledComponents from "./AppSearchStyledComponents";

const UpperInfo = AppSearchStyledComponents.UpperInfo;
const Prompt = AppSearchStyledComponents.Prompt;
const CloseBtn = AppSearchStyledComponents.CloseBtn

const UpperInfoComponent = () => {
    return <UpperInfo>
        <Prompt>
        Lorem Ipsum is simply dummy text of the printing
        and typesetting industry.
        </Prompt>
        <CloseBtn />
    </UpperInfo>;
};

export default UpperInfoComponent;