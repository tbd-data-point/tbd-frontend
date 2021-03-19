import AppSearch from '../components/AppSearch'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    min-height: 500px;
    display: grid;
    grid-template-columns: 300px auto;  
`

const Content = styled.div`
    grid-column: 2;
`

const WorkerSettings = () => {
    return <>
        <AppSearch />
        <Wrapper>
            <Sidebar items={[{label: 'Home', link: '/'}, {label: 'Jobs', link: '/jobs'}, {label: 'Earnings', link: 'earnings'}, {label: 'Settings', isFocus: true, link: ''}]}/>
            <Content>
                test
            </Content>
        </Wrapper>
        <Footer />
    </>
}

export default WorkerSettings