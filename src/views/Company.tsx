import { Navbar, Footer } from '../components'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

const Company = () => {
  return (
    <>
      <Navbar />
      <Wrapper></Wrapper>
      <Footer />
    </>
  )
}
export default Company
