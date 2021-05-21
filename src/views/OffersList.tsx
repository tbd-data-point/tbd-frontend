import AppSearch from '../components/AppSearch'
import Footer from '../components/Footer'
import styled from 'styled-components'
import OfferMin from '../components/Offer_min'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'

import OfferFilter from '../components/OfferFilter'

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
	min-height: 1000px;
	padding-top: 150px;
	padding-bottom: 500px;
`

const OffersList = () => {
	const [filter, setFilter] = useState<any>({ fileType: 'photo', description: '', tags: [] })
	const [currentEntry, setCurrentEntry] = useState<any>()
	const observer = useRef(
		new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setCurrentEntry(entry)
					}
				})
			},
			{ root: document.querySelector('#offer-wrapper') }
		)
	)

	const [allOffers, setAllOffers] = useState<boolean>(true)
	const [offers, setOffers] = useState<any>([
		{
			description:
				'Minions ipsum potatoooo hahaha ti aamoo! Poulet tikka masala. Butt para tú me want bananaaa! Belloo! Potatoooo. Hana dul sae jeje chasy bee do bee do bee do. Para tú poopayee baboiii chasy. Potatoooo chasy jeje po kass. Gelatooo me want bananaaa! Uuuhhh daa. Poulet tikka masala wiiiii ti aamoo! Jiji tulaliloo wiiiii hahaha baboiii underweaaar.',
			imgLink: ['1.jpg', '2.jpg'],
			title: 'Pierwsza oferta',
			_id: '1',
		},
		{
			description:
				'Minions ipsum potatoooo hahaha ti aamoo! Poulet tikka masala. Butt para tú me want bananaaa! Belloo! Potatoooo. Hana dul sae jeje chasy bee do bee do bee do. Para tú poopayee baboiii chasy. Potatoooo chasy jeje po kass. Gelatooo me want bananaaa! Uuuhhh daa. Poulet tikka masala wiiiii ti aamoo! Jiji tulaliloo wiiiii hahaha baboiii underweaaar.',
			imgLink: ['1.jpg', '2.jpg'],
			title: 'Pierwsza oferta',
			_id: '2',
		},
	])
	useEffect(() => {
		axios
			.post('http://localhost:5000/offers/' + '3', { filter: filter })
			.then((res) => {
				console.log(res.data)
				setOffers(res.data)
				if (res.data.length > 0) setAllOffers(false)
				if (observer.current && document.querySelectorAll('.offer_min:last-child')[0]) {
					observer.current.observe(document.querySelectorAll('.offer_min:last-child')[0])
				}
			})
			.catch((err) => {
				setOffers([])
				console.log(err)
			})
	}, [filter])
	useEffect(() => {
		if (observer.current) {
			axios
				.post('http://localhost:5000/offers/' + '1', {
					ids: offers.map((e: any) => {
						return e._id
					}),
					filter: filter,
				})
				.then((res) => {
					if (res.data.length > 0) {
						setAllOffers(false)
						setOffers(offers.concat(res.data))
						if (document.querySelectorAll('.offer_min:last-child')[0])
							observer.current.observe(document.querySelectorAll('.offer_min:last-child')[0])
						if (currentEntry) {
							observer.current.unobserve(currentEntry.target)
						}
					} else {
						setAllOffers(true)
						observer.current.unobserve(currentEntry.target)
					}
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}, [currentEntry])

	return (
		<>
			<AppSearch />
			<OfferListWrapper id='offer-wrapper'>
				{offers.map((e: any) => {
					return (
						<div key={e._id} className={'offer_min'} style={{ position: 'relative' }}>
							<OfferMin data={e}></OfferMin>
						</div>
					)
				})}
				{allOffers ? <p>There are no more offers</p> : null}
			</OfferListWrapper>
			<OfferFilter {...{ filter, setFilter }} />
		</>
	)
}

export default OffersList
