import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from 'react-icons';

import SearchStyledComponents from "./SearchStyledComponents";

import a from '../../assets/img/a.jpg';
import logo from '../../assets/img/logo.svg';

const SearchBox = SearchStyledComponents.SearchBox;
const Left = SearchStyledComponents.Left;
const Middle = SearchStyledComponents.Middle;
const Right = SearchStyledComponents.Right;
const SearchIcon = SearchStyledComponents.SearchIcon;
const SearchBar = SearchStyledComponents.SearchBar;
const Circle = SearchStyledComponents.Circle;
const DropDown = SearchStyledComponents.DropDown;
const Logo = SearchStyledComponents.Logo;

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