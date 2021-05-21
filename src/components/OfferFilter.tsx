import { useState, useEffect } from 'react'
import styled from 'styled-components'

import TaggedInput from '../components/Tagged-input'

const FilterRect = styled.div`
	width: 300px;
	height: 300px;
	position: fixed;
	right: 150px;
	top: 30%;
	padding: 10px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	background-color: white;
`
const Title = styled.h1`
	font-size: 40px;
	font-weight: 400;
	margin-top: 0;
	margin-bottom: 0;
`
const FilterBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin-top: 10px;
	margin-bottom: 20px;
	& > * {
		margin-top: 5px;
		margin-bottom: 5px;
	}
`
const Filter = styled.div`
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	align-items: flex-start;
	font-size: 19px;
	font-weight: 500;

	& > p {
		margin: 5px;
	}

	& > select {
		width: 100%;
		padding: 8px;
		font-size: 17px;
		border: 1px solid black;
	}

	& > input[type='text'] {
		width: 95%;
		padding: 8px;
		border: 1px solid black;
		font-size: 17px;
	}
	& > input[type='text']:focus {
		outline: none;
	}
`
const FilterFooter = styled.div`
	display: flex;
	justify-content: flex-end;
	& > * {
		margin-left: 40px;
	}
`
const Button = styled.button`
	width: 120px;
	height: 30px;
	background-color: white;
	font-size: 15px;
	color: black;
	font-weight: 500;
	text-align: center;
	border: 1px solid black;
	&:hover {
		cursor: pointer;
	}
	align-self: flex-start;
	&.submit {
		color: white;
		background-color: #04383b;
	}
`

type props = {
	filter: any
	setFilter: any
}

const OfferFilter = ({ filter, setFilter }: props) => {
	const [tags, setTags] = useState<string[]>([])
	const [newFilter, setNewFilter] = useState(filter)

	useEffect(() => {
		setNewFilter(Object.assign({ ...newFilter }, { tags: tags }))
		console.log(newFilter, filter)
	}, [tags])
	return (
		<>
			<FilterRect>
				<Title>Filter</Title>
				<FilterBody>
					<Filter>
						<p>Keywords</p>
						<TaggedInput tags={tags} setTags={setTags} height={'40px'} />
					</Filter>
					<Filter>
						<p>File Type</p>
						<select
							name={'fileType'}
							onChange={(e) => {
								setNewFilter(Object.assign({ ...newFilter }, { fileType: e.target.value }))
							}}
							defaultValue={newFilter.fileType}>
							<option value={'photo'}>Image</option>
							<option value={'audio'}>Audio</option>
							<option value={'csv'}>CSV</option>
							<option value={'txt'}>Text</option>
						</select>
					</Filter>
					<Filter>
						<p>Description</p>
						<input
							type={'text'}
							defaultValue={newFilter.description}
							onChange={(e) => {
								setNewFilter(Object.assign({ ...newFilter }, { description: e.target.value }))
							}}></input>
					</Filter>
				</FilterBody>
				<FilterFooter>
					<Button
						className={'submit'}
						onClick={() => {
							setFilter(newFilter)
						}}>
						Apply
					</Button>
					<Button>Clear</Button>
				</FilterFooter>
			</FilterRect>
		</>
	)
}

export default OfferFilter
