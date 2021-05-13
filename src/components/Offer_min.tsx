import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import FilePreviewComponent from './FilePreviewComponent'
import UploadModal from './UploadModal'

type PropsType = {
	data: {
		description: string
		imgLink: string[]
		title: string
		_id: string
	}
}

const OfferRect = styled.div`
	width: 500px;
	min-height: 420px;
	border: 1px solid black;
	display: flex;
	justify-content: top;
	align-items: left;
	flex-direction: column;
	transition: all 0.3s;
	// &:hover {
	// 	transform: translateX(2px);
	// }
	transition: all 0.1s ease-in;
	// &.expanded {
	// 	min-height: 500px;
	// }

	margin-top: 50px;
	margin-bottom: 50px;
`

const OfferHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 10px;
	margin-bottom: 0px;
	margin-left: 1px;
	margin-right: 1px;
`

const OfferTitle = styled.h1`
	font-weight: 600;
	font-size: 28px;
`

const OfferIcon = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 25%;
	& > p {
		transition: all 0.2s;
	}
	&:hover {
		cursor: pointer;
	}
	&:hover > span {
		background-color: rgba(245, 228, 0, 1);
	}
	&:hover > p {
		color: rgba(245, 228, 0, 1);
	}
`

const StarIcon = styled.span`
	clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
	width: 35px;
	height: 35px;
	background-color: rgba(245, 228, 0, 0.6);
	transition: all 0.2s;
	z-index: 0;
`

const OfferContent = styled.div`
	margin: 25px;
	margin-top: 15px;
`
const OfferDesc = styled.p`
	margin-top: 10px;
	margin-bottom: 15px;
`

const OfferPhotoWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	position: relative;
	& > .previewArrow {
		clip-path: polygon(25% 0, 100% 50%, 25% 100%, 0% 100%, 75% 50%, 0% 0%);
		z-index: 1100;
		background-color: white;
		box-shadow: 1px 1px 1px white;
		width: 20px;
		height: 30px;
		transition: all 0.1s;
		position: absolute;
		transition: all 0.1s;
		pointer-events: none;
		z-index: 1;
	}
`
const SamplePhoto = styled.img`
	transition: all 0.1s;
	&:hover {
		cursor: pointer;
		transform: scale(1.003);
	}
`

const OfferButtons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
`
interface ButtonStyled {
	upload?: boolean
}

const Button = styled('button')<ButtonStyled>`
	width: 150px;
	padding: 8px;
	font-size: 18px;
	background-color: white;
	border: 1px solid black;
	margin-right: 20px;
	margin-top: 10px;
	transition: all 0.15s;
	font-weight: 100;
	border-radius: 1px;
	${(props) =>
		props.upload &&
		`
				background-color: #04383b;
				color: whitesmoke;
			`};
	&:hover {
		box-shadow: 0px 2px 6px -2px gray;
		cursor: pointer;
		//transform: scale(1.001);
	}
	&:focus {
		outline: none;
	}
`

const OfferMin = (props: PropsType) => {
	const [preview, setPreview] = useState<any>({ index: null, src: null })
	const [seeDetails, setSeeDetails] = useState(false)
	const [displayModal, setDisplayModal] = useState(false)
	const [smallPreview, setSmallPreview] = useState<number>(1)
	const selectedFiles = props.data.imgLink

	let desc = props.data.description
	const id = props.data._id
	if (desc.length > 200 && !seeDetails) desc = desc.slice(0, 200) + '...'

	const previewImage = (index: number) => {
		document.body.style.overflow = 'hidden'
		if (index === preview.index) return 0
		setPreview({ index: index, src: 'http://localhost:5000' + props.data.imgLink[index] })
	}
	const showUploadModal = () => {
		document.body.style.overflow = 'hidden'
		setDisplayModal(true)
	}

	const swipeSmallPreview = (direction: String) => {
		if (direction == 'right') {
			smallPreview - 1 < 0 ? setSmallPreview(props.data.imgLink.length - 1) : setSmallPreview(smallPreview - 1)
		} else if (direction == 'left') {
			smallPreview + 1 > props.data.imgLink.length - 1 ? setSmallPreview(0) : setSmallPreview(smallPreview + 1)
		}
	}

	const followOffer = () => {
		axios
			.get('http://localhost:5000/offers/follow/' + props.data._id)
			.then((res) => {
				alert(res)
			})
			.catch((err) => {
				alert(err)
			})
	}

	return (
		<>
			<UploadModal {...{ id, displayModal, setDisplayModal }}></UploadModal>
			<FilePreviewComponent {...{ preview, setPreview, previewImage, selectedFiles }}></FilePreviewComponent>
			<OfferRect className={seeDetails ? 'expanded' : ''}>
				<OfferContent>
					<OfferHeader>
						<OfferTitle>{props.data.title}</OfferTitle>
						<OfferIcon onClick={followOffer}>
							<p>Follow</p>
							<StarIcon />
						</OfferIcon>
					</OfferHeader>
					<OfferDesc>{desc}</OfferDesc>
					<OfferPhotoWrap>
						{selectedFiles.length > 2 ? (
							<>
								<div
									className={'previewArrow'}
									style={{ transform: 'rotate(180deg)', left: '10px' }}></div>
								<div className={'previewArrow'} style={{ right: '10px' }}></div>
							</>
						) : null}

						{props.data.imgLink.slice(smallPreview, smallPreview + 2).map((url, i) => {
							return (
								<SamplePhoto
									key={url}
									src={`http://localhost:5000${url}`}
									style={{ width: '220px', height: '150px', objectFit: 'cover' }}
									alt='Sample data'
									onClick={() => previewImage(i)}
								/>
							)
						})}
					</OfferPhotoWrap>

					<OfferButtons>
						<div style={{ flexGrow: 1, marginLeft: '2px' }}>
							<Button upload onClick={showUploadModal}>
								Upload Photos
							</Button>
						</div>
						<div style={{ flexGrow: 1, marginLeft: '2px' }}>
							<Button onClick={() => setSeeDetails(!seeDetails)}>See details</Button>
						</div>
					</OfferButtons>
				</OfferContent>
			</OfferRect>
		</>
	)
}

export default OfferMin
