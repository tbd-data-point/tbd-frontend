import styled from "styled-components"
import { AiOutlineSearch } from "react-icons/ai"
import { IconContext } from "react-icons"
import a from "../assets/img/a.jpg"
import logo from "../assets/img/logo.svg"

const UpperInfo = styled.div`
    width: 100%;
    background: black;
    color: #d7d7d7;
    display: grid;
    grid-template-columns: 50px auto 50px;
    align-items: center;
    font-weight: 400;
    position: relative;
`
const Prompt = styled.div`
    grid-column: 2;
    font-size: 14px;
    padding: 14px;
`

const CloseBtn = styled.div`
    width: 11px;
    height: 11px;
    background-color: #d7d7d7;
    clip-path: polygon(
        12% 0,
        0 12%,
        38% 50%,
        0 88%,
        12% 100%,
        50% 63%,
        88% 100%,
        100% 88%,
        65% 50%,
        100% 12%,
        88% 0,
        50% 38%
    );
    grid-column: 3;
`

const Decoration = styled.div`
    width: 100%;
    height: 5px;
    background: linear-gradient(-90deg, #00d1db, #80cc08);
`

const Search = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    height: 90px;
    align-items: center;
    column-gap: 70px;
    border-bottom: solid 0.03em #1e1e1e;
    background: white;
`

const Left = styled.div`
    grid-column: 1;
    justify-self: end;
    display: flex;
`

const Middle = styled.div`
    grid-column: 2;
    display: flex;
`

const Right = styled.div`
    grid-column: 3;
    display: flex;
    align-items: center;
    position: relative;
`

const SearchIcon = styled.div`
    width: 65px;
    height: 45px;
    background: #1e1e1e;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`

const SearchBar = styled.input`
    color: #1e1e1e;
    border: solid 0.03em #1e1e1e;
    box-sizing: border-box;
    height: 45px;
    width: 666px;
    padding-left: 15px;
    font-size: 15px;
    &:focus {
        outline: none;
    }
    &::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: #a7a7a7;
    }
    &::-moz-placeholder {
        /* Firefox 19+ */
        color: #a7a7a7;
    }
    &:-ms-input-placeholder {
        /* IE 10+ */
        color: #a7a7a7;
    }
    &:-moz-placeholder {
        /* Firefox 18- */
        color: #a7a7a7;
    }
`

const Circle = styled.img`
    height: 45px;
    width: 45px;
    border-radius: 100%;
    border: solid black 0.003em;
`

const DropDown = styled.div`
    height: 10px;
    width: 11px;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
    background: #1e1e1e;
    margin-left: 12px;
`

const Logo = styled.img`
    height: 45px;
`

const Wrapper = styled.div`
    position: sticky;
    width: 100%;
    top: 0;
    z-index: 10;
    transition: all 0.65s;
`

interface PropsType {
    hideOnScroll: boolean
}

const AppSearch = () => {
    return (
        <>
            <Wrapper>
                <UpperInfo>
                    <Prompt>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Prompt>
                    <CloseBtn />
                </UpperInfo>
                <Decoration />
                <Search>
                    <Left>
                        <Logo src={logo}></Logo>
                    </Left>
                    <Middle>
                        <SearchBar placeholder="Search for your next job..." type="text"></SearchBar>
                        <SearchIcon>
                            <IconContext.Provider value={{ color: "white", size: "30px" }}>
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
