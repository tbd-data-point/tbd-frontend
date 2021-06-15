import React from "react";

import OfferFilterStyledComponents from "../OfferFilterStyledComponents";
import TaggedInput from "../../Tagged-input";

const Filter = OfferFilterStyledComponents.Filter;


const Keywords = ({tags,setTags}:any) => {
    return <Filter>
        <p>Keywords</p>
        <TaggedInput
        tags={tags}
        setTags={setTags}
        style={{ fontSize: '15px', height: '40px' }}
        />
    </Filter>;
}

export default Keywords;