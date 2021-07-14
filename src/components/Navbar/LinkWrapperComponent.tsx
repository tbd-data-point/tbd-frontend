import { Link } from 'react-router-dom'

import {
  LinkWrapper,
  LinkElement,
  Flex,
  Decoration,
} from './NavbarStyledComponents'

import { navbarElements } from './NavbarElements'

const LinkWrapperComponent = () => {
  return (
    <LinkWrapper>
      {navbarElements.map((v, i) => {
        return (
          <Link to={v.url} key={'link' + i}>
            <LinkElement
              key={i}
              topPosition={i * 10 + 10 + 'vh'}
            >
              <Flex>
                <Decoration />
                {v.label}
              </Flex>
            </LinkElement>
          </Link>
        )
      })}
    </LinkWrapper>
  )
}

export default LinkWrapperComponent
