import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0a0a0a;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1000;
`
const Label = styled.div`
  width: 300px;
  height: 100px;
  font-size: 28px;
  color: black;
  background: white;
  font-family: Futura;
  z-index: 1000;
  `

const Accordion = styled.div`
  width: 300px;
  height: 100px;
  background: white;
  position: absolute;
  top: 10px;
`

const AccordionWrapper = styled.div`
  position: relative;
`

const TestPage= () => {
  const test = () => {
    console.log(1)
  }
  return <>
    <Wrapper>
      <AccordionWrapper>
        <Accordion>I am here!</Accordion>
        <Label onClick={test}>Click me!</Label>
      </AccordionWrapper>
      
    </Wrapper>
  </>
}


export default TestPage