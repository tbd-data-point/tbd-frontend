import React from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import { IconContext } from 'react-icons';

import {Middle, SearchBar, SearchIcon} from "./AppSearchStyledComponents";

const MiddleSection = () => {
    return  <Middle>
        <SearchBar
        placeholder="Search for your next job..."
        type="text"
        ></SearchBar>
        <SearchIcon>
        <IconContext.Provider
            value={{ color: 'white', size: '30px' }}
        >
            <AiOutlineSearch />
        </IconContext.Provider>
        </SearchIcon>
    </Middle>
}

export default MiddleSection;