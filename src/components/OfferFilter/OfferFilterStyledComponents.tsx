import styled from "styled-components";

namespace OfferMinStyledComponents{
    export const FilterRect = styled.div`
        width: 100%;
        z-index: 10;
        height: 80px;
        position: fixed;
        padding: 10px;
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
        background-color: white;
        transition: all 0.7s ease-out;
        bottom: 0;
        border-top: 0.03em solid black;
        &.show {
            // transform: translateX(0);
        }
        &.hide {
            // transform: translateX(300px);
        }
    `
    // const Title = styled.h1`
    //     font-size: 30px;
    //     font-weight: 400;
    //     margin-top: 0;
    //     margin-bottom: 0;
    // `
    
    export const FilterBody = styled.div`
        display: flex;
        flex-direction: row;
        width: 80%;
        justify-content: space-evenly;
        margin-top: 10px;
        margin-bottom: 20px;
        & > * {
        margin-top: 5px;
        margin-bottom: 5px;
        }
    `
    export const Filter = styled.div`
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: flex-start;
        font-size: 15px;
        font-weight: 500;
    
        & > p {
        margin: 5px;
        }
    
        & > select {
        width: 200px;
        padding: 8px;
        font-size: 14px;
        border: 1px solid black;
        }
    
        & > input[type='text'] {
        width: 200px;
        padding: 8px;
        border: 1px solid black;
        font-size: 14px;
        }
        & > input[type='text']:focus {
        outline: none;
        }
    `
    export const FilterFooter = styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        & > * {
        margin-right: 40px;
        }
    `
    export const Button = styled.button`
        width: 120px;
        height: 30px;
        background-color: white;
        font-size: 15px;
        color: black;
        font-weight: 500;
        text-align: center;
        border: 1px solid black;
        &:hover {
        cursor: pointer;
        }
        // align-self: flex-start;
        &.submit {
        color: white;
        background-color: #04383b;
        }
    `
}

export default OfferMinStyledComponents;