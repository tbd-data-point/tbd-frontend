import styled from 'styled-components'
import React, { useState } from 'react'
import { Spring, config, animated as a } from 'react-spring/renderprops'
import { Link } from 'react-router-dom'

const TreeView = styled.div`
    position: relative;
    padding: 8px 0 0 20px;
    overflow: hidden;
    text-overflow: ellipsis;
`

const LabelWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-overflow: ellipsis;
    overflow-x: hidden;
    font-size: 36px;
`

const Label = styled.span`
    color: #393939;
`

const DropIco = styled(a.div)`
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

type TreeType = {
    content: string
    defaultOpen?: boolean
    children?: React.ReactNode
    linkTo?: string
}

const Tree = React.memo(({content = '', defaultOpen = false, children, linkTo = ''} : TreeType ) => {
    const [open, setOpen] = useState(defaultOpen)
    const changeOpen = () => {
        setOpen(!open)
    }
    return <>
        <TreeView>
                <LabelWrap onClick={changeOpen} style={children ? {cursor: 'pointer'} : {}}>
                    {children ? <Label>{content}</Label> :
                    <LabelLink to={linkTo}>{content}</LabelLink>
                    }
                    {children ? 
                    <Spring
                        native
                        config={{...config.default}}
                        from={{transform: 'rotate(0deg)'}}
                        to={{transform: open ? 'rotate(180deg)' : 'rotate(0deg)'}}
                    >
                        {props => <DropIco style={props}/>}
                    </Spring> 
                    : '' }
                </LabelWrap>
            {children ? 
            <Spring
                native
                config={{ ...config.default, precision: 0.1 }}
                from={{ height: 0, opacity: 0, transform: 'translate3d(30px,0,0)' }}
                to={{
                    height: open ? 'auto' : 0,
                    opacity: open ? 1 : 0,
                    transform: open ? 'translate3d(0px,0,0)' : 'translate3d(20px,0,0)',
                }}
            >
                {props => <a.div style={props}>{children}</a.div>}
            
            </Spring>
            : null }
        </TreeView>
    </>
})

export default Tree
