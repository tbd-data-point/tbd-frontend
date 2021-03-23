import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import upload from '../assets/img/upload.svg'
import cross from '../assets/img/cross.svg'

//This might be of use: https://blog.logrocket.com/create-a-drag-and-drop-component-with-react-dropzone/

const ModalWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	bottom: 0;
	background-color: black;
	z-index: 10;
	display: flex;
	justify-content: center;
	align-items: center;
`
const ModalBody = styled.div`
	width: 700px;
	min-height: 500px;
	background-color: white;
	border-radius: 5px;
	border: 1px solid black;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	padding: 30px;
`
const ModalTitle = styled.h1`
	width: 100%;
	text-align: left;
	margin-top: 0px;
	text-align: center;
`
const ModalInput = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-bottom: 100px;
	margin-top: 50px;
`
const ModalList = styled.div`
	min-height: 100px;
	width: 98%;
`
const ModalFooter = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	padding: 30px;
`

const SelectedFile = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	& > p:hover {
		color: blue;
		cursor: pointer;
		text-decoration: underline;
	}

	& > div {
		width: 11px;
		height: 11px;
		cursor: pointer;
	}

	& > div:hover {
		cursor: pointer;
	}

	& > div > img:active {
		color: red;
	}
`

const Button = styled.button<ButtonStyled>`
	margin-left: 30px;
	width: 100px;
	height: 30px;
	border: 1px solid black;
	border-radius: 1px;
	box-shadow: 0px 1px 4px 0.1px gray;
	transition: 0.1s all;
	&:hover {
		transform: scale(1.005);
		cursor: pointer;
	}
	${(props) =>
		props.upload &&
		`
            background-color: #04383b;
            color: whitesmoke;
        `};

	&:focus {
		outline: none;
	}
`

interface ButtonStyled {
	upload?: boolean
}

const UploadFiles = () => {
	const [selectedFiles, setSelectedFiles] = useState<any>([])

	const dragOver = (e: any) => {
		e.preventDefault()
	}

	const dragEnter = (e: any) => {
		e.preventDefault()
	}

	const dragLeave = (e: any) => {
		e.preventDefault()
	}

	const fileDrop = (e: any) => {
		e.preventDefault()
		const files = [...e.dataTransfer.files].concat(selectedFiles)
		const flags = new Set()
		const output = files.filter((e) => {
			if (flags.has(e.name)) {
				return false
			}
			flags.add(e.name)
			return true
		})

		setSelectedFiles(output)
	}

	const deleteFile = (index: number) => {
		const files = selectedFiles
		files.splice(index, 1)
		setSelectedFiles([...files])
	}

	return (
		<>
			<ModalWrapper onDragOver={dragOver} onDragEnter={dragEnter} onDragLeave={dragLeave} onDrop={fileDrop}>
				<ModalBody>
					<ModalTitle>Upload Files</ModalTitle>
					<ModalInput>
						<img alt={''} src={upload} width={'60px'} style={{ marginBottom: '5px', marginTop: '20px' }}></img>
						<p>Drag and drop your files anywhere on screen</p>
					</ModalInput>
					<ModalList>
						{selectedFiles.map((e: any, i: number) => {
							return (
								<SelectedFile key={i}>
									<p>{e.name}</p>
									<div
										onClick={() => {
											deleteFile(i)
										}}
									>
										<img alt={''} src={cross} width={'11px'}></img>
									</div>
								</SelectedFile>
							)
						})}
					</ModalList>
					<ModalFooter>
						<Button upload>Upload</Button>
						<Button>Cancel</Button>
					</ModalFooter>
				</ModalBody>
			</ModalWrapper>
		</>
	)
}

export default UploadFiles
