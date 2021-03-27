import AppSearch from '../../components/AppSearch'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'
import styled from 'styled-components'
import Tree from '../../components/Tree'

const Wrapper = styled.div`
    width: 100%;
    min-height: 500px;
    display: grid;
    grid-template-columns: 300px auto;  
`

const Content = styled.div`
    grid-column: 2;
    margin: 2% 0 50px 2%;
`

const WorkerSettings = () => {
    return <>
        <AppSearch />
        <Wrapper>
            <Sidebar items={[{label: 'Home', link: '/app'}, {label: 'Jobs', link: '/app/jobs'}, {label: 'Earnings', link: '/app/earnings'}, {label: 'Settings', isFocus: true, link: ''}]}/>
            <Content>
                <Tree content='General' defaultOpen>
                    <Tree content='Test' linkTo='/'/>
                    <Tree content='Test' linkTo='/'/>
                </Tree>
                <Tree content='Identity'>
                <Tree content='Test' linkTo='/'/>
                <Tree content='Test' linkTo='/'/>
                <Tree content='Test' linkTo='/'/>
                    <Tree content='Test' linkTo='/'/>
                </Tree>
                <Tree content='Payment'>
                    <Tree content='Change bank account number' linkTo='/'/>
                    <Tree content='Change PayPal account' linkTo='/'/>
                </Tree>
            </Content>
        </Wrapper>
        <Footer />
    </>
}

export default WorkerSettings