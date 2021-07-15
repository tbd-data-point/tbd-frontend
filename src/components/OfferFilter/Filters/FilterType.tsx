import React from "react";
import {Filter} from "../OfferFilterStyledComponents";

const FilterType = ({filterFunction, newFilter} : any) => {
    const options = [
        {"value": "photo", "text": "Image"},
        {"value": "audio", "text": "Audio"},
        {"value": "csv", "text": "CSV"},
        {"value": "txt", "text": "Text"},
    ];
    return <Filter>
        <p>File Type</p>
        <select
        name={'fileType'}
        onChange={(e) => {
            filterFunction(
            Object.assign(
                { ...newFilter },
                { fileType: e.target.value },
            ),
            )
        }}
        defaultValue={newFilter.fileType}
        >
        {options.map(option => 
            <option key = {option["value"]} value={option["value"]}>
                {option["text"]}
            </option>)}
        </select>
    </Filter>;
};

export default FilterType;