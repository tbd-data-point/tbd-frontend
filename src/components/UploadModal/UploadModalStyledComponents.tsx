import styled from 'styled-components'

namespace UploadModeStyledComponents{
    
    interface ButtonStyled {
        upload?: boolean
    }

    interface ShowModal {
        isDisplay?: boolean
    }

    export const ModalWrapper = styled.div<ShowModal>`
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

    export const Bcg = styled.div`
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: -10;
    `

    export const ModalBody = styled.div`
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
    export const ModalTitle = styled.h1`
        width: 100%;
        margin-top: 0px;
        margin-bottom: 10px;
        text-align: center;
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
    export const ModalFooter = styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding: 40px;
        padding-bottom: 0px;
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

    export const Button = styled.button<ButtonStyled>`
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
};

export default UploadModeStyledComponents;