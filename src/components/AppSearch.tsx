import { AiOutlineSearch } from 'react-icons/ai'
import { IconContext } from 'react-icons'

import AppSearchStyledComponents from "./AppSearch/AppSearchStyledComponents";
import UpperInfoComponent from "./AppSearch/UpperInfoComponent";

import a from '../assets/img/a.jpg'
import logo from '../assets/img/logo.svg'

const Decoration = AppSearchStyledComponents.Decoration;
const Search = AppSearchStyledComponents.Search;
const Left = AppSearchStyledComponents.Left;
const Middle = AppSearchStyledComponents.Middle;
const Right = AppSearchStyledComponents.Right;
const SearchIcon = AppSearchStyledComponents.SearchIcon;
const SearchBar = AppSearchStyledComponents.SearchBar;
const Circle = AppSearchStyledComponents.Circle;
const DropDown = AppSearchStyledComponents.DropDown;
const Logo = AppSearchStyledComponents.Logo;
const Wrapper = AppSearchStyledComponents.Wrapper;

const AppSearch = () => {
  return (
    <>
      <Wrapper>
        <UpperInfoComponent/>
        <Decoration />
        <Search>
          <Left>
            <Logo src={logo}></Logo>
          </Left>
          <Middle>
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
