import React from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import { IconContext } from 'react-icons';
import {SearchIcon} from "./AppSearchStyledComponents";

type SearchIconProps = {
    isRWD?: boolean,
    fontSize?: string
};

const SearchIconComponent = ({isRWD, fontSize} : SearchIconProps) => {
    return <SearchIcon isRWD={isRWD}>
        <IconContext.Provider
            value={{ color: 'white', size: fontSize }}
        >
            <AiOutlineSearch />
        </IconContext.Provider>
    </SearchIcon>
};

export default SearchIconComponent;