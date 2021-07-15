import styled from "styled-components";

export const UpperInfo = styled.div`
    width: 100%;
    background: black;
    color: #d7d7d7;
    display: grid;
    grid-template-columns: 50px auto 50px;
    align-items: center;
    font-weight: 400;
    position: relative;
`
export const Prompt = styled.div`
    grid-column: 2;
    font-size: 14px;
    padding: 14px;
`

export const CloseBtn = styled.div`
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

export const Decoration = styled.div`
    width: 100%;
    height: 5px;
    background: linear-gradient(-90deg, #00d1db, #80cc08);
`

export const SearchBox = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    height: 90px;
    align-items: center;
    column-gap: 70px;
    border-bottom: solid 0.03em #1e1e1e;
    background: white;
`

export const Left = styled.div`
    grid-column: 1;
    justify-self: end;
    display: flex;
`

export const Middle = styled.div`
    grid-column: 2;
    display: flex;
`

export const Right = styled.div`
    grid-column: 3;
    display: flex;
    align-items: center;
    position: relative;
`

export const SearchIcon = styled.div`
    width: 65px;
    height: 45px;
    background: #1e1e1e;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`

export const SearchBar = styled.input`
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

export const Circle = styled.img`
    height: 45px;
    width: 45px;
    border-radius: 100%;
    border: solid black 0.003em;
`

export const DropDown = styled.div`
    height: 10px;
    width: 11px;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
    background: #1e1e1e;
    margin-left: 12px;
`

export const Logo = styled.img`
    height: 45px;
`

export const Wrapper = styled.div`
    background: white;
    z-index: 1000;
    position: sticky;
    top: 0;
`