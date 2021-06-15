import React from "react";
import SearchStyledComponents from "./SearchStyledComponents";

const UpperInfo = SearchStyledComponents.UpperInfo;
const Prompt = SearchStyledComponents.Prompt;
const CloseBtn = SearchStyledComponents.CloseBtn;

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