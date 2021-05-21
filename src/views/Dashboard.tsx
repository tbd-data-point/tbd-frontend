import AppSearch from '../components/AppSearch'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

import { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useCookies } from 'react-cookie'

const Wrapper = styled.div`
	width: 100%;
	min-height: 500px;
	display: grid;
	grid-template-columns: 300px auto;
`

const DashboardWrapper = styled.div`
	width: 100%;
	min-height: 500px;
	display: flex;
	justify-content: center;
	align-items: space-evenly;
	margin-top: 100px;
`
const StatsWrapper = styled.div`
	& > p {
		font-size: 20px;
		font-weight: 500;
	}
`

const Dashboard = () => {
	const [cookies, setCookie, removeCookie] = useCookies(['user'])
	const [stats, setStats] = useState<any>({
		compleatedTasks: 0,
		totalFiles: 0,
		avgIncome: 0,
		balance: 0,
	})

	useEffect(() => {
		console.log(cookies.user)
		axios
			.get('http://localhost:5000/users/stats/', { headers: { Cookie: cookies.user }, withCredentials: true })
			.then((res) => {
				setStats(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	return (
		<>
			<AppSearch />
			<Wrapper>
				<Sidebar
					items={[
						{ label: 'Home', isFocus: true, link: '/' },
						{ label: 'Jobs', link: '/jobs' },
						{ label: 'Earnings', link: 'earnings' },
						{ label: 'Settings', link: '' },
					]}
				/>
				<DashboardWrapper>
					<StatsWrapper>
						<p>Compleated Tasks: {stats.compleatedTasks}</p>
						<p>Total files uploaded: {stats.totalFiles}</p>
						<p>Average revenue per file: {stats.avgIncome}</p>
						<p>Total balance: {stats.balance}</p>
					</StatsWrapper>
				</DashboardWrapper>
			</Wrapper>

			<Footer />
		</>
	)
}

export default Dashboard
