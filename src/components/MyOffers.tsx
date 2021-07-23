import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { device } from '../assets/styles/breakpoints'
import OfferMin from './Offer_min'

const MyOffersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100%;

  @media ${device.laptop}{
    width: 70vw;
  }
`

// interface ListWrapper {}

const ListWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: -10px;

  overflow: scroll;
  position: relative;

  ::-webkit-scrollbar {
    display: none;
  }

  & > div {
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 30px;
  }
  transition: all 0.3s ease-out;
`

// const MyOffersHeader = styled.h1`
//   font-size: 30px;
//   font-weight: 500;
// `

const MyOffers = () => {
  const [offers] = useState<any>([
    {
      description:
        'Minions ipsum potatoooo hahaha ti aamoo! Poulet tikka masala. Butt para tú me want bananaaa! Belloo! Potatoooo. Hana dul sae jeje chasy bee do bee do bee do. Para tú poopayee baboiii chasy. Potatoooo chasy jeje po kass. Gelatooo me want bananaaa! Uuuhhh daa. Poulet tikka masala wiiiii ti aamoo! Jiji tulaliloo wiiiii hahaha baboiii underweaaar.',
      imgLink: ['1.jpg', '2.jpg'],
      title: 'Druga oferta',
      _id: '1',
    },
    {
      description:
        'Minions ipsum potatoooo hahaha ti aamoo! Poulet tikka masala. Butt para tú me want bananaaa! Belloo! Potatoooo. Hana dul sae jeje chasy bee do bee do bee do. Para tú poopayee baboiii chasy. Potatoooo chasy jeje po kass. Gelatooo me want bananaaa! Uuuhhh daa. Poulet tikka masala wiiiii ti aamoo! Jiji tulaliloo wiiiii hahaha baboiii underweaaar.',
      imgLink: ['1.jpg', '2.jpg'],
      title: 'Pierwsza oferta',
      _id: '2',
    },
    {
      description:
        'Minions ipsum potatoooo hahaha ti aamoo! Poulet tikka masala. Butt para tú me want bananaaa! Belloo! Potatoooo. Hana dul sae jeje chasy bee do bee do bee do. Para tú poopayee baboiii chasy. Potatoooo chasy jeje po kass. Gelatooo me want bananaaa! Uuuhhh daa. Poulet tikka masala wiiiii ti aamoo! Jiji tulaliloo wiiiii hahaha baboiii underweaaar.',
      imgLink: ['1.jpg', '2.jpg'],
      title: 'Pierwsza oferta',
      _id: '2',
    },
    {
      description:
        'Minions ipsum potatoooo hahaha ti aamoo! Poulet tikka masala. Butt para tú me want bananaaa! Belloo! Potatoooo. Hana dul sae jeje chasy bee do bee do bee do. Para tú poopayee baboiii chasy. Potatoooo chasy jeje po kass. Gelatooo me want bananaaa! Uuuhhh daa. Poulet tikka masala wiiiii ti aamoo! Jiji tulaliloo wiiiii hahaha baboiii underweaaar.',
      imgLink: ['1.jpg', '2.jpg'],
      title: 'Pierwsza oferta',
      _id: '2',
    },
  ])

  const [animation, setAnimation] = useState({
    seeDetails: '350',
  })

  useEffect(() => {
    const lswrapper =
      document.getElementById('list_wrapper')
    if (lswrapper)
      lswrapper.style.minHeight =
        animation.seeDetails + 'px'
  }, [animation])

  return (
    <>
      <MyOffersWrapper>
        <ListWrapper id={'list_wrapper'}>
          {offers.map((e: any, i: number) => {
            return (
              <div
                key={i}
                className={`offer_min`}
                style={{ position: 'relative' }}
              >
                <OfferMin
                  index={i}
                  small
                  data={e}
                  animation={{
                    animation: animation,
                    setAnimation: setAnimation,
                  }}
                ></OfferMin>
              </div>
            )
          })}
        </ListWrapper>
      </MyOffersWrapper>
    </>
  )
}

export default MyOffers
