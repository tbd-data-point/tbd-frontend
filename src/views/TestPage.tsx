import styled from 'styled-components'
import SupervisorReview from '../components/SupervisorReview'

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 100px 0;
`

const TestPage = () => {
  return <>
    <Wrapper>
        <SupervisorReview>Hello.</SupervisorReview>
     </Wrapper>
  </>
}

export default TestPage
