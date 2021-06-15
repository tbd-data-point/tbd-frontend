import React from "react";
import OfferFilterStyledComponents from "../OfferFilterStyledComponents";

const Filter = OfferFilterStyledComponents.Filter;

const Description = ({filterFunction, newFilter} : any) => {
    return <Filter>
        <p>Description</p>
        <input
        type={'text'}
        defaultValue={newFilter.description}
        onChange={(e) => {
            filterFunction(
            Object.assign(
                { ...newFilter },
                { description: e.target.value },
            ),
            )}}></input>
    </Filter>;
};

export default Description;