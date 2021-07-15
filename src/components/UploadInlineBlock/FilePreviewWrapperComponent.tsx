import React from "react";
import {FilePreviewWrapper, PreviewBcg, FilePreview} from "./UploadInlineBlockStyledComponents";

const FilePreviewWrapperComponent = ({kindOfDisplay, contentRef, disablePreview, previewIndex, previewImage, previewsrc, filesLength} : any) => {
    return <FilePreviewWrapper style={{ display: kindOfDisplay ? 'flex' : 'none' }} ref={contentRef}>
        <PreviewBcg onClick={disablePreview}></PreviewBcg>
        <div
            className={'previewArrowBcg'}
            onClick={() =>
                previewIndex - 1 < 0
                    ? previewImage(previewIndex - 1)
                    : previewImage(previewIndex - 1)
            }>
            <div className={'previewArrow'} style={{ transform: 'rotate(180deg)' }}></div>
        </div>
        <FilePreview src={previewsrc}></FilePreview>
        <div
            className={'previewArrowBcg'}
            onClick={() =>
                previewIndex + 1 > filesLength - 1
                    ? previewImage(0)
                    : previewImage(previewIndex + 1)
            }>
            <div className={'previewArrow'}></div>
        </div>
    </FilePreviewWrapper>;
};

export default FilePreviewWrapperComponent;