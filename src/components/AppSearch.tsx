import React from "react";
import {Search, Left, Right, Circle, DropDown, Logo, Wrapper} from "./AppSearch/AppSearchStyledComponents";
import MiddleSection from "./AppSearch/MiddleSection";
import ClosingInfoSection from "./AppSearch/ClosingInfoSection";
import SearchIconComponent from "./AppSearch/SearchIconComponent";
import RespOpeningBtn from "./Navbar/RespOpeningBtn";

import a from '../assets/img/a.jpg'
import logo from '../assets/img/logo.svg'

type AppSearchProps = {
  openMenu?: any,
  openingStatus?: boolean
};

const AppSearch = ({openMenu, openingStatus} : AppSearchProps) => {
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
            <SearchIconComponent isRWD={true} fontSize="20px"/>
            <RespOpeningBtn openCallback={openMenu} isOpen={openingStatus}/>
          </Right>
        </Search>
      </Wrapper>
    </>
  )
}

export default AppSearch
