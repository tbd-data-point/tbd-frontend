// import SupervisorReview from '../components/SupervisorReview'

// import PhotoReview from '../components/PhotoReview'
import styled from 'styled-components'
import { useEffect } from 'react'

// import UploadModal from '../components/UploadModal'

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow-x: hidden;
  & > button {
    font-size: 30px;
  }
`

const Container = styled.div`
  display: flex;
  flex: none;
  flex-flow: row nowrap;
  height: 300px;
  width: 300px;
  overflow: scroll;
  scroll-snap-type: both mandatory;
  background: white;

  & > div {
    flex: none;
  }
`

const Tile = styled.div`
  color: white;
  scroll-snap-align: center;
  font-size: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const numbers = [0, 1, 2]

const TestPage = () => {
  return (
    <Wrapper>
      <Container>
        {numbers.map((v, i) => {
          return (
            <Tile
              style={{
                background: `rgb(${v * 122},${v * 12}, ${
                  v * 60
                })`,
              }}
              key={v}
            >
              {v}
            </Tile>
          )
        })}
      </Container>
      <span
        style={{
          background: 'white',
          width: '400px',
          height: '400px',
          clipPath: 'polygon(100% 50%, 0 0, 0 100%)',
        }}
      />
    </Wrapper>
  )
}

export default TestPage
