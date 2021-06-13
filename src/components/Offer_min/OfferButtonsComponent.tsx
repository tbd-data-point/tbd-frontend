import React from "react";
import OfferMinStyledComponents from "./OfferMinStyledComponents";

const OfferButtons = OfferMinStyledComponents.OfferButtons;
const Button = OfferMinStyledComponents.Button;

const ButtonSupport = ({buttonText, callback, ifUpload}: any) => {
    return <div style={{ flexGrow: 1, marginLeft: "2px" }}>
        <Button upload={ifUpload} onClick={callback}>
            {buttonText}
        </Button>
    </div>;
}

const OfferButtonsComponent = ({uploadCallback, detailsCallback}: any) => {
    return  <OfferButtons>
        <ButtonSupport buttonText="Upload Photos" callback={uploadCallback} ifUpload={true}/>
        <ButtonSupport buttonText="See details" callback={detailsCallback} ifUpload={false}/>
    </OfferButtons>;
};

export default OfferButtonsComponent;