// import SupervisorReview from '../components/SupervisorReview'

import PhotoReview from '../components/PhotoReview'
import styled from 'styled-components'
// import UploadModal from '../components/UploadModal'

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 100px 0;
  overflow-x: hidden;
  & > button {
    font-size: 30px;
  }
`

const TestPage = () => {
  return (
    <Wrapper>
      <PhotoReview />
    </Wrapper>
  )
}

export default TestPage
