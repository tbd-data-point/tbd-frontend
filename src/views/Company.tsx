import { Navbar, Footer, Accordion } from '../components'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const obj = [1, 2, 4, 5]

const Company = () => {
    return <>
        <Navbar />
        <Wrapper>
        
            {obj.map(v => {
                return (<Accordion label='Hello World!' defaultOpen >{`Hello times ${v}`}</Accordion>)
            })}
        
        </Wrapper>
        <Footer />
    </>
}
export default Company