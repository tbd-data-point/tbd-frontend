import { useRef } from 'react'
import styled from 'styled-components'

const FileViewer = require('react-file-viewer')

const FilePreviewBcg = styled.div`
	display: none;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: fixed;
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

const FilePreviewComponent = ({ preview, setPreview, previewImage, selectedFiles }: any) => {
	const filePreviewWrapper = useRef<HTMLDivElement>(null)

	const disablePreview = () => {
		document.body.style.overflow = 'auto'
		setPreview({ index: null, src: null })
	}

	return (
		<FilePreviewBcg style={{ display: preview.src ? 'flex' : 'none' }} ref={filePreviewWrapper}>
			<PreviewBcg onClick={disablePreview}></PreviewBcg>
			<div
				className={'previewArrowBcg'}
				onClick={() =>
					preview.index - 1 < 0 ? previewImage(selectedFiles.length - 1) : previewImage(preview.index - 1)
				}>
				<div className={'previewArrow'} style={{ transform: 'rotate(180deg)' }}></div>
			</div>
			<FilePreview src={preview.src}></FilePreview>
			{/* <FileViewer filePath={preview.src} fileType={'png'}></FileViewer> */}
			<div
				className={'previewArrowBcg'}
				onClick={() =>
					preview.index + 1 > selectedFiles.length - 1 ? previewImage(0) : previewImage(preview.index + 1)
				}>
				<div className={'previewArrow'}></div>
			</div>
		</FilePreviewBcg>
	)
}

export default FilePreviewComponent
