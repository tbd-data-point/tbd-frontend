import { useEffect, useState } from 'react'
import axios from 'axios'

import {OfferRect, OfferContent, OfferDesc, StatusBar} from './Offer_min/OfferMinStyledComponents'
import OfferHeaderComponent from './Offer_min/OfferHeaderComponent'
import OfferPhotoComponent from './Offer_min/OfferPhotoComponent'
import OfferButtonsComponent from './Offer_min/OfferButtonsComponent'
import FilePreviewComponent from './FilePreviewComponent'
import UploadModal from './UploadModal'

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

const OfferMin = (props: PropsType) => {
  const [status, setStatus] = useState<any>({
    status: 'error',
    show: 'hide',
    message: '',
  })
  const [preview, setPreview] = useState<any>({
    index: null,
    src: null,
  })
  const [seeDetails, setSeeDetails] =
    useState<boolean>(false)
  const [displayModal, setDisplayModal] = useState(false)
  //   const [smallPreview, setSmallPreview] =
  //     useState<number>(1)
  const smallPreview = 1
  const selectedFiles = props.data.imgLink
  const [desc, setDesc] = useState<string>(
    props.data.description,
  )
  const [myHeight, setMyHeight] = useState<number>(0)

  const id = props.data._id
  const desc_og = props.data.description

  let unfollowed = false

  useEffect(() => {
    setMyHeight(
      document
        .getElementsByClassName('offer_min')
        [props.index].getBoundingClientRect().height,
    )
    if (desc_og.length > 200 && !seeDetails) {
      if (props.small) setDesc(desc_og.slice(0, 50) + '...')
      else setDesc(desc_og.slice(0, 200) + '...')
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
      if (
        s &&
        myHeight >
          parseInt(props.animation.animation.seeDetails)
      ) {
        console.log('true')
        props.animation.setAnimation({
          seeDetails: `${myHeight}`,
        })
      } else if (
        !s &&
        parseInt(props.animation.animation.seeDetails) !=
          myHeight
      ) {
        console.log('false')
        props.animation.setAnimation({ seeDetails: `350` })
      }
    }
    console.log(props.animation)
  }

  const previewImage = (index: number) => {
    document.body.style.overflow = 'hidden'
    if (index === preview.index) return 0
    setPreview({
      index: index,
      src:
        'http://localhost:5000' + props.data.imgLink[index],
    })
  }
  const showUploadModal = () => {
    document.body.style.overflow = 'hidden'
    setDisplayModal(true)
  }

  // const swipeSmallPreview = (direction: String) => {
  //     if (direction === "right") {
  //         smallPreview - 1 < 0 ? setSmallPreview(props.data.imgLink.length - 1) : setSmallPreview(smallPreview - 1)
  //     } else if (direction === "left") {
  //         smallPreview + 1 > props.data.imgLink.length - 1 ? setSmallPreview(0) : setSmallPreview(smallPreview + 1)
  //     }
  // }

  const followOffer = () => {
    if (!props.small)
      axios
        .get(
          'http://localhost:5000/offers/follow/' +
            props.data._id,
        )
        .then((res) => {
          setStatus({
            status: 'success',
            show: 'show',
            message: 'Offer added to your database',
          })
          setTimeout(() => {
            setStatus({
              status: 'success',
              show: 'show',
              message: 'Offer added to your database',
            })
          }, 4000)
        })
        .catch((err) => {
          setStatus({
            status: 'error',
            show: 'show',
            message:
              'There was an error while adding the offer',
          })
          setTimeout(() => {
            setStatus({
              status: 'error',
              show: 'hide',
              message:
                'There was an error while adding the offer',
            })
          }, 2000)
        })
    else if (props.small) {
      axios
        .get(
          'http://localhost:5000/offers/unfollow/' +
            props.data._id,
        )
        .then((res) => {
          setStatus({
            status: 'success',
            show: 'show',
            message: 'Offer added to your database',
          })
          setTimeout(() => {
            setStatus({
              status: 'success',
              show: 'show',
              message: 'Offer added to your database',
            })
          }, 4000)
          unfollowed = true
        })
        .catch((err) => {
          setStatus({
            status: 'error',
            show: 'show',
            message:
              'There was an error while adding the offer',
          })
          setTimeout(() => {
            setStatus({
              status: 'error',
              show: 'hide',
              message:
                'There was an error while adding the offer',
            })
            unfollowed = true
          }, 2000)
        })
    }
  }

  return (
    <>
      <UploadModal
        {...{ id, displayModal, setDisplayModal }}
      ></UploadModal>
      <FilePreviewComponent
        {...{
          preview,
          setPreview,
          previewImage,
          selectedFiles,
        }}
      ></FilePreviewComponent>
      <OfferRect
        className={seeDetails ? 'expanded' : ''}
        small={props.small}
      >
        <OfferContent>
          <OfferHeaderComponent
            title={props.data.title}
            small={props.small}
            unfollowed={unfollowed}
            followCallback={followOffer}
          />
          <OfferDesc>{desc}</OfferDesc>

          <OfferPhotoComponent
            filesLength={selectedFiles.length}
            mappingData={props.data.imgLink}
            photoClickCallback={previewImage}
            smallPreview={smallPreview}
          />

          <OfferButtonsComponent
            uploadCallback={showUploadModal}
            detailsCallback={() => peekDetails()}
          />
        </OfferContent>
      </OfferRect>
      <StatusBar
        small={props.small}
        className={`${status.show} ${status.status}`}
      >
        {status.message}
      </StatusBar>
    </>
  )
}

export default OfferMin
