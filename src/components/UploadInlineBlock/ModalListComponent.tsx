import React from "react";
import UploadInlineBlockStyledComponents from "./UploadInlineBlockStyledComponents";

import cross from '../../assets/img/cross.svg'

const ModalList = UploadInlineBlockStyledComponents.ModalList;
const SelectedFile = UploadInlineBlockStyledComponents.SelectedFile;

const ModalListComponent = ({selectedFiles, previewImage, deleteFile}: any) => {
    return <ModalList>
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
    </ModalList>;
};

export default ModalListComponent;