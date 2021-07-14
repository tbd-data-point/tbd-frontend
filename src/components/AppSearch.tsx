import React from "react";
import AppSearchStyledComponents from "./AppSearch/AppSearchStyledComponents";
import UpperInfoComponent from "./AppSearch/UpperInfoComponent";
import MiddleSection from "./AppSearch/MiddleSection";
import ClosingInfoSection from "./AppSearch/ClosingInfoSection";

import a from '../assets/img/a.jpg'
import logo from '../assets/img/logo.svg'

const Decoration = AppSearchStyledComponents.Decoration;
const Search = AppSearchStyledComponents.Search;
const Left = AppSearchStyledComponents.Left;
const Right = AppSearchStyledComponents.Right;
const Circle = AppSearchStyledComponents.Circle;
const DropDown = AppSearchStyledComponents.DropDown;
const Logo = AppSearchStyledComponents.Logo;
const Wrapper = AppSearchStyledComponents.Wrapper;

const AppSearch = () => {
  return (
    <>
      <Wrapper>
        <ClosingInfoSection/>
        <Search>
          <Left>
            <Logo src={logo}></Logo>
          </Left>
          <MiddleSection/>
          <Right>
            <Circle src={a} />
            <DropDown />
          </Right>
        </Search>
      </Wrapper>
    </>
  )
}

export default AppSearch
