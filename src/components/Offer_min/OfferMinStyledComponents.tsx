import styled from 'styled-components'

namespace OfferMinStyledComponents {
  interface OfferRectStyled {
    small?: boolean
  }

  interface StatusBar {
    small?: boolean
  }

  interface OfferIcon {
    small?: boolean
  }

  interface ButtonStyled {
    upload?: boolean
  }

  export const OfferRect = styled('div')<OfferRectStyled>`
    &.expanded {
      box-shadow: 0 5px 10px -5px gray;
    }

    width: 500px;
    min-height: 420px;
    border: 1px solid black;
    display: flex;
    justify-content: top;
    align-items: left;
    flex-direction: column;

    transition: all 0.1s ease-in;

    margin-bottom: 50px;
    background-color: white;
    position: relative;
    & > div {
      width: 90%;
      margin-top: 0;
    }

    ${(props) =>
      props.small &&
      `
                width: 350px;
                // min-height: 0;
                min-height: 280px;
                
                h1 {
                    font-size: 20px;
                }
                p {
                    font-size: 15px;
                }
                img {
                    height: 80px;
                    width: 100px;
                }
                button {
                    width: 120px;
                    height: 35px;
                    font-size: 15px;
                    margin-top: 0;
                }
            `}
  `

  export const OfferHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 0px;
    margin-left: 1px;
    margin-right: 1px;
  `

  export const OfferTitle = styled.h1`
    font-weight: 600;
    font-size: 28px;
  `

  export const OfferIcon = styled('div')<OfferIcon>`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 25%;
    & > p {
      transition: all 0.2s;
    }
    &:hover {
      cursor: pointer;
    }
    &:hover > span {
      background-color: rgb(245, 228, 0);
    }
    &:hover > p {
      color: rgba(245, 228, 0, 1);
    }

    ${(props) =>
      props.small &&
      `
                &:hover > p{
                    color: rgb(230, 30, 30);
                }
            `}
  `

  export const StarIcon = styled.span`
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
    width: 35px;
    height: 35px;
    background-color: rgba(245, 228, 0, 0.6);
    transition: all 0.2s;
    z-index: 0;
  `

  export const OfferContent = styled.div`
    margin: 25px;
    margin-top: 15px;
  `
  export const OfferDesc = styled.p`
    margin-top: 10px;
    margin-bottom: 15px;
  `

  export const OfferPhotoWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
    & > .previewArrow {
      clip-path: polygon(
        25% 0,
        100% 50%,
        25% 100%,
        0% 100%,
        75% 50%,
        0% 0%
      );
      z-index: 1100;
      background-color: white;
      box-shadow: 1px 1px 1px white;
      width: 20px;
      height: 30px;
      transition: all 0.1s;
      position: absolute;
      transition: all 0.1s;
      pointer-events: none;
      z-index: 1;
    }
  `
  export const SamplePhoto = styled.img`
    transition: all 0.1s;
    &:hover {
      cursor: pointer;
      transform: scale(1.003);
    }
    width: 220px;
    height: 150px;
    object-fit: cover;
  `

  export const OfferButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  `

  export const Button = styled('button')<ButtonStyled>`
    width: 150px;
    padding: 8px;
    font-size: 18px;
    background-color: white;
    border: 1px solid black;
    margin-right: 20px;
    margin-top: 10px;
    transition: all 0.15s;
    font-weight: 100;
    border-radius: 1px;
    ${(props) =>
      props.upload &&
      `
                    background-color: #04383b;
                    color: whitesmoke;
                `};
    &:hover {
      box-shadow: 0px 2px 6px -2px gray;
      cursor: pointer;
      //transform: scale(1.001);
    }
    &:focus {
      outline: none;
    }
  `

  export const StatusBar = styled('div')<StatusBar>`
    width: 100%;
    height: 30px;
    color: white;
    position: absolute;
    top: 20px;
    z-index: -1;
    transition: all 0.4s;
    font-size: 16px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    ${(props) =>
      (props.small &&
        `
                &.show {
                    transform: translateY(-50px);
                }
                &.hide {
                    transform: translateY(-20px);
                }
        `) ||
      (!props.small &&
        `
        &.show {
            transform: translateY(-50px);
        }
        &.hide {
            transform: translateY(-20px);
        }
        `)}

    &.error {
      background-color: rgb(255, 67, 54);
    }
    &.success {
      background-color: rgb(77, 235, 101);
    }
  `
}

export default OfferMinStyledComponents
