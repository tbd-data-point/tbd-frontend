import AppSearch from '../components/AppSearch'
// import Footer from "../components/Footer"
import styled from 'styled-components'
import OfferMin from '../components/Offer_min'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'

import OfferFilter from '../components/OfferFilter'
import MyOffers from '../components/MyOffers'

const MyOffersWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Header = styled.h1`
  font-size: 30px;
  font-weight: 500;
  align-self: flex-start;
  margin-left: 50px;
`

const OfferListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 100px;
  min-height: 1000px;
  padding-bottom: 500px;

  & > .offer_min {
    margin-bottom: 50px;
  }
`

interface HideOnScrollWrapper {
  scrolling?: boolean
}

const HideOnScrollWrapper = styled(
  'div',
)<HideOnScrollWrapper>`
  margin-top: 150px;
`

const HideOnScroll = (props: any) => {
  const [scrolling, setScrolling] = useState<number>(0)
  // const [delta, setDelta] = useState<number>(0)
  let delta = 0
  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      if (window.scrollY - delta > 0) setScrolling(1)
      else if (window.scrollY - delta < 0) setScrolling(0)
      // setTimeout(() => {
      //     setScrolling(0)
      // }, 300)
      delta = window.scrollY
    })
    const elements =
      document.querySelectorAll<HTMLElement>('.scrollable')
    elements.forEach((e, i) => {
      const child = e.querySelector<HTMLElement>('*')
      if (child) {
        child.style.position = 'fixed'
        child.style.zIndex = '10'
        child.style.transition = 'all 0.7s'
      }
    })
  }, [])

  useEffect(() => {
    const elements =
      document.querySelectorAll<HTMLElement>('.scrollable')
    elements.forEach((e, i) => {
      const child = e.querySelector<HTMLElement>('*')
      if (child) {
        if (scrolling == 1 || scrolling == 2) {
          if (
            child.getBoundingClientRect().top >
            window.outerHeight / 2
          ) {
            child.style.transform = `translatey(${Math.abs(
              child.getBoundingClientRect().height,
            )}px)`
          } else if (
            child.getBoundingClientRect().top <
            window.outerHeight / 2
          ) {
            child.style.transform = `translatey(-${Math.abs(
              child.getBoundingClientRect().height,
            )}px)`
          }
        } else if (scrolling == 0) {
          console.log()
          child.style.transform = `translatey(0)`
        }
      }
    })
  }, [scrolling])

  return (
    <>
      <HideOnScrollWrapper>
        {props.elements.map((Element: any) => {
          return (
            <div className={'scrollable'}>{Element}</div>
          )
        })}
      </HideOnScrollWrapper>
    </>
  )
}

const OffersList = () => {
  const [filter, setFilter] = useState<any>({
    fileType: 'photo',
    description: '',
    tags: [],
  })
  const [currentEntry, setCurrentEntry] = useState<any>()
  const observer = useRef(
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentEntry(entry)
          }
        })
      },
      { root: document.querySelector('#offer-wrapper') },
    ),
  )

  const [allOffers, setAllOffers] = useState<boolean>(true)
  const [offers, setOffers] = useState<any>([
    {
      description:
        'Minions ipsum potatoooo hahaha ti aamoo! Poulet tikka masala. Butt para tú me want bananaaa! Belloo! Potatoooo. Hana dul sae jeje chasy bee do bee do bee do. Para tú poopayee baboiii chasy. Potatoooo chasy jeje po kass. Gelatooo me want bananaaa! Uuuhhh daa. Poulet tikka masala wiiiii ti aamoo! Jiji tulaliloo wiiiii hahaha baboiii underweaaar.',
      imgLink: ['1.jpg', '2.jpg'],
      title: 'Pierwsza oferta',
      _id: '1',
    },
    {
      description:
        'Minions ipsum potatoooo hahaha ti aamoo! Poulet tikka masala. Butt para tú me want bananaaa! Belloo! Potatoooo. Hana dul sae jeje chasy bee do bee do bee do. Para tú poopayee baboiii chasy. Potatoooo chasy jeje po kass. Gelatooo me want bananaaa! Uuuhhh daa. Poulet tikka masala wiiiii ti aamoo! Jiji tulaliloo wiiiii hahaha baboiii underweaaar.',
      imgLink: ['1.jpg', '2.jpg'],
      title: 'Pierwsza oferta',
      _id: '2',
    },
  ])
  // useEffect(() => {
  //     axios
  //         .post("http://localhost:5000/offers/" + "3", { filter: filter })
  //         .then((res) => {
  //             console.log(res.data)
  //             setOffers(res.data)
  //             if (res.data.length > 0) setAllOffers(false)
  //             if (observer.current && document.querySelectorAll(".offer_min:last-child")[0]) {
  //                 observer.current.observe(document.querySelectorAll(".offer_min:last-child")[0])
  //             }
  //         })
  //         .catch((err) => {
  //             setOffers([])
  //             console.log(err)
  //         })
  // }, [filter])
  useEffect(() => {
    if (observer.current) {
      axios
        .post('http://localhost:5000/offers/' + '1', {
          ids: offers.map((e: any) => {
            return e._id
          }),
          filter: filter,
        })
        .then((res) => {
          if (res.data.length > 0) {
            setAllOffers(false)
            setOffers(offers.concat(res.data))
            if (
              document.querySelectorAll(
                '.offer_min:last-child',
              )[0]
            )
              observer.current.observe(
                document.querySelectorAll(
                  '.offer_min:last-child',
                )[0],
              )
            if (currentEntry) {
              observer.current.unobserve(
                currentEntry.target,
              )
            }
          } else {
            setAllOffers(true)
            observer.current.unobserve(currentEntry.target)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [currentEntry])

  return (
    <>
      <HideOnScroll
        elements={[
          <AppSearch />,
          <OfferFilter
            props={{ filter: filter, setFilter: setFilter }}
          />,
        ]}
      />

      {/* <AppSearch /> */}
      {/* <OfferFilter {...{ filter, setFilter }} /> */}

      <OfferListWrapper id="offer-wrapper">
        <Header>My offers:</Header>
        <MyOffersWrapper>
          <MyOffers />
        </MyOffersWrapper>
        <Header>Offers list:</Header>
        {offers.map((e: any, i: number) => {
          return (
            <div
              key={i}
              className={'offer_min'}
              style={{ position: 'relative' }}
            >
              <OfferMin data={e} index={i}></OfferMin>
            </div>
          )
        })}
        {allOffers ? <p>There are no more offers</p> : null}
      </OfferListWrapper>
    </>
  )
}

export default OffersList
