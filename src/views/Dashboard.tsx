import AppSearch from '../components/AppSearch'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import MyOffers from '../components/MyOffers'
import { device } from '../assets/styles/breakpoints'

import { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useCookies } from 'react-cookie'

const Wrapper = styled.div`
	width: 100%;
	min-height: 500px;
	display: block;

	@media ${device.laptop}{
		display: grid;
		grid-template-columns: 300px auto;
	}
`

const DashboardWrapper = styled.div`
	width: 100%;
	min-height: 500px;
	display: block;
	margin-left: auto;
	margin-right: auto;
	justify-content: space-evenly;
	align-items: center;
	margin-top: 30px;

	@media ${device.laptop}{
		display: flex;
		flex-direction: column;
	}
`
const StatsWrapper = styled.div`
	& > p {
		font-size: 20px;
		font-weight: 500;
		text-align: left;
	}
`
const Header = styled.h1`
	font-size: 30px;
	font-weight: 500;
	align-self: flex-start;
	margin-left: 50px;
`

const Dashboard = () => {
	const [cookies, setCookie, removeCookie] = useCookies(['user'])
	const [stats, setStats] = useState<any>({
		compleatedTasks: 0,
		totalFiles: 0,
		avgIncome: 0,
		balance: 0,
	})

	const [isRWDMenuOpened, openRWDMenu] = useState<boolean>(false);

	useEffect(() => {
		console.log(cookies.user)
		axios
			.get('http://localhost:5000/users/stats/', {
				headers: { Authorization: `Basic ${cookies.user}` },
				withCredentials: true,
			})
			.then((res) => {
				console.log(res.data)
				setStats(Object.assign(stats, res.data))
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	return (
		<>
			<AppSearch openMenu={() => openRWDMenu(!isRWDMenuOpened)} openingStatus={isRWDMenuOpened}/>
			<Wrapper>
				<Sidebar
					items={[
						{ label: 'Home', isFocus: true, link: '/' },
						{ label: 'Jobs', link: '/jobs' },
						{ label: 'Earnings', link: 'earnings' },
						{ label: 'Settings', link: '' },
					]}
					responsiveStatus = {isRWDMenuOpened}
				/>
				<DashboardWrapper>
					<Header>My stats:</Header>
					<StatsWrapper>
						<p>Compleated Tasks: {stats.compleatedTasks}</p>
						<p>Total files uploaded: {stats.totalFiles}</p>
						<p>Average revenue per file: {stats.avgIncome}</p>
						<p>Total balance: {stats.balance}</p>
					</StatsWrapper>
					<Header>My offers:</Header>
					<MyOffers />
				</DashboardWrapper>
			</Wrapper>

			<Footer />
		</>
	)
}

export default Dashboard
