import React from "react";
import styled from 'styled-components';

interface OpeningBarProps {
    readonly topPosition?: string
}

const OpeningWrapper = styled.div`
    width: 30px;
    height: 40px;
    float: right;
    align-items: center;
    
    @media (max-width: 738px){
        float: right;
        grid-column: buttons;
    }
`;

const OpeningBar = styled.div<OpeningBarProps>`
    width: 30px;
    height: 5px;
    margin: 2px 0px;
    background: black;
    display: block;
    position: absolute;
    top: ${(props) =>
        props.topPosition ? props.topPosition : "0px"};
        
    @media (max-width: 408px){
        width: 25px;
    }
`;

const RespOpeningBtn = ({openCallback}:any) => {
    return <OpeningWrapper onClick = {() => openCallback()}>
        <OpeningBar topPosition="16px"/>
        <OpeningBar topPosition="26px"/>
        <OpeningBar topPosition="36px"/>
    </OpeningWrapper>;
};

export default RespOpeningBtn;