import {
  Search,
  Sidebar,
  Footer,
  Tree,
} from '../../components/'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  min-height: 500px;
  display: grid;
  grid-template-columns: 300px auto;
`

const Content = styled.main`
  grid-column: 2;
  margin: 2% 0 50px 2%;
`

const Settings = () => {
  return (
    <>
      <Search />
      <Wrapper>
        <Sidebar
          items={[
            { label: 'Home', link: '/app' },
            { label: 'Jobs', link: '/app/jobs' },
            { label: 'Earnings', link: '/app/earnings' },
            { label: 'Settings', isFocus: true, link: '' },
          ]}
        />
        <Content>
          <Tree label="General" defaultOpen>
            <Tree label="Test" url="/" />
            <Tree label="Test" url="/" />
          </Tree>
          <Tree label="Identity">
            <Tree label="Test" url="/" />
            <Tree label="Test" url="/" />
            <Tree label="Test" url="/" />
            <Tree label="Test" url="/" />
          </Tree>
          <Tree label="Payment">
            <Tree
              label="Change bank account number"
              url="/"
            />
            <Tree label="Change PayPal account" url="/" />
          </Tree>
        </Content>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Settings
