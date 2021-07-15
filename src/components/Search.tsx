import {Decoration, Wrapper} from "./Search/SearchStyledComponents";
import UpperInfoComponent from "./Search/UpperInfoComponent";
import SearchBoxComponent from './Search/SearchBoxComponent';

const Search = () => {
  return (
    <>
      <Wrapper>
        <UpperInfoComponent/>
        <Decoration />
        <SearchBoxComponent/>
      </Wrapper>
    </>
  )
}

export default Search
