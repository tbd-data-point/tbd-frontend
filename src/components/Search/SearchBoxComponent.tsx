import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from 'react-icons';

import {SearchBox, Left, Middle, Right, SearchIcon, SearchBar, Circle, DropDown, Logo} from "./SearchStyledComponents";

import a from '../../assets/img/a.jpg';
import logo from '../../assets/img/logo.svg';

const SearchBoxComponent = () => {
    return <SearchBox>
        <Left>
            <Logo src={logo}></Logo>
        </Left>
        <Middle>
            <SearchBar
                placeholder="Search for your next job..."
                type="text"></SearchBar>
            <SearchIcon>
                <IconContext.Provider
                value={{ color: 'white', size: '30px' }}>
                    <AiOutlineSearch />
                </IconContext.Provider>
            </SearchIcon>
        </Middle>
        <Right>
            <Circle src={a} />
            <DropDown />
        </Right>
    </SearchBox>;
};

export default SearchBoxComponent;