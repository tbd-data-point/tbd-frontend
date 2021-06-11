// import styled from 'styled-components'
// import React, { useState } from 'react'
// import { Spring, config, animated as a } from 'react-spring'

import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useMeasure } from './helpers/hooks'
import { animated as a, useSpring } from 'react-spring'
import { colors } from '../assets/styles/colors'
import styled from 'styled-components'

// const TreeView = styled.div`
//   position: relative;
//   padding: 8px 0 0 20px;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `

const LabelWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-overflow: ellipsis;
  overflow-x: hidden;
  font-size: 36px;
  cursor: pointer;
`

const Label = styled.label`
  cursor: pointer;
`

const DropIcon = styled(a.div)`
  height: 0.3em;
  width: 0.3em;
  margin-top: 2px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: #393939;
  margin-left: 15px;
`

const LabelLink = styled(Link)`
  color: #5f5f5f;
  transition: 0.2s ease-out;
  font-size: 30px;

  &:hover {
    color: #414141;
  }
`

// type TreeType = {
//   content: string
//   defaultOpen?: boolean
//   children?: React.ReactNode
//   linkTo?: string
// }

// const Tree = React.memo(
//   ({
//     content = '',
//     defaultOpen = false,
//     children,
//     linkTo = '',
//   }: TreeType) => {
//     const [open, setOpen] = useState(defaultOpen)
//     const changeOpen = () => {
//       setOpen(!open)
//     }
//     return (
//       <>
//         <TreeView>
//           <LabelWrap
//             onClick={changeOpen}
//             style={children ? { cursor: 'pointer' } : {}}
//           >
//             {children ? (
//               <Label>{content}</Label>
//             ) : (
//               <LabelLink to={linkTo}>{content}</LabelLink>
//             )}
//             {children ? (
//               <Spring
//                 config={{ ...config.default }}
//                 transform={
//                   open ? 'rotate(0deg)' : 'rotate(180deg)'
//                 }
//               >
//                 {(props) => <DropIco style={props} />}
//               </Spring>
//             ) : (
//               ''
//             )}
//           </LabelWrap>
//           {children ? (
//             <Spring
//               config={{ ...config.default, precision: 0.1 }}
//               height={open ? 'auto' : '0px'}
//               opacity={open ? 1 : 0}
//               transform={
//                 open
//                   ? 'translate3d(0px, 0px, 0px)'
//                   : 'translate3d(20px, 0px, 0px'
//               }
//             >
//               {(props) => (
//                 <a.div style={props}>{children}</a.div>
//               )}
//             </Spring>
//           ) : null}
//         </TreeView>
//       </>
//     )
//   },
// )

// export default Tree

const Wrapper = styled(a.div)`
  position: relative;
  padding: 4px 0 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${colors.grey1};
`

type PropsTypes = {
  children?: React.ReactNode
  label: string
  defaultOpen?: boolean
  url?: string
}

const Tree = React.memo(
  ({
    children,
    label,
    defaultOpen = false,
    url,
  }: PropsTypes) => {
    const [
      bind,
      {
        //@ts-expect-error
        height: viewHeight,
      },
    ] = useMeasure()
    const [isOpen, setOpen] = useState(false)
    const { height, opacity, transform, rotate } =
      useSpring({
        from: {
          height: 0,
          opacity: 0,
          transform: 'translated(20px, 0px, 0px)',
          rotate: 'rotate(0deg)',
        },
        to: {
          height: isOpen ? viewHeight : 0,
          opacity: isOpen ? 1 : 0,
          transform: isOpen
            ? 'translate3d(0px, 0px, 0px)'
            : 'translate3d(20px, 0px, 0px)',
          rotate: isOpen
            ? 'rotate(0deg)'
            : 'rotate(180deg)',
        },
      })

    return (
      <Wrapper>
        <LabelWrap
          onClick={() => {
            setOpen(!isOpen)
          }}
        >
          {children ? (
            <>
              <Label>{label}</Label>
              <DropIcon
                style={{ transform: rotate.to((r) => r) }}
              />
            </>
          ) : url ? (
            <LabelLink to={url}>{label}</LabelLink>
          ) : (
            ''
          )}
        </LabelWrap>
        {children ? (
          <>
            <a.div style={{ height, opacity }}>
              <a.div style={{ transform }} {...bind}>
                {children}
              </a.div>
            </a.div>
          </>
        ) : (
          ''
        )}
      </Wrapper>
    )
  },
)

export default Tree
