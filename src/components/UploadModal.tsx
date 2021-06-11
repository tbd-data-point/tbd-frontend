import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import upload from '../assets/img/upload.svg'
import cross from '../assets/img/cross.svg'

import FilePreviewComponent from './FilePreviewComponent'

//TODO: Add prev, next arrow photos for file preview
//This might be of use: https://blog.logrocket.com/create-a-drag-and-drop-component-with-react-dropzone/

type PropsType = {
	//sample: boolean
	id: string
	displayModal: boolean
	setDisplayModal: any
}

const ModalWrapper = styled.div<ShowModal>`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.87);
	z-index: 10;
	display: none;
	justify-content: center;
	align-items: center;
	${(props) =>
		props.isDisplay === true &&
		`
		display: flex;
		
	`}
`

const Bcg = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	bottom: 0;
	z-index: -10;
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
	margin-top: 0px;
	margin-bottom: 10px;
	text-align: center;
`
const ModalInput = styled.div`
	width: 100%;
	height: 250px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	transition: all 0.2s;
	&:hover {
		cursor: pointer;
		background-color: whitesmoke;
	}
`
const FileInput = styled.input`
	display: none;
	width: 100%;
	height: 100%;
`

const ModalList = styled.div`
	width: 98%;
`
const ModalFooter = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	padding: 40px;
	padding-bottom: 0px;
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
	margin-left: 35px;
	font-size: 15px;
	width: 110px;
	height: 35px;
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

interface ShowModal {
	isDisplay?: boolean
}

const ModalBodyComponent = ({
	openFileBrowser,
	fileInput,
	fileInputDOM,
	selectedFiles,
	previewImage,
	deleteFile,
	uploadHandler,
	closeModal,
	error,
}: any) => {
	return (
		<ModalBody>
			<ModalTitle>Upload Files</ModalTitle>
			<ModalInput onClick={openFileBrowser}>
				<FileInput type={'file'} ref={fileInputDOM} onChange={fileInput} multiple></FileInput>
				<img alt={''} src={upload} width={'60px'} style={{ marginBottom: '5px', marginTop: '20px' }}></img>
				<p>Drag and drop your files anywhere on screen</p>
			</ModalInput>
			<ModalList>
				{selectedFiles.map((e: any, i: number) => {
					return (
						<SelectedFile key={i}>
							<p
								onClick={() => {
									previewImage(i)
								}}>
								{e.name}
							</p>
							<div
								onClick={() => {
									deleteFile(i)
								}}>
								<img alt={''} src={cross} width={'11px'}></img>
							</div>
						</SelectedFile>
					)
				})}
			</ModalList>
			<ModalFooter>
				<Button upload onClick={uploadHandler}>
					Upload
				</Button>
				<Button onClick={closeModal}>Cancel</Button>
			</ModalFooter>
		</ModalBody>
	)
}

const UploadModal = ({ id, displayModal, setDisplayModal }: PropsType) => {
	const [selectedFiles, setSelectedFiles] = useState<any>([])
	const [preview, setPreview] = useState<any>({ index: null, src: null })
	const [error, setError] = useState({
		noFiles: null,
	})
	const fileInputDOM = useRef<HTMLInputElement>(null)
	const modal = useRef<HTMLDivElement>(null)

	useEffect(() => {
		!displayModal ? (document.body.style.overflow = 'auto') : (document.body.style.overflow = 'hidden')
	}, [displayModal, preview])

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

	const openFileBrowser = () => {
		if (fileInputDOM && fileInputDOM.current) {
			fileInputDOM.current.click()
		}
	}

	const fileInput = (e: any) => {
		fileDrop({
			dataTransfer: e.target,
			preventDefault: function () {
				return null
			},
		})
	}

	const uploadHandler = () => {
		if (selectedFiles.length != 0) {
			setError(Object.assign(error, { noFiles: null }))
			const dataToUpload = new FormData()
			dataToUpload.append('project', id)
			// dataToUpload.append("sample", "" + props.data.sample)
			selectedFiles.forEach((e: any) => {
				dataToUpload.append(e.name, e)
			})
			axios
				.post('http://localhost:5000/api/uploadFiles', dataToUpload)
				.then((suc) => console.log(suc))
				.catch((err) => console.log(err))
		} else {
			setError(Object.assign(error, { noFiles: true }))
		}
	}

	const previewImage = (index: number) => {
		if (index === preview.index) return 0
		const reader = new FileReader()
		reader.addEventListener(
			'load',
			() => {
				if (reader.result) {
					setPreview({ index: index, src: reader.result })
				}
			},
			false
		)

		if (selectedFiles) {
			reader.readAsDataURL(selectedFiles[index])
		}
	}

	const closeModal = () => {
		setDisplayModal(false)
	}

	return (
		<>
			<ModalWrapper
				ref={modal}
				isDisplay={displayModal}
				style={{ display: displayModal ? 'flex' : 'none' }}
				onDragOver={dragOver}
				onDragEnter={dragEnter}
				onDragLeave={dragLeave}
				onDrop={fileDrop}>
				<Bcg onClick={closeModal}></Bcg>

				{/* File preview can be transformed into another module TBH and can handle multiple types of files */}
				<FilePreviewComponent {...{ preview, setPreview, previewImage, selectedFiles }}></FilePreviewComponent>
				<ModalBodyComponent
					{...{
						openFileBrowser,
						fileInput,
						fileInputDOM,
						selectedFiles,
						previewImage,
						deleteFile,
						uploadHandler,
						closeModal,
						error,
					}}></ModalBodyComponent>
			</ModalWrapper>
		</>
	)
}

export default UploadModal
