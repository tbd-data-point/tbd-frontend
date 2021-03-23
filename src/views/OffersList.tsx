import AppSearch from '../components/AppSearch'
import Footer from '../components/Footer'
import styled from 'styled-components'
import OfferMin from '../components/Offer_min'
import axios from 'axios'
import { useEffect, useState } from 'react'

const OfferListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 80%;
	margin-left: auto;
	margin-right: auto;
	margin-top: 10px;
	margin-bottom: 100px;
	height: 1000px;
`

const OffersList = () => {
	const [offers, setOffers] = useState([
		{
			desc:
				'Minions ipsum potatoooo hahaha ti aamoo! Poulet tikka masala. Butt para tú me want bananaaa! Belloo! Potatoooo. Hana dul sae jeje chasy bee do bee do bee do. Para tú poopayee baboiii chasy. Potatoooo chasy jeje po kass. Gelatooo me want bananaaa! Uuuhhh daa. Poulet tikka masala wiiiii ti aamoo! Jiji tulaliloo wiiiii hahaha baboiii underweaaar.',
			imgLink: ['1.jpg', '2.jpg'],
			title: 'Pierwsza oferta',
			id: '1',
		},
		{
			desc:
				'Minions ipsum potatoooo hahaha ti aamoo! Poulet tikka masala. Butt para tú me want bananaaa! Belloo! Potatoooo. Hana dul sae jeje chasy bee do bee do bee do. Para tú poopayee baboiii chasy. Potatoooo chasy jeje po kass. Gelatooo me want bananaaa! Uuuhhh daa. Poulet tikka masala wiiiii ti aamoo! Jiji tulaliloo wiiiii hahaha baboiii underweaaar.',
			imgLink: ['1.jpg', '2.jpg'],
			title: 'Pierwsza oferta',
			id: '1',
		},
	])
	useEffect(() => {
		// axios
		// 	.get('http://localhost:5000/offers/')
		// 	.then((res) => {
		// 		setOffers(res.data)
		// 	})
		// 	.catch((err) => {
		// 		setOffers([])
		// 		console.log(err)
		// 	})
	}, [])

	return (
		<>
			<AppSearch />
			<OfferListWrapper>
				{offers.map((e: any) => {
					console.log(e)
					return <OfferMin data={e}></OfferMin>
				})}
			</OfferListWrapper>
			<Footer />
		</>
	)
}

export default OffersList
