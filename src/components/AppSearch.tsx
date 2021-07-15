import React from "react";
import {Search, Left, Right, Circle, DropDown, Logo, Wrapper} from "./AppSearch/AppSearchStyledComponents";
import MiddleSection from "./AppSearch/MiddleSection";
import ClosingInfoSection from "./AppSearch/ClosingInfoSection";

import a from '../assets/img/a.jpg'
import logo from '../assets/img/logo.svg'

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
