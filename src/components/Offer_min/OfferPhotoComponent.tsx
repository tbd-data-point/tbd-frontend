import React from "react";
import {OfferPhotoWrap, SamplePhoto} from "./OfferMinStyledComponents";

const OfferPhotoComponent = ({filesLength, mappingData, photoClickCallback, smallPreview} : any) => {
    return <OfferPhotoWrap>
    {filesLength > 2 ? (
        <>
            <div
                className={"previewArrow"}
                style={{ transform: "rotate(180deg)", left: "10px" }}></div>
            <div className={"previewArrow"} style={{ right: "10px" }}></div>
        </>
    ) : null}

    {mappingData.slice(smallPreview, smallPreview + 2).map((elem: string, i: number) => {
        return (
            <SamplePhoto
                key={elem}
                src={`http://localhost:5000${elem}`}
                alt="Sample data"
                onClick={() => photoClickCallback(i)}
            />
        )
    })}
</OfferPhotoWrap>
};

export default OfferPhotoComponent;