import styled from "styled-components";

namespace UploadInlineBlockStyledComponents{
    export const FilePreviewWrapper = styled.div`
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
    export const PreviewBcg = styled.div`
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: -10;
    `

    export const FilePreview = styled.img`
        max-width: 60%;
        max-height: 80%;
    `

    export const ModalBody = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    `
    export const ModalInput = styled.div`
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
    export const FileInput = styled.input`
        display: none;
        width: 100%;
        height: 100%;
    `

    export const ModalList = styled.div`
        width: 98%;
    `

    export const SelectedFile = styled.div`
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

};

export default UploadInlineBlockStyledComponents;