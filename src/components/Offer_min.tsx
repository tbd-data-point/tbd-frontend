import styled from 'styled-components'

type PropsType = {
	data: {
		desc: string
		imgLink: string[]
		title: string
		id: string
	}
}

const OfferRect = styled.div`
	width: 500px;
	height: 420px;
	border: 1px solid black;
	display: flex;
	justify-content: top;
	align-items: left;
	flex-direction: column;
	transition: all 0.3s;
	// &:hover {
	// 	transform: translateX(2px);
	// }
`

const OfferHeader = styled.h1`
	font-weight: 600;
	font-size: 28px;
	margin-bottom: 0px;
	margin-top: 10px;
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
		transform: scale(1.001);
	}
	&:focus {
		outline: none;
	}
`

const OfferMin = (props: PropsType) => {
	let desc = props.data.desc
	if (desc.length > 200) desc = desc.slice(0, 200) + '...'
	return (
		<>
			<OfferRect>
				<OfferContent>
					<OfferHeader>{props.data.title}</OfferHeader>
					<OfferDesc>{desc}</OfferDesc>
					<OfferPhotoWrap>
						{props.data.imgLink.map((url) => {
							return (
								<img
									src={`http://localhost:5000/public/${props.data.id}/${url}`}
									style={{ width: '220px', height: '150px', objectFit: 'cover' }}
									alt='Smaple data'
								/>
							)
						})}
					</OfferPhotoWrap>
					<OfferButtons>
						<div style={{ flexGrow: 1, marginLeft: '2px' }}>
							<Button upload>Upload Photos</Button>
						</div>
						<div style={{ flexGrow: 1, marginLeft: '2px' }}>
							<Button>See details</Button>
						</div>
					</OfferButtons>
				</OfferContent>
			</OfferRect>
		</>
	)
}

export default OfferMin
