import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"

import FilePreviewComponent from "./FilePreviewComponent"
import UploadModal from "./UploadModal"

type PropsType = {
    data: {
        description: string
        imgLink: string[]
        title: string
        _id: string
    }
    small?: boolean
    animation?: {
        animation: {
            seeDetails: any
        }
        setAnimation: any
    }
    index: number
}

interface OfferRectStyled {
    small?: boolean
}

const OfferRect = styled("div")<OfferRectStyled>`
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

const OfferHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 0px;
    margin-left: 1px;
    margin-right: 1px;
`

const OfferTitle = styled.h1`
    font-weight: 600;
    font-size: 28px;
`
interface OfferIcon {
    small?: boolean
}

const OfferIcon = styled("div")<OfferIcon>`
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

const StarIcon = styled.span`
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    width: 35px;
    height: 35px;
    background-color: rgba(245, 228, 0, 0.6);
    transition: all 0.2s;
    z-index: 0;
`

const OfferContent = styled.div`
    margin: 25px;
    margin-top: 15px;
`
const OfferDesc = styled.p`
    margin-top: 10px;
    margin-bottom: 15px;
`

const OfferPhotoWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
    & > .previewArrow {
        clip-path: polygon(25% 0, 100% 50%, 25% 100%, 0% 100%, 75% 50%, 0% 0%);
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
const SamplePhoto = styled.img`
    transition: all 0.1s;
    &:hover {
        cursor: pointer;
        transform: scale(1.003);
    }
    width: 220px;
    height: 150px;
    object-fit: cover;
`

const OfferButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`
interface ButtonStyled {
    upload?: boolean
}

const Button = styled("button")<ButtonStyled>`
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

interface StatusBar {
    small?: boolean
}

const StatusBar = styled("div")<StatusBar>`
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

const OfferMin = (props: PropsType) => {
    const [status, setStatus] = useState<any>({ status: "error", show: "hide", message: "" })
    const [preview, setPreview] = useState<any>({ index: null, src: null })
    const [seeDetails, setSeeDetails] = useState<boolean>(false)
    const [displayModal, setDisplayModal] = useState(false)
    const [smallPreview, setSmallPreview] = useState<number>(1)
    const selectedFiles = props.data.imgLink
    const [desc, setDesc] = useState<string>(props.data.description)
    const [myHeight, setMyHeight] = useState<number>(0)

    const id = props.data._id
    const desc_og = props.data.description

    let unfollowed = false

    useEffect(() => {
        setMyHeight(document.getElementsByClassName("offer_min")[props.index].getBoundingClientRect().height)
        if (desc_og.length > 200 && !seeDetails) {
            if (props.small) setDesc(desc_og.slice(0, 50) + "...")
            else setDesc(desc_og.slice(0, 200) + "...")
        } else {
            setDesc(desc_og)
        }
    }, [seeDetails])

    const peekDetails = () => {
        setSeeDetails(!seeDetails)
        const s = !seeDetails
        // const myHeight = document.getElementsByClassName("offer_min")[props.index].getBoundingClientRect().height
        console.log(s, myHeight)
        if (props.animation) {
            if (s && myHeight > parseInt(props.animation.animation.seeDetails)) {
                console.log("true")
                props.animation.setAnimation({ seeDetails: `${myHeight}` })
            } else if (!s && parseInt(props.animation.animation.seeDetails) != myHeight) {
                console.log("false")
                props.animation.setAnimation({ seeDetails: `350` })
            }
        }
        console.log(props.animation)
    }

    const previewImage = (index: number) => {
        document.body.style.overflow = "hidden"
        if (index === preview.index) return 0
        setPreview({ index: index, src: "http://localhost:5000" + props.data.imgLink[index] })
    }
    const showUploadModal = () => {
        document.body.style.overflow = "hidden"
        setDisplayModal(true)
    }

    const swipeSmallPreview = (direction: String) => {
        if (direction == "right") {
            smallPreview - 1 < 0 ? setSmallPreview(props.data.imgLink.length - 1) : setSmallPreview(smallPreview - 1)
        } else if (direction == "left") {
            smallPreview + 1 > props.data.imgLink.length - 1 ? setSmallPreview(0) : setSmallPreview(smallPreview + 1)
        }
    }

    const followOffer = () => {
        if (!props.small)
            axios
                .get("http://localhost:5000/offers/follow/" + props.data._id)
                .then((res) => {
                    setStatus({ status: "success", show: "show", message: "Offer added to your database" })
                    setTimeout(() => {
                        setStatus({ status: "success", show: "show", message: "Offer added to your database" })
                    }, 4000)
                })
                .catch((err) => {
                    setStatus({ status: "error", show: "show", message: "There was an error while adding the offer" })
                    setTimeout(() => {
                        setStatus({
                            status: "error",
                            show: "hide",
                            message: "There was an error while adding the offer",
                        })
                    }, 2000)
                })
        else if (props.small) {
            axios
                .get("http://localhost:5000/offers/unfollow/" + props.data._id)
                .then((res) => {
                    setStatus({ status: "success", show: "show", message: "Offer added to your database" })
                    setTimeout(() => {
                        setStatus({ status: "success", show: "show", message: "Offer added to your database" })
                    }, 4000)
                    unfollowed = true
                })
                .catch((err) => {
                    setStatus({ status: "error", show: "show", message: "There was an error while adding the offer" })
                    setTimeout(() => {
                        setStatus({
                            status: "error",
                            show: "hide",
                            message: "There was an error while adding the offer",
                        })
                        unfollowed = true
                    }, 2000)
                })
        }
    }

    return (
        <>
            <UploadModal {...{ id, displayModal, setDisplayModal }}></UploadModal>
            <FilePreviewComponent {...{ preview, setPreview, previewImage, selectedFiles }}></FilePreviewComponent>
            <OfferRect className={seeDetails ? "expanded" : ""} small={props.small}>
                <OfferContent>
                    <OfferHeader>
                        <OfferTitle>{props.data.title}</OfferTitle>
                        <OfferIcon small={props.small || unfollowed} onClick={followOffer}>
                            {props.small || unfollowed ? <p>Unfollow</p> : <p>Follow</p>}
                            {props.small ? null : <StarIcon />}
                        </OfferIcon>
                    </OfferHeader>
                    <OfferDesc>{desc}</OfferDesc>
                    <OfferPhotoWrap>
                        {selectedFiles.length > 2 ? (
                            <>
                                <div
                                    className={"previewArrow"}
                                    style={{ transform: "rotate(180deg)", left: "10px" }}></div>
                                <div className={"previewArrow"} style={{ right: "10px" }}></div>
                            </>
                        ) : null}

                        {props.data.imgLink.slice(smallPreview, smallPreview + 2).map((url, i) => {
                            return (
                                <SamplePhoto
                                    key={url}
                                    src={`http://localhost:5000${url}`}
                                    alt="Sample data"
                                    onClick={() => previewImage(i)}
                                />
                            )
                        })}
                    </OfferPhotoWrap>

                    <OfferButtons>
                        <div style={{ flexGrow: 1, marginLeft: "2px" }}>
                            <Button upload onClick={showUploadModal}>
                                Upload Photos
                            </Button>
                        </div>
                        <div style={{ flexGrow: 1, marginLeft: "2px" }}>
                            <Button onClick={() => peekDetails()}>See details</Button>
                        </div>
                    </OfferButtons>
                </OfferContent>
            </OfferRect>
            <StatusBar small={props.small} className={`${status.show} ${status.status}`}>
                {status.message}
            </StatusBar>
        </>
    )
}

export default OfferMin
