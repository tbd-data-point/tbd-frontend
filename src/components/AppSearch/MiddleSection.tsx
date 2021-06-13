import React from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import { IconContext } from 'react-icons';

import AppSearchStyledComponents from "./AppSearchStyledComponents";

const Middle = AppSearchStyledComponents.Middle;
const SearchBar = AppSearchStyledComponents.SearchBar;
const SearchIcon = AppSearchStyledComponents.SearchIcon;

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