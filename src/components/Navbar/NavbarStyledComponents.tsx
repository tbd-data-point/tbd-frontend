import React from "react";
import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';
import { Link } from 'react-router-dom';

namespace NavbarStyledComponents{
    export const Wrapper = styled.nav`
    width: 100%;
    height: 70px;
    display: grid;
    grid-template-columns: 80px [logo] auto [links] auto [buttons] 1fr 80px;
    border-bottom: 0.03em solid black;
    position: sticky;
    top: 0;
    background: white;
    z-index: 10;
  `
  
  export const LinkWrapper = styled.ul`
    overflow: hidden;
    list-style-type: none;
    grid-column: links;
    display: flex;
    align-items: center;
  `
  
  export const Flex = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
  `
  
  export const LinkElement = styled.li`
    float: left;
    margin-left: 13px;
    transition: 0.2s ease-out;
    border-radius: 4px;
    padding: 5px;
    &:hover {
      background: ${colors.grey8};
    }
  `
  
  export const Logo = styled.img`
    height: 40px;
  `
  
  export const LogoLink = styled(Link)`
    grid-column: logo;
    display: flex;
    align-items: center;
    justify-content: center;
  `
  
  export const Decoration = styled.div`
    clip-path: polygon(50% 0%, 90% 50%, 50% 100%, 10% 50%);
    background: ${colors.gradientLight};
    width: 8px;
    height: 8px;
    position: relative;
    top: 6px;
    margin-right: 8px;
  `
  
  export const ButtonWrapper = styled.div`
    grid-column: buttons;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `
};

export default NavbarStyledComponents;