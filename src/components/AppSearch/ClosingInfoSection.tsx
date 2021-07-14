import React, {useState} from "react";
import {useSpring} from "react-spring";

import UpperInfoComponent from "./UpperInfoComponent";
import AppSearchStyledComponents from "./AppSearchStyledComponents";

const Decoration = AppSearchStyledComponents.Decoration;

const ClosingInfoSection = () => {

    const [isClosed, changeClosed] = useState(false);

    const InfoStyle = useSpring({
        height: isClosed ? "0px" : "6vh"
    });

    const DecoStyle = useSpring({
        height: isClosed ? "0px" : "5px"
    });

    return <>
        <UpperInfoComponent closeCallback = {() => changeClosed(!isClosed)} dynamicStyles = {InfoStyle}/>
        <Decoration style = {DecoStyle}/>
    </>;
};

export default ClosingInfoSection;