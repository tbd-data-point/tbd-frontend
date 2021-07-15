import React from "react";
import {ModalList, SelectedFile} from "./UploadModalStyledComponents";

import cross from '../../assets/img/cross.svg'

const ModalListComponent = ({selectedFiles, previewImageCallback, deleteFileCallback} : any) => {
    return 			<ModalList>
    {selectedFiles.map((e: any, i: number) => {
        return (
            <SelectedFile key={i}>
                <p
                    onClick={() => {
                        previewImageCallback(i)
                    }}>
                    {e.name}
                </p>
                <div
                    onClick={() => {
                        deleteFileCallback(i)
                    }}>
                    <img alt={''} src={cross} width={'11px'}></img>
                </div>
            </SelectedFile>
        )
    })}
</ModalList>
}

export default ModalListComponent;
