import React from "react";

import ModalListComponent from "./ModalListComponent";
import UploadModeStyledComponents from "./UploadModalStyledComponents";

import upload from '../../assets/img/upload.svg';

const ModalBody = UploadModeStyledComponents.ModalBody;
const ModalTitle = UploadModeStyledComponents.ModalTitle;
const ModalInput = UploadModeStyledComponents.ModalInput;
const FileInput = UploadModeStyledComponents.FileInput;
const ModalFooter = UploadModeStyledComponents.ModalFooter;
const Button = UploadModeStyledComponents.Button;

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
            <ModalListComponent selectedFiles = {selectedFiles} previewImageCallback = {previewImage} 
            deleteFileCallback = {deleteFile}/>
			<ModalFooter>
				<Button upload onClick={uploadHandler}>
					Upload
				</Button>
				<Button onClick={closeModal}>Cancel</Button>
			</ModalFooter>
		</ModalBody>
	);
};

export default ModalBodyComponent;