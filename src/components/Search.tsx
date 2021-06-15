import SearchStyledComponents from "./Search/SearchStyledComponents";
import UpperInfoComponent from "./Search/UpperInfoComponent";
import SearchBoxComponent from './Search/SearchBoxComponent';

const Decoration = SearchStyledComponents.Decoration;
const Wrapper = SearchStyledComponents.Wrapper;

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
