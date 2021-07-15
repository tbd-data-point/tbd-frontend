import React from "react";

import {Middle, SearchBar} from "./AppSearchStyledComponents";
import SearchIconComponent from "./SearchIconComponent";

const MiddleSection = () => {
    return  <Middle>
        <SearchBar
        placeholder="Search for your next job..."
        type="text"
        ></SearchBar>
        <SearchIconComponent isRWD={false} fontSize="30px"/>
    </Middle>
}

export default MiddleSection;