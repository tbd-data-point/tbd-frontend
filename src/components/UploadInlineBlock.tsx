import { useRef, useEffect } from 'react'

import {ModalBody, ModalInput, FileInput} from "./UploadInlineBlock/UploadInlineBlockStyledComponents";
import FilePreviewWrapperComponent from "./UploadInlineBlock/FilePreviewWrapperComponent";
import ModalListComponent from './UploadInlineBlock/ModalListComponent';

import upload from '../assets/img/upload.svg'

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
		if (e.name) {
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
			<FilePreviewWrapperComponent kindOfDisplay={props.preview.src} contentRef = {filePreviewWrapper}
			disablePreview={disablePreview} previewIndex={props.preview.index} previewImage={previewImage}
			previewsrc={props.preview.src} filesLength={props.selectedFiles.length}/>
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
				<ModalListComponent selectedFiles = {props.selectedFiles}
				previewImage = {previewImage} deleteFile={deleteFile}/>
			</ModalBody>
		</>
	)
}

export default UploadBlock
