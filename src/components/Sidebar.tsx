import styled from 'styled-components'
import {animated as a, useSpring} from "react-spring";
import { Link } from 'react-router-dom'
import { device } from '../assets/styles/breakpoints'

type PropsType = {
  items: {
    label: string
    link: string
    isFocus?: boolean
  }[],
  responsiveStatus?: boolean
}

const Wrapper = styled(a.div)`
  height: 100%;
  font-size: 32px;
  display: block;
  background: white;
  overflow-x: hidden;
  z-index: 2;
  position: fixed;
  top: 14vh;

  @media (min-width: 637px){
    top: 20vh;
  }

  @media ${device.laptop}{
    grid-template-rows: 75px auto;
    width: 300px !important;
    border-right: solid 0.003em black;
    position: relative;
    top: 0vh;
  }
`

const Options = styled.div`
  grid-row: 2;
`

const Option = styled(Link)`
  margin: 0;
  padding: 0.3em 0 0.3em 0;
  color: #5f5f5f;
  transition: ease-out 0.3s;
  display: block;
  &:hover {
    transform: translateX(5px);
  }
  text-align: center;
  font-size: 0.8em;

  @media ${device.mobileS}{
    font-size: 1em;
  }

  @media ${device.laptop}{
    text-align: left;
    padding: 0.3em 0 0.3em 1.2em;
  }
`

const Focused = styled.p`
  background: #1f1f1f;
  color: white;
  margin: 0;
  padding: 0.3em 0 0.3em 0;
  cursor: default;
  text-align: center;  
  font-size: 0.8em;

  @media ${device.mobileS}{
    font-size: 1em;
  }

  @media ${device.laptop}{
    text-align: left;
    padding: 0.3em 0 0.3em 1.2em;
  }
`

const Sidebar = (props: PropsType) => {

  const currentWidth = useSpring({
    width: props.responsiveStatus ? "100vw" : "0vw"
  })

  return (
    <>
      <Wrapper style = {currentWidth}>
        <Options>
          {props.items.map((v, index) => 
            v.isFocus ? <Focused key = {"sidebarElem"+index}>{v.label}</Focused> : 
            <Option to={v.link} key = {"sidebarElem"+index}>{v.label}</Option>
          )}
        </Options>
      </Wrapper>
    </>
  )
}

export default Sidebar
