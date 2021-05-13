import { useRef, useEffect } from 'react'
import styled from 'styled-components'
import upload from '../assets/img/upload.svg'
import cross from '../assets/img/cross.svg'

const FilePreviewWrapper = styled.div`
	display: none;
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	justify-content: space-between;
	align-items: center;
	z-index: 1000;
	background-color: rgba(0, 0, 0, 0.4);
	flex-direction: row;

	& > div > .previewArrow {
		clip-path: polygon(25% 0, 100% 50%, 25% 100%, 0% 100%, 75% 50%, 0% 0%);
		z-index: 1100;
		background-color: white;
		width: 28px;
		height: 50px;
		transition: all 0.1s;
	}

	& > div > .previewArrow:hover {
		transform: scale(1.1);
	}

	& > .previewArrowBcg {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 60px;
		margin-left: 50px;
		margin-right: 50px;
		cursor: pointer;
	}
`
const PreviewBcg = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	bottom: 0;
	z-index: -10;
`

const FilePreview = styled.img`
	max-width: 60%;
	max-height: 80%;
`

const ModalBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
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

type PropsType = {
	data: {
		height: string
		width: string
	}
	selectedFiles: any
	setSelectedFiles: any
	preview: any
	setPreview: any
}

const UploadBlock = (props: PropsType) => {
	const fileInputDOM = useRef<HTMLInputElement>(null)
	const filePreviewWrapper = useRef<HTMLDivElement>(null)
	useEffect(() => {
		if (filePreviewWrapper && filePreviewWrapper.current) {
			filePreviewWrapper.current.style.top = window.pageYOffset + 'px'
			console.log(filePreviewWrapper.current.scrollTop, window.pageYOffset)
		}
	}, [props.preview])

	const dragOver = (e: any) => {
		e.preventDefault()
		if (e.target.tagName === 'DIV' && !e.target.style.boxShadow)
			e.target.style.boxShadow = 'inset 0 0 5px 0 rgba(0,0,0,0.6)'
	}

	const dragEnter = (e: any) => {
		e.preventDefault()
	}

	const dragLeave = (e: any) => {
		e.preventDefault()
		e.target.style.boxShadow = null
	}

	const fileDrop = (e: any) => {
		if (!e.fromFileBrowser) e.target.style.boxShadow = null
		e.preventDefault()
		const files = [...e.dataTransfer.files].concat(props.selectedFiles)
		const flags = new Set()
		const output = files.filter((e) => {
			if (flags.has(e.name)) {
				return false
			}
			flags.add(e.name)
			return true
		})

		props.setSelectedFiles(output)
	}

	const deleteFile = (index: number) => {
		const files = props.selectedFiles
		files.splice(index, 1)
		props.setSelectedFiles([...files])
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
			fromFileBrowser: true,
		})
	}

	const previewImage = (index: number) => {
		document.body.style.overflow = 'hidden'

		if (index === props.preview.index) return 0
		const reader = new FileReader()
		reader.addEventListener(
			'load',
			() => {
				if (reader.result) {
					props.setPreview({ index: index, src: reader.result })
				}
			},
			false
		)

		if (props.selectedFiles) {
			reader.readAsDataURL(props.selectedFiles[index])
		}
	}
	const disablePreview = () => {
		props.setPreview({ index: null, src: null })
		document.body.style.overflow = 'auto'
	}

	return (
		<>
			<FilePreviewWrapper style={{ display: props.preview.src ? 'flex' : 'none' }} ref={filePreviewWrapper}>
				<PreviewBcg onClick={disablePreview}></PreviewBcg>
				<div
					className={'previewArrowBcg'}
					onClick={() =>
						props.preview.index - 1 < 0
							? previewImage(props.selectedFiles.length - 1)
							: previewImage(props.preview.index - 1)
					}>
					<div className={'previewArrow'} style={{ transform: 'rotate(180deg)' }}></div>
				</div>
				<FilePreview src={props.preview.src}></FilePreview>
				<div
					className={'previewArrowBcg'}
					onClick={() =>
						props.preview.index + 1 > props.selectedFiles.length - 1
							? previewImage(0)
							: previewImage(props.preview.index + 1)
					}>
					<div className={'previewArrow'}></div>
				</div>
			</FilePreviewWrapper>
			<ModalBody style={{ width: props.data.width, minHeight: props.data.height }}>
				<ModalInput
					onClick={openFileBrowser}
					onDragOver={dragOver}
					onDragEnter={dragEnter}
					onDragLeave={dragLeave}
					onDrop={fileDrop}>
					<FileInput type={'file'} ref={fileInputDOM} onChange={fileInput} multiple></FileInput>
					<img alt={''} src={upload} width={'60px'} style={{ marginBottom: '5px', marginTop: '20px' }}></img>
					<p>Drag and drop your files here</p>
				</ModalInput>
				<ModalList>
					{props.selectedFiles.map((e: any, i: number) => {
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
			</ModalBody>
		</>
	)
}

export default UploadBlock
