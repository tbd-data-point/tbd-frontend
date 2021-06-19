import React from "react";
import {Link} from "react-router-dom";

import NavbarStyledComponents from "./NavbarStyledComponents";
import { navbarElements } from './NavbarElements'

const LinkWrapper = NavbarStyledComponents.LinkWrapper;
const LinkElement = NavbarStyledComponents.LinkElement;
const Flex = NavbarStyledComponents.Flex;
const Decoration = NavbarStyledComponents.Decoration;

const LinkWrapperComponent = ({isResp}:any) => {
    return <LinkWrapper isResp = {isResp}>
    {navbarElements.map((v, i) => {
      return (
        <Link to={v.url} key = {"link"+i}>
          <LinkElement key={i} topPosition = {((i*10)+10)+"vh"}>
            <Flex>
              <Decoration />
              {v.label}
            </Flex>
          </LinkElement>
        </Link>
      )
    })}
  </LinkWrapper>;
};

export default LinkWrapperComponent;
