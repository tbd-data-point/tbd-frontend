import styled from 'styled-components'
import { Link } from 'react-router-dom'



type PropsType = {
    items: {label: string, link: string, isFocus?: boolean}[]
}

const Wrapper = styled.div`
    height: 100%;
    width: 300px;
    font-size: 32px;
    border-right: solid 0.003em black;
    display: grid;
    grid-template-rows: 75px auto;
    background: white;
` 

const Options = styled.div`
    grid-row: 2;
`

const Option = styled(Link)`
    margin: 0;
    padding: 0.3em 0 0.3em 1.2em;
    color: #5f5f5f;
    transition: ease-out 0.3s;
    display: block;
    &:hover {
        transform: translateX(5px);
    }
`

const Focused = styled.p`
    background: #1f1f1f;
    color: white;
    margin: 0;
    padding: 0.3em 0 0.3em 1.2em;
    cursor: default;
`

const Sidebar = (props:PropsType) => {
    return <>
    <Wrapper>
    <Options>
        {props.items.map(v => {
            if (v.isFocus) {
               return <Focused>{v.label}</Focused>
            }
            else {
                return <Option to={v.link}>{v.label}</Option>
            }
        })}
        </Options>
    </Wrapper>
    </>
}

export default Sidebar