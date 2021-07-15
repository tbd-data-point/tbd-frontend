import { useRef, useState, useEffect } from 'react'
import axios from 'axios'

import FilePreviewComponent from './FilePreviewComponent'
import {ModalWrapper, Bcg} from "./UploadModal/UploadModalStyledComponents";
import ModalBodyComponent from "./UploadModal/ModalBodyComponent";

//TODO: Add prev, next arrow photos for file preview
//This might be of use: https://blog.logrocket.com/create-a-drag-and-drop-component-with-react-dropzone/

type PropsType = {
	//sample: boolean
	id: string
	displayModal: boolean
	setDisplayModal: any
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
		if (selectedFiles.length !== 0) {
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
